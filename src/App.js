import React from 'react';
import './App.css';
import { LoginForm } from './components/LoginForm'

class App extends React.Component {
  constructor() {
    super();
  }

  render(){
    return (
      <div className="App">
        <LoginForm />

      </div>
    );
  }
}

export default App;
