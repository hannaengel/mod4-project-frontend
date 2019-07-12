import React, { Component } from 'react'
import { Header, Button } from 'semantic-ui-react'
import EditForm from './EditForm'

export default class ProfileDisplay extends Component {
   constructor(props) {
       super(props);
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
        const {username, email_address, zipcode} = this.props.user

        return(
                this.state.isToggleOn===false?
                  <div class = "ui two column grid">
                    <div id="information_column" class = "column">
                      <div className='profile-header'>
                       <div>
                         <h1>Your Information</h1>
                         <Header as='h3'>Username: {username} </Header>
                         {/* <Header as='h3'>Password: {password}</Header>*/}
                         <Header as='h3'>Email: {email_address}</Header>
                         <Header as='h3'>Zipcode: {zipcode} </Header>
                         <button onClick={this.handleClick} class="ui pink button">
                         <i onClick={this.handleClick} class="edit outline icon"></i>Edit</button>
                       </div>
                      </div>
                    </div>
                    <div class="column">
                      <img id="puppy-image" src="https://i.imgur.com/GfaMMOV.jpg"></img>
                    </div>
                  </div>
                    :
                    <div><EditForm updateProfile={this.props.updateProfile} user={this.props.user} onClick={this.props.onClick}/>
                  </div>

        )
    }
}
