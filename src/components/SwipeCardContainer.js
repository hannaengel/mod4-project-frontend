import React, { Component } from 'react'
import ReactCardFlip from 'react-card-flip';
import SwipeCardFront from './SwipeCardFront';
import SwipeCardBack from './SwipeCardBack';
import Navbar from './Navbar';


export default class SwipeCardContainer extends Component {

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
            <div>
                <Navbar />
                <h1 className='spacer'></h1>
            <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
                {document.body.style = 'background: white;'}
              <SwipeCardFront key="front" dog={this.props.dog} onClick={this.handleClick}>
              </SwipeCardFront>
       
              <SwipeCardBack key="back" dog={this.props.dog} onClick={this.handleClick}>
  
              </SwipeCardBack>
            </ReactCardFlip>
            </div>
        )
    }
}