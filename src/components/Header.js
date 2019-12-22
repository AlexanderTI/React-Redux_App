import React from 'react';

const Header = (props) => {
    return (
        <header>
            <h1>LOGO</h1>
            <div className="header__user-container">
                <span className="header__user-name">User: {props.userName}</span>
                <button className="header__logout" onClick = {props.onLogout}>LOGOUT</button>
            </div>
        </header>
    )
}

export default Header;