import React, { Component } from 'react'

import Navbar from '../Navbar'
import ProfileDisplay from './ProfileDisplay'
import EmailDisplay from './EmailDisplay'

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: '',
            profileInfo: {
                username: '',
                email: '',
                zipcode: '',
                user_id: null
              }
            }
            this.getProfile()
        };

      getProfile = () => {
        let token = localStorage.getItem("jwt")
        fetch('http://localhost:3000/api/v1/profile', {
          headers: {
            'Authorization': 'Bearer ' + token
          }
        })
        .then(res=>res.json())
        .then(json=> {
          console.log(json)
          this.setState({
            profileInfo: {
              ...this.state.profileInfo,
              username: json.user.username,
              email: json.user.email_address,
              zipcode: json.user.zipcode,
              user_id: json.user.id
            }
          });
        })
      }

    handleSelect = event => {
        const profileBtn = document.getElementById('profile')
        const emailBtn = document.getElementById('email')
        event.persist()
        if(event.target.id===emailBtn.id){
            emailBtn.classList.add('active')
            profileBtn.classList.remove('active')
        }else{
            profileBtn.classList.add('active')
            emailBtn.classList.remove('active')
        }
        this.setState(prevState => ({
            selected: event.target.name
        }), ()=> console.log('hello',  this.state.selected))

     }

     editEmail = email => {
         this.setState(prevState => ({
             profileInfo: {...prevState.profileInfo,
                 email
             }
         }), ()=> console.log(this.state.profileInfo))
     }

     editProfile = newState =>{

     }

    render() {
        {document.body.style = 'background: white;'}
        return(
            <section>
             <Navbar />
            <div class="ui celled grid">
                <div class="row">
                <div class='profile-header'>
                    <h2 class="ui header">
                        <i class="user icon"></i>
                        {this.state.profileInfo.username}
                    </h2>
                </div>
                </div>
            <div class="row">
                <div class="ui fluid three item top attached tabular menu" color='teal'>
                    <a class="active item" onClick={this.handleSelect} name='profile' id='profile'>
                        Profile
                    </a>
                    <a class="item" onClick={this.handleSelect} name='email' id='email'>
                         <i class="envelope outline icon"></i> Email
                    </a>

                 </div>
                </div>
            </div>
            {this.state.selected==='email'?
            <EmailDisplay user={this.props.user} name={this.state.username} onClick={this.editEmail}/>:
            <ProfileDisplay updateProfile={this.getProfile} user={this.state.profileInfo} onClick={this.editProfile}/>}
        </section>
        )
    }
}
