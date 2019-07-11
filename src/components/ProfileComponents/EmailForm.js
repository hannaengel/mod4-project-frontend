import React, { Component } from 'react'
import { Form, Grid, Button, Header, TextArea } from 'semantic-ui-react'

export default class EmailForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message_template: this.props.user.message_template,
            user_id: this.props.user.user_id
        };
    }
    handleChange = event => {
        const {value} =event.target;

        this.setState(prevState => ({
            message_template: value
        }), ()=> console.log(this.state.message_template))
    }


    handleSubmit = e =>{
        e.preventDefault();
        const url = `http://localhost:3000/api/v1/users/${this.state.user_id}`
        fetch(url, {
            method: 'PUT',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
             message_template: this.state.message_template,
             id: this.state.user_id
            })
        })
      .then(res=>res.json())
      .then(json => {
        console.log(json)
      })
      window.location.replace("http://localhost:3001/profile");
    }


    render() {
        return( 
            <div>
                <container className='login-section'>
               
                 <Header  as='h1' dividing> Edit Default Email</Header>
                
                <Form className='create-form'>
                    <TextArea onChange={this.handleChange} 

                     />

                     <Form.Field>
                     <Button onClick={this.handleSubmit}>Save</Button>
                     </Form.Field>
                </Form>
            
                </container>
            </div>
        )
    }
}