import React, { Component, Fragment } from 'react'

import { Button, Form, Grid } from 'semantic-ui-react'

export default class LoginForm extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password_digest: ''
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
        const password_digest = this.state.password_digest
        const URL = 'http://localhost:3000/api/v1/login/'
        const headers = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({user: {username, password_digest}})
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
                <header className='spacer'> </header>
               <container className='login-section'>
                <div className='login-div'>
                <article className ='login'>
                <h2>Sign in</h2>
                <p>Not a member? <a color='red'> Sign Up</a></p>
                <Form>
                    <Form.Field onChange={this.handleChange}>

                     <label>Username</label>
                     <input name='username' placeholder='username' />
                     </Form.Field>

                     <Form.Field className='login-text' onChange={this.handleChange}>
                     <label className='login-text'>Password</label>
                     <input name='password_digest' placeholder='password' />
                     </Form.Field>

                     <Form.Field>
                     <Button onClick={this.handleSubmit}>Login</Button>
                     </Form.Field>

                </Form>
                </article>
                </div>
                </container>
                
            </div>
        )
    }
}