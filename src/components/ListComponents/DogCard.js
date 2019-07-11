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
     
      handleClick = e => {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
      }
    
    render() {
    
        return (
            <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
              <CardFront key="front" dog={this.props.dog} onClick={this.handleClick}>
              </CardFront>
       
              <CardBack key="back" dog={this.props.dog} onClick={this.handleClick}>
  
              </CardBack>
            </ReactCardFlip>
          )
    }
}