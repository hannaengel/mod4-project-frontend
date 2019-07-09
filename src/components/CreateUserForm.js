import React, { Component, Fragment } from 'react'

import { Button, Form, Grid, Header } from 'semantic-ui-react'

export default class CreateUserFOrm extends Component {
    
    constructor() {
        super();
        this.state = {
            username: '',
            password_digest: '',
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
    }

    handleSubmit = ()=>{
        this.createUser()
    }


    render() {

        return( 
            <div>
                 <Header className='text-white' as='h1' dividing> Create Account </Header>
                 <Grid centered columns={2} padded='vertically'>
                <Form className='create-form'>
                    <Form.Field onChange={this.handleChange}>

                     <label>Username</label>
                     <input name='username' placeholder='username' />
                     </Form.Field>

                     <Form.Field  onChange={this.handleChange}>
                     <label>Password</label>
                     <input name='password_digest' placeholder='password' />
                     </Form.Field>

                     <Form.Field  onChange={this.handleChange}>
                     <label>Email</label>
                     <input name='email_address' placeholder='email' />
                     </Form.Field>

            

                     <Form.Field  onChange={this.handleChange}>
                     <label>Zipcode</label>
                     <input name='zipcode' placeholder='zipcode' />
                     </Form.Field>

                     <Form.Field>
                     <Button onClick={this.handleSubmit}>Create New User</Button>
                     </Form.Field>


                </Form>
                </Grid>
            </div>
        )
    }
}