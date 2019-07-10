import React, { Component } from 'react'
import { Form, Grid, Button, Header } from 'semantic-ui-react'

export default class EditForm extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            email: '',
            zipcode: ''
        };
    }

    handleChange = event => {
        const {name, value} =event.target;

        this.setState({
            [name]: value,
        }, ()=> console.log(this.state));
    }

    handleSubmit = e =>{
        e.preventDefault();
        this.props.onClick(this.state)
    }
    render() {
        const {username, password, email, zipcode} = this.props.user

        return( 
            <div>
                <container className='login-section'>
               
                 <Header  as='h1' dividing> Edit User</Header>
                
                <Form className='create-form'>
                    <Form.Field onChange={this.handleChange}>

                     <label>Username</label>
                     <input name='username' v={username} />
                     </Form.Field>

                     <Form.Field  onChange={this.handleChange}>
                     <label>Password</label>
                     <input name='password' v={password} />
                     </Form.Field>

                     <Form.Field  onChange={this.handleChange}>
                     <label>Email</label>
                     <input name='email_address' v={email} />
                     </Form.Field>



                     <Form.Field  onChange={this.handleChange}>
                     <label>Zipcode</label>
                     <input name='zipcode' v={zipcode} />
                     </Form.Field>

                     <Form.Field>
                     <Button onClick={this.handleSubmit}>Save</Button>
                     </Form.Field>
                </Form>
               
                
                </container>
            </div>
        )
    }
}