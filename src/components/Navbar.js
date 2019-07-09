import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react' 

export default class Navbar extends Component {

//state here
    render() {
        return( 
            <div>
                <Menu> 
                <Menu.Item
                    name='icon here'

                    />
                    <Menu.Item 
                    name='Profile'
                    />
                </Menu>
            </div>
        )
    }
}