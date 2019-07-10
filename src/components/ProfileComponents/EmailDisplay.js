import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
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
   
        return( 
            this.state.isToggleOn===false?
            <div>

                <h1 class="ui dividing header">Email Template</h1>
               
                <div className='login-section'>
                <div className='login-div'>
                 <Grid centered columns={2} padded='vertically'>
                <h2>Subject:     I Am Interested In Meeting This Pup!</h2>
                <p>Hello,
                     I found this pup's profile on BarkBrower.com and I am interested in potentially meeting and adopting them.
                      Please let me know your availability so we can set up a meeting! 
                     Looking forward to connecting.
                    </p>
                    <button onClick={this.handleClick} class="ui pink button"> 
                 <i class="edit outline icon"></i>Edit Email</button>
                </Grid>
                </div>
                </div> 
            </div>: <EmailForm onClick={this.props.onClick}/>
        )
    }
}