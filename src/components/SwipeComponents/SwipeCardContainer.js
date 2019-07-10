import React, { Component } from 'react'
import ReactCardFlip from 'react-card-flip';
import SwipeCardFront from './SwipeCardFront';
import SwipeCardBack from './SwipeCardBack';
import Navbar from '/Users/hannaengel/Development/projects/mod4-project-frontend/src/components/Navbar.js';


export default class SwipeCardContainer extends Component {

    constructor() {
        super();
          this.state = {
          isFlipped: false,
          selectedDog: 0,
          dogs: []
        };
      }


      componentDidMount(){
        this.fetchDogs()
      }

    fetchDogs = () =>{
        fetch('http://localhost:3000/api/v1/pets')
            .then(res=>res.json())
            .then(data => {
            console.log(data)
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

      handleFavorite = dog => {
        console.log(dog)
      }
      

      // getDog = () =>{
      //   const dogArray = this.state.dogs
      //   const index = this.state.selectedDog
      //   return dogArray[index]
      // }

    render() {
    
        return (
            <div>
                <Navbar />
                <h1 className='small-spacer'></h1>
                {this.state.dogs.length>0?
            <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
                {document.body.style = 'background: white;'}
              <SwipeCardFront key="front" dog={this.state.dogs[this.state.selectedDog]} onClick={this.handleClick} onNext={this.handleNext} onFavorite={this.handleFavorite}>
              </SwipeCardFront>
       
              <SwipeCardBack key="back" dog={this.state.dogs[this.state.selectedDog]} onClick={this.handleClick}>
              </SwipeCardBack>
            </ReactCardFlip>: null}
            </div>
        )
    }
}