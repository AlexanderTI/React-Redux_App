import React from 'react';
import {connect} from 'react-redux';
import './App.css';
import LoginForm from './components/LoginForm';
import Table from './components/Table'


class App extends React.Component {
  constructor() {    
    super();
  }

  render(){
    return (      
      <div className="App">
        <LoginForm />
        <Table />

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
      addUser: login => {
          dispatch({
              type: 'ADD_USER',
              payload: login
          })
      }
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(App);

// export default App;
