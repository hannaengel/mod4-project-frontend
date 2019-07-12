import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

import { Link, Redirect } from 'react-router-dom'


export default class LoginForm extends Component {

    state = {
        username: '',
        loggedIn: false
    };

    constructor() {
        super();
        this.username = React.createRef()
        this.password = React.createRef()

        if (this.getToken()) {
          this.getProfile()
        }
    }

    getToken(jwt) {
      return localStorage.getItem('jwt')
    }


    getProfile = () => {
      let token = this.getToken()
      fetch('http://localhost:3000/api/v1/profile', {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      })
      .then(res=>res.json())
      .then(json=> {
        this.setState({user: json.user})
        console.log('user:', json.user)
        localStorage.setItem("user_id", json.user.id)
      })
    }

    handleChange = event => {
        const {name, value} =event.target;

        this.setState({
            [name]: value,
        }, ()=> console.log(this.state));
    }

    login = (ev) => {
        console.log('in login')
        ev.preventDefault()
        const username = this.username.current.value
        const password = this.password.current.value

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

                  this.setState(prevState => ({
                    loggedIn: true
                  }), ()=> console.log(this.state.loggedIn));
                  window.location.replace("http://localhost:3001/profile");
                }else{
                    console.log('nope!')
                }
              })
    }

    saveToken = (token) =>{
        console.log('token')
        localStorage.setItem('jwt', token)
    }

    clearToken(jwt) {
      localStorage.setItem('jwt', '')
    }

    handleSubmit = ()=>{
        this.login()
    }


    render() {

       return(
        // !this.state.loggedIn?
        //  <Redirect push to="/profile"/> :

            <div>
                <header className='spacer'> </header>
               <div className='login-section'>
                <div className='login-div'>
                <article className ='login'>
                <h2>Sign in</h2>
                <p>Not a member? <Link to="/users/new">Sign Up</Link></p>
                <Form onSubmit={this.login}>
                    <Form.Field onChange={this.handleChange}>

                     <label>Username</label>
                     <input name='username' type="text" placeholder='username' ref={this.username} required />
                     </Form.Field>

                     <Form.Field  onChange={this.handleChange}>
                     <label>Password</label>
                     <input id='loginpassword' name='password' type="password" placeholder='password' ref={this.password} required />

                     </Form.Field>

                     <Form.Field>

                      {/*<Link to ="/browse"> */}
                        <input type="submit" class="large ui button" value="Log In" onClick={this.login}/>
                     {/*</Link> */}

                     </Form.Field>

                </Form>
                </article>
                </div>
              </div>
            </div>
        )
    }
}
