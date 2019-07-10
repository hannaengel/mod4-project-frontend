import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react' 
import logo from '../images/logo.png'

export default class Navbar extends Component {

//state here
    render() {
        return( 
            <div>
               <div class="ui top attached menu">
                <div class="item">
                <img class="ui avatar image" src={logo} />
                Browse
                </div>
                
                <a class="item">
                Favorites
                </a>
                <div class="right menu">
                <a class="item">
                Profile
                </a>
                <div class="item">
                <div class="ui secondary button">Log Out</div>
            </div>
            </div>
            </div>
           
          
            </div>
        )
    }
}