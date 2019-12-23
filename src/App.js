import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import LoginForm from './components/LoginForm';
import Table from './components/Table';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <Route exact path="/">
                        {this.props.user.isAuthorized ? <Table/> : <LoginForm/>}
                    </Route>
                    <Route path={"/login"}>
                        <LoginForm/>
                    </Route>
                    <Route path={"/table"}>
                        <Table/>
                    </Route>
                </Router>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    };
};

export default connect(mapStateToProps)(App);

