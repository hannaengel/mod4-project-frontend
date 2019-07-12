import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import LoginForm from './components/LoginForm'
import CreateUserForm from './components/CreateUserForm'
import DogList from './components/ListComponents/DogList';
import SwipeCardContainer from './components/SwipeComponents/SwipeCardContainer';
import ReactDOM from 'react-dom';
// Step 1. Import react-router functions
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Profile from './components/ProfileComponents/Profile.js'



class App extends React.Component{

  constructor() {
    super();
    this.state = {
      user: null
    };
  }

  
  // getProfile = () => {
  //   let token = localStorage.getItem("jwt")
  //   console.log(token)
  //   fetch('http://localhost:3000/api/v1/profile', {
  //     headers: {
  //       'Authorization': 'Bearer ' + token
  //     }
  //   })
  //   .then(res=>res.json())
  //   .then(json=> {
  //     console.log('Json User', json.user)
  //     this.setState({
  //       user_id: json.user.id
  //     })
  //   })
  // }

  updateUser = (user) => {

    this.setState({user: user})
  }

  render(){
  return (
    <div className="App">

      <Router>
        {/*<Navbar />*/}
        <Route exact path="/" 
          render={(props) => (
            <LoginForm {...props}
              onLogin={this.updateUser}
              user={this.state.user}
            />
          )}
        />
        <Route path={'/users/new'} render={(props) => <CreateUserForm {...props} onUserCreated={this.updateUser}/>}/>
        <Route path={'/liked'} component={DogList} />
        <Route path={'/profile'} render={(props) => <Profile {...props}/>}/>
        <Route path={'/browse'} component={SwipeCardContainer} />
      </Router>
    </div>
  );
}
}

export default App;
