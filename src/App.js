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





const dog = {id: 1, name:'fido', image: 'https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}
function App() {
  return (
    <div className="App">

      <Router>
        <Navbar />
        <Route exact path="/" component={LoginForm} />
        <Route path={'/users/new'} component={CreateUserForm} />
        <Route path={'/liked'} component={DogList} />
      </Router>

      {/* <DogList  /> */}
      {/*<SwipeCardContainer /> */}
    </div>
  );
}

export default App;
