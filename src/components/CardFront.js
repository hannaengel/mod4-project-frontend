import React, { Component } from 'react'
import { Card, Header } from 'semantic-ui-react'


export default class CardFront extends Component {
handleClick = e => {
    this.props.onClick(e)
}
    render() {
        const {image, name} = this.props.dog
        return( 
            <div>
                <div class="ui card"  onClick={this.handleClick}>
                    <div class="content">
                    <div class="ui medium bordered image">
                    <img src={image}/>
                    </div>
                    <div class="ui medium header">
                        {name}
                    </div>

                    <div class="description">
                    Dog Description here
                    </div>
    
                    </div>
                    <div class="extra content">
                    <div class="ui two buttons">
                    <button class="ui pink button">Request to Meet</button>
                        <div class="ui basic grey button">Remove</div>
                    </div>
                    </div>
                </div>
            </div>
        
        )
    }
}