import React from 'react'

export const LoginForm = (props) => {
    const {isSignIn,
    onSwitch} = props;

    const heading = isSignIn ? 'Log in' : 'Sign in';
    const switchFormButton = isSignIn ? 'I don\'t have an account' : 'I have an account';
    const subitButton = isSignIn ? 'Log in' : 'Sign in';

    return (
        <div className="login">
            <h1 className="login__heading">{heading}</h1>
            <button className="login__switch-form" onClick={onSwitch}>{switchFormButton}</button>
            <form className="login__login-form">
                <input type="text" placeholder="Login"/>
                <input type="text" placeholder="Password"/>
                <button className="login__submit" type="submit">{subitButton}</button>
            </form>
        </div>
    )
};
