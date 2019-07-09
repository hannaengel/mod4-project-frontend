import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'


export default class CardBack extends Component {

    handleClick = e => {
        this.props.onClick(e)
    }
        render() {
            const { name} = this.props.dog
            return( 
                <div>
                     <Card  onClick={this.handleClick}
                   
                     header={name}
                    meta='Friend'
                    description='Card Back'
                    />
            </div>
            
            )
        }
    }