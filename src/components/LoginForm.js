import React, { Component, Fragment } from 'react'

import { Button, Form, Grid } from 'semantic-ui-react'

export default class LoginForm extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        };
    }

    handleChange = event => {
        const {name, value} =event.target;

        this.setState({
            [name]: value,
        }, ()=> console.log(this.state));
    }

    login = () =>{
        const username = this.state.username
        const password = this.state.password
        const URL = 'http://localhost:3000/api/v1/login/'
        const headers = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({user: {username, password}})
        }
        fetch(URL, headers)
            .then(res=>res.json())
            .then(json => {
                console.log('login:', json)
                if (json && json.jwt) {
                  this.saveToken(json.jwt)
                  this.getProfile()
                }else{
                    console.log('nope!')
                }
              })
    }

    saveToken = (token) =>{
        console.log(token)
    }

   getProfile = ()=>{
        console.log('IM GONNA TAKE YOU TO YOUR PROFILE')
    }

    handleSubmit = ()=>{
        this.login()
    }


    render() {
        return(
            <div>
                 <Grid centered columns={2} padded='vertically'>
                <Form>
                    <Form.Field onChange={this.handleChange}>

                     <label>Username</label>
                     <input name='username' placeholder='username' />
                     </Form.Field>

                     <Form.Field  onChange={this.handleChange}>
                     <label>Password</label>
                     <input name='password' placeholder='password' />
                     </Form.Field>

                     <Form.Field>
                     <Button onClick={this.handleSubmit}>Login</Button>
                     </Form.Field>

                </Form>
                </Grid>
            </div>
        )
    }
}
