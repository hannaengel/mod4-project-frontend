import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'


export default class CardBack extends Component {

    handleClick = e => {
        this.props.onClick(e)
    }
        render() {
            const { name, description, age, breed_primary, small_photo_url, gender, status, profile_url,} = this.props.dog
            return( 
                <div>
                         <div class="ui card"  onClick={this.handleClick}>
                    <div class="content">
                    <img class="right floated ui avatar image" src={small_photo_url} />
                    
                    <div class="ui medium header">
                    {gender==='Female'? <i class='venus icon'></i>: <i class='mars icon'></i>}
                        {name}
                       
                    </div>
                    <p>{breed_primary}</p>

                    </div>
                    <div class="extra content">
                        <h4>{age}</h4>
                   
                        
                    <description>{description}</description>
                   
                    </div>
                </div>
            </div>
            
            )
        }
    }