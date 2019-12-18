import React from 'react'

export class LoginForm extends React.Component {
    constructor() {
        super();
        this.state = {
            isSignIn: true
        }
    }

    onSwitch = () => {
        this.setState(prevState => ({
            isSignIn: !prevState.isSignIn 
        }));
    }

    onSubmit = (ev) => {
        ev.preventDefault();
        if(this.state.isSignIn){
            console.log('ENTER')
        } else {
            console.log("ADDED TO LocalStorage")
        }
    }



    render() {
        return (
            <div className="login">
                <h1 className="login__heading">{this.state.isSignIn ? 'Log in' : 'Sign up' }</h1>
                <button className="login__switch-form" onClick={this.onSwitch}>{this.state.isSignIn ? 'I don\'t have an account' : 'I have an account'}</button>
                <form className="login__login-form">
                    <input type="text" placeholder="Login" />
                    <input type="text" placeholder="Password" />
                    <button className="login__submit" onClick={this.onSubmit}>{this. state.isSignIn ? 'Log in' : 'Sign up'}</button>
                </form>
            </div>
        )
    }
};
