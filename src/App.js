import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import LoginForm from './components/LoginForm'
import CreateUserForm from './components/CreateUserForm'
import DogList from './components/ListComponents/DogList';
import SwipeCardContainer from './components/SwipeComponents/SwipeCardContainer';





const dog = {id: 1, name:'fido', image: 'https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}
function App() {
  return (
    <div className="App">
      {/* <Navbar />  */}
      {/*<LoginForm /> */}

      {/*<LoginForm /> */}
      {/* <CreateUserForm /> */}
      {/* <DogList  /> */}
      <SwipeCardContainer />
    </div>
  );
}

export default App;
