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
          is_favorite: false
        };
        this.getProfile()
      }

      getProfile = () => {
        let token = localStorage.getItem("jwt")
        fetch('http://localhost:3000/api/v1/profile', {
          headers: {
            'Authorization': 'Bearer ' + token
          }
        })
        .then(res=>res.json())
        .then(json=> {
          console.log(json)
          this.setState({
            user_id: json.user.id
          })
        })
      }


      componentDidMount(){
        this.fetchDogs()
      }


    //customize filtered dogs here and add this method as onclick for the buttons
    fetchDogs = () =>{
        fetch('http://localhost:3000/api/v1/pets')
            .then(res=>res.json())
            .then(data => {
            this.setState({dogs: data})
        })
    }

      handleClick = e => {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
      }
      handleNext = () => {
        this.setState(prevState => ({ selectedDog: prevState.selectedDog + 1}), () => console.log(this.state.selectedDog));
      }

      handleFavorite = (dog) => {
        console.log('in handle favorite')
        console.log(dog.id)
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
      {document.body.style = 'background: white;'}
        return (
            <div>
                <Navbar />
                <h1 className='small-spacer'></h1>
               { this.state.dogs.length>0?
               <DogDisplay dog={this.state.dogs[this.state.selectedDog]} onClick={this.handleClick} onNext={this.handleNext} onFavorite={this.handleFavorite}/>: null}
                
               <DogFilter />
          
            </div>
        )
    }
}
