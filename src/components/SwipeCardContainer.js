import React, { Component } from 'react'
import ReactCardFlip from 'react-card-flip';
import SwipeCardFront from './SwipeCardFront';
import SwipeCardBack from './SwipeCardBack';
import Navbar from './Navbar';


export default class SwipeCardContainer extends Component {

    constructor() {
        super();
          this.state = {
          isFlipped: false,
          selectedDog: 1,
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
      

      getDog = () =>{
        const dogArray = this.state.dogs
        const index = this.state.selectedDog
        return dogArray[index]
      }
    render() {
    
        return (
            <div>
                <Navbar />
                <h1 className='spacer'></h1>
            <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
                {document.body.style = 'background: white;'}
              <SwipeCardFront key="front" dog={this.getDog} onClick={this.handleClick} onNext={this.handleNext} onFavorite={this.handleFavorite}>
              </SwipeCardFront>
       
              <SwipeCardBack key="back" dog={this.getDog} onClick={this.handleClick}>
              </SwipeCardBack>
            </ReactCardFlip>
            </div>
        )
    }
}