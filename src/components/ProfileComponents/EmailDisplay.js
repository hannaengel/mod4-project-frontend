import React, { Component } from 'react'
import { Grid , Divider} from 'semantic-ui-react'
import EmailForm from './EmailForm'

export default class EmailDisplay extends Component {
    constructor() {
        super();
        this.state = {
            isToggleOn: false
        };
    }
 
     handleClick = () =>{
         this.setState(prevState => (
          {isToggleOn: !prevState.isToggleOn}
         ), () => console.log(this.state));
         }

    render() {
        const {message_template, username} = this.props.user
        return( 
            this.state.isToggleOn===false?
            <div>
 
                <h1 class="ui dividing header">Email Template</h1>
               
                <div className='login-section'>
                <div className='login-div'>
                 <Grid centered columns={2} padded='vertically'>
                <h2>Subject:     I Am Interested In Meeting This Pup!</h2>
                    <h3>{message_template}</h3> 
                    <Grid.Row><h4>Sincerely, {username}</h4></Grid.Row>
                    <Grid.Row></Grid.Row>
                </Grid>
                <button onClick={this.handleClick} class="ui pink button"> 
                 <i class="edit outline icon"></i>Edit Email</button>
                </div>
                </div> 
            </div>: <EmailForm updateEmail={this.props.updateEmail} user={this.props.user}/>
        )
    }
}