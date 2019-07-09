import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import LoginForm from './components/LoginForm'
import CreateUserForm from './components/CreateUserForm'

function App() {
  return (
    <div className="App">
      {/* <Navbar />  */}
      <LoginForm />
      {/* <CreateUserForm /> */}
    </div>
  );
}

export default App;
