import React from 'react'
import {connect} from "react-redux";

export class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSignIn: true,
            loginValue: '',
            passwordValue: ''
        }
    }

    saveCred = () => {
        if(!localStorage.getItem('users')) {
            localStorage.setItem('users', JSON.stringify([]))
        }
        let usersArray = JSON.parse(localStorage.getItem('users'));
        let userObj = {
            loginValue: this.state.loginValue,
            passwordValue: this.state.passwordValue
        };
        usersArray.push(userObj);
        localStorage.setItem('users', JSON.stringify(usersArray))
    };

    checkAccount = () => {
        if(!localStorage.getItem('users')) {
            return null
        }
        let usersArray = JSON.parse(localStorage.getItem('users'));
        return  usersArray.find(el => el.loginValue === this.state.loginValue && el.passwordValue === this.state.passwordValue)
    };

    onSwitch = () => {
        this.setState(prevState => ({
            isSignIn: !prevState.isSignIn
        }));
    };

    onChange = ev => this.setState({[ev.target.name]: ev.target.value});

    onSubmit = ev => {
        ev.preventDefault();
        if(!this.state.isSignIn && this.state.loginValue && this.state.passwordValue) {
            this.saveCred(this.state);
        } else {
            console.log(this.checkAccount());
        }
        this.setState(
            {loginValue: '',
                passwordValue:''})
    };


    render() {
        return (
            <div className="login">
                <h1 className="login__heading">{this.state.isSignIn ? 'Log in' : 'Sign up' }</h1>
                <button className="login__switch-form" onClick={this.onSwitch}>{this.state.isSignIn ? 'I don\'t have an account' : 'I have an account'}</button>
                <form className="login__login-form">
                    <input type="text" name="loginValue" placeholder="Login" onChange={this.onChange} value={this.state.loginValue} />
                    <input type="text" name="passwordValue" placeholder="Password" onChange={this.onChange} value={this.state.passwordValue} />
                    <button className="login__submit" onClick={this.onSubmit} disabled={!(this.state.loginValue && this.state.passwordValue)}>{this. state.isSignIn ? 'Log in' : 'Sign up'}</button>
                </form>
            </div>
        )
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
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
