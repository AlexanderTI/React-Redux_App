import React from 'react';
import './App.css';
import { LoginForm } from './components/LoginForm'

function App() {
  return (
    <div className="App">
      <LoginForm isSignIn = {true}/>

    </div>
  );
}

export default App;
