import React, { Component } from 'react'
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
          is_favorite: false
        };
        this.getProfile()
        this.fetchDogs()
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
    fetchDogs = () =>{
        fetch('http://localhost:3000/api/v1/pets', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        })
            .then(res=>res.json())
            .then(data => {
            this.setState({dogs: data})
        })
            .then(()=> this.getDogId())
    }

    getDogId = () => {
      let selectedDog = this.state.dogs[this.state.selectedDog]
      
      this.setState({dog_id: selectedDog.id})
    }


      handleClick = e => {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
      }
      handleNext = () => {
        this.setState(prevState => ({ selectedDog: prevState.selectedDog + 1}));
        this.getDogId()
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

    render() {
      {document.body.style = 'background: whitesmoke;'}

        return (
            <div>
                <Navbar />
                <h1 className='small-spacer'></h1>

               { this.state.dogs.length>0?
               <DogDisplay favorite={this.state.is_favorite} dog={this.state.dogs[this.state.selectedDog]} onClick={this.handleClick} onNext={this.handleNext} onFavorite={this.handleFavorite}/>: null}
                
               <DogFilter />
          

            </div>
        )
    }
}
