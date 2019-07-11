import React, { Component } from 'react'
//import other files here

export default class SwipeCardFront extends Component {
    handleClick = e => {
        this.props.onClick(e)
    }

    handleNext = () => {
        this.props.onNext()
    }
    handleFavorite = () => {
        this.props.onFavorite(this.props.dog)
    }
    render() {
        return( 
            <div>
                  <div class="ui centered card" >
                    <div class="content">
                    <div class="ui medium bordered image">
                    <img className='swipe-image' alt='dog' src={this.props.dog.medium_photo_url}/>
                    </div>
                    <div class="ui medium header">
                        {this.props.dog.name}
                    </div>
                    <div class="description">
                    Dog Description here
                    </div>
                    </div>

                    <div class="extra content">
                        <span class="left floated like" onClick={this.handleFavorite}>
                        <i class="like icon"></i>
                        </span>
                        <span class="center floated question">
                        <i onClick={this.handleClick} class="question circle outline icon"></i>
                        </span>
                        <span class="right floated arrow" onClick={this.handleNext}>
                        <i class="arrow circle right icon"></i>
                        </span>
                    </div>
                 </div>
            </div>
        )
    }
}