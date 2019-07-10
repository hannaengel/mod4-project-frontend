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




const user = {username: 'Hanna', password:'pig', email: 'content', zipcode:'32934'}
function App() {
  return (
    <div className="App">

      <Router>
        <Navbar />
        <Route exact path="/" component={LoginForm} />
        <Route path={'/users/new'} component={CreateUserForm} />
        <Route path={'/liked'} component={DogList} />
      </Router>

      {/*<SwipeCardContainer /> */}
      <Profile user={user}/>
    </div>
  );
}

export default App;
