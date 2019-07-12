import React, { Component} from 'react'

import { Button, Form, Grid, Header } from 'semantic-ui-react'

export default class CreateUserFOrm extends Component {

    constructor() {
        super();
        this.state = {
            username: '',
            email_address: ''
        };
    }

    handleChange = event => {
        const {name, value} =event.target;

        this.setState({
            [name]: value,
        }, ()=> console.log(this.state));
    }

    createUser = () =>{
        const URL = 'http://localhost:3000/api/v1/users'
        const userInfo= this.state
        console.log(userInfo)
        const headers = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        }
        fetch(URL, headers)
            .then(res=>res.json())
<<<<<<< HEAD
            window.location.replace("http://localhost:3001/browse");
=======
            window.location.replace("http://localhost:3001/");
>>>>>>> 81d989230e466fa9c26b1bd85c11d5e5b70a7c37
    }

    handleSubmit = ()=>{
        this.createUser()
    }

    backToLogin = () => {
      window.location.replace("http://localhost:3001/");
    }


    render() {

        return(
            <div>
                <header className='spacer'> </header>
               <container className='login-section'>
                <div className='login-div'>
                <article className ='login'>
                 <Header  as='h1' dividing> Create Account </Header>
                 <Grid centered columns={2} padded='vertically'>
                <Form className='create-form'>
                    <Form.Field onChange={this.handleChange}>

                     <label>Username</label>
                     <input name='username' placeholder='username' required/>
                     </Form.Field>

                     <Form.Field  onChange={this.handleChange}>
                     <label>Password</label>
                     <input type="password" name='password' placeholder='password' required/>
                     </Form.Field>

                     <Form.Field  onChange={this.handleChange}>
                     <label>Email</label>
                     <input type="email"name='email_address' placeholder='email' required/>
                     </Form.Field>



                     <Form.Field  onChange={this.handleChange}>
                     <label>Zipcode</label>
                     <input name='zipcode' placeholder='zipcode' required/>
                     </Form.Field>

                     <Form.Field>
                     <Button onClick={this.handleSubmit}>Create New User</Button>
                     </Form.Field>
                     <Form.Field>
                     <Button onClick={this.backToLogin}>Return to Login</Button>
                     </Form.Field>
                </Form>
                </Grid>
                </article>
                </div>
                </container>
            </div>
        )
    }
}
