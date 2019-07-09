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
        console.log('state :', this.state, 'send login to backend')
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