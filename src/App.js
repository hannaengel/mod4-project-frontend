import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import LoginForm from './components/LoginForm'
import CreateUserForm from './components/CreateUserForm'
import DogList from './components/ListComponents/DogList';
import SwipeCardContainer from './components/SwipeComponents/SwipeCardContainer';
import Profile from './components/ProfileComponents/Profile.js'




const user = {username: 'Hanna', password:'pig', email: 'content', zipcode:'32934'}
function App() {
  return (
    <div className="App">
      {/* <Navbar />  */}
      {/*<LoginForm /> */}

      {/*<LoginForm /> */}
      {/* <CreateUserForm /> */}
      {/* <DogList  /> */}

      {/* {<SwipeCardContainer />} */}
      <Profile user={user}/>

    {/*<SwipeCardContainer />*/}

    </div>
  );
}

export default App;
