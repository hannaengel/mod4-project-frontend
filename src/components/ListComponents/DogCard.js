import React, { Component } from 'react'
import ReactCardFlip from 'react-card-flip';
import CardFront from './CardFront';
import CardBack from './CardBack';

export default class DogCard extends Component {
    constructor() {
        super();
          this.state = {
          isFlipped: false
        };
      }

      //make a fetch to the user_pets controller here and then make a custom route
      //to find the user_pets id. Then pass this back up to DogList and then delete it when removing the pet
      //OR you can create a custom route in the User Controller to delete the petId from their pets array

      handleClick = e => {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
      }

    render() {

        return (
            <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
              <CardFront key="front" removeFavorite={this.props.removeFavorite} dog={this.props.dog} onClick={this.handleClick}>
              </CardFront>

              <CardBack key="back" dog={this.props.dog} onClick={this.handleClick}>

              </CardBack>
            </ReactCardFlip>
          )
    }
}
