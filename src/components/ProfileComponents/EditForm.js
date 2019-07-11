import React, { Component } from 'react'
import { Form, Grid, Button, Header } from 'semantic-ui-react'

export default class EditForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          //removed password
            user_id: this.props.user.user_id,
            username: this.props.user.username,
            email: this.props.user.email,
            zipcode: this.props.user.zipcode
        };
    }

    handleChange = event => {

        let name = event.target.name
        let value = event.target.value
        this.setState({
          [name]: value
        })
    }

    //add fetch here!!!
    handleSubmit = e =>{
        e.preventDefault();
        this.props.onClick(this.state)
        const url = `http://localhost:3000/api/v1/users/${this.state.user_id}`
        fetch(url, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({
          id: this.state.user_id,
          username: this.state.username,
          zipcode: this.state.zipcode,
          email_address: this.state.email
        })
        })
      .then(res=>res.json())
      .then(json => {
        console.log(json)
        this.setState({
          username: json.username,
          zipcode: json.zipcode,
          email: json.email_address
        })
        {/*this.props.updateProfile*/}
      })
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
                     <input value={this.state.username} name='username' v={username} />
                     </Form.Field>

                     {/*<Form.Field placeholder={this.props.username}  onChange={this.handleChange}>
                     <label>Password</label>
                     <input name='password' v={password} />
                     </Form.Field> */}

                     <Form.Field  onChange={this.handleChange}>
                     <label>Email</label>
                     <input value={this.state.email} name='email' v={email} />
                     </Form.Field>



                     <Form.Field  onChange={this.handleChange}>
                     <label>Zipcode</label>
                     <input value={this.state.zipcode} name='zipcode' v={zipcode} />
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
