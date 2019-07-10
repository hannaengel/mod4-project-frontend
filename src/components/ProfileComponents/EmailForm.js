import React, { Component } from 'react'
import { Form, Grid, Button, Header, TextArea } from 'semantic-ui-react'

export default class EmailForm extends Component {

    constructor() {
        super();
        this.state = {
            email: ''
        };
    }
    handleChange = event => {
        const {value} =event.target;

        this.setState({
            email: value,
        });
    }



    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.onClick(this.state.email)
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