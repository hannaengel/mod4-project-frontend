import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {

//state here
    render() {
        return(
            <div>
               <div class="ui top attached menu">
                <div class="item">

                <a class="item" href="http://localhost:3001/browse">
                <img class="ui avatar image" src={logo} />
                Browse
                </a>
                </div>


                <a href="http://localhost:3001/liked" class="item">
                Favorites
                </a>
                <div class="right menu">
                <a href="http://localhost:3001/profile" class="item">
                Profile
                </a>
                <div class="item">
                <div href="http://localhost:3001/" class="ui secondary button">Log Out</div>
            </div>
            </div>
            </div>


            </div>
        )
    }
}
