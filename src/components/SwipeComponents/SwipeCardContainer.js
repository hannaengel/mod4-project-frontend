import React, { Component } from 'react'
import ReactCardFlip from 'react-card-flip';
import SwipeCardFront from './SwipeCardFront';
import DogFilter from './DogFilter';
import Navbar from '../Navbar.js';
import DogDisplay from './DogDisplay';


export default class SwipeCardContainer extends Component {

    constructor() {
        super();
          this.state = {
          user_id: null,
          isFlipped: false,
          selectedDog: 0,
          dogs: [],
          dog_id: null,
          sexFilter: '',
          ageFilter: ''
        };
        this.getProfile()
        this.fetchDogsFromDB()
      }


      getProfile = () => {
        let token = localStorage.getItem("jwt")
        console.log(token)
        fetch('http://localhost:3000/api/v1/profile', {
          headers: {
            'Authorization': 'Bearer ' + token
          }
        })
        .then(res=>res.json())
        .then(json=> {
          console.log('Json User', json.user)
          this.setState({
            user_id: json.user.id
          })
        })
      }

    //customize filtered dogs here and add this method as onclick for the buttons
    fetchDogsFromDB = () =>{
      console.log('in fetch dogs')
        fetch('http://localhost:3000/api/v1/pets', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        })
            .then(res=>res.json())
            .then(data => {
            this.setState({dogs: data}, () => this.getDogId())
        })
            {/* .then(()=> this.getDogId())*/}
    }

    getDogId = () => {
      let selectedDog = this.state.dogs[this.state.selectedDog]
      this.setState({dog_id: selectedDog.id})
    }

    setDogs = (dogList) => {
      this.setState({dogs: dogList}, () => console.log(this.state.dogs))
    }

      handleClick = e => {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
      }
      handleNext = () => {
        if((this.state.selectedDog + 1) < this.state.dogs.length - 1) {
          this.setState(prevState => ({ selectedDog: prevState.selectedDog + 1}));
          this.getDogId()
        } else {
          console.log('adding dogs')
          this.addDogsToDB()
        }
      }

      addDogsToDB = () => {
        let sexFilter = this.state.sexFilter
        let ageFilter = this.state.ageFilter
        return fetch(`http://localhost:3000/api/v1/pets`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({"gender": sexFilter, "age": ageFilter})
        })
        .then(res=>res.json())
        .then(json => {
          let oldDogs = this.state.dogs
          console.log(oldDogs)
          this.setState(prevState => ({
            dogs: json
          }))
        })
      }

      handleFavorite = (dog) => {
        let user_id = this.state.user_id
        return fetch(`http://localhost:3000/api/v1/user_pets`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify({pet_id: dog.id, user_id: user_id})
        })
        .then(res=>res.json())
        .then(this.setState({is_favorite: true}))
      }

      updateFiltersState = (filterHash) => {
        this.setState(filterHash)
      }


      render() {
      

          return (
              <div className='cover'>
                  <Navbar />
                  <h1 className='small-spacer'></h1>

                 { this.state.dogs.length>0?
                 <DogDisplay dog={this.state.dogs[this.state.selectedDog]} onClick={this.handleClick} onNext={this.handleNext} onFavorite={this.handleFavorite}/>: null}

                 <DogFilter updateFiltersState={this.updateFiltersState} setDogs={this.setDogs} />

              </div>
          )
      }
}
