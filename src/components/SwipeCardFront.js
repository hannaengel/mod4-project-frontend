import React, { Component } from 'react'
//import other files here

export default class SwipeCardFront extends Component {
    handleClick = e => {
        this.props.onClick(e)
    }
    render() {
        return( 
            <div>
                  <div class="ui centered card"  onClick={this.handleClick}>
                    <div class="content">
                    <div class="ui medium bordered image">
                    <img src={this.props.dog.image}/>
                    </div>
                    <div class="ui medium header">
                        {this.props.dog.name}
                    </div>

                    <div class="description">
                    Dog Description here
                    </div>
    
                    </div>
                    <div class="extra content">
                        <span class="left floated like">
                        <i class="like icon"></i>
                        </span>
                        <span class="center floated star">
                        <i class="question circle outline icon"></i>
                        </span>
                        <span class="right floated star">
                        <i class="arrow circle right icon"></i>
                        </span>
                    </div>
                 </div>
            </div>
        )
    }
}