import React, { Component } from 'react'
import { Card, Header } from 'semantic-ui-react'


export default class CardFront extends Component {
handleClick = e => {
    this.props.onClick(e)
}
    render() {
        const {medium_photo_url, name} = this.props.dog
        return( 
            <div>
                <div class="ui card"  onClick={this.handleClick}>
                    <div class="content">
                    <div class="ui medium bordered image">
                    <img src={medium_photo_url}/>
                    </div>
                    <div class="ui medium header">
                        {name}
                    </div>


                    </div>
                    <div class="extra content">
                    <div class="ui two buttons">
                        <div class="ui basic grey button">Remove</div>
                        <button class="ui pink button">Request to Meet</button>
                    </div>
                    </div>
                </div>
            </div>
        
        )
    }
}