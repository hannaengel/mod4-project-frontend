import React, { Component } from 'react'
//import other files here

export default class SwipeCardBack extends Component {
    handleClick = e => {
        this.props.onClick(e)
    }
    render() {
        return( 
            <div>
                  <div class="ui centered card"  onClick={this.handleClick}>
                    <div class="content">
                    <div class="ui medium header">
                        {this.props.dog.name}
                    </div>
                    <div class="description">
                    Dog Description here for back of card
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}