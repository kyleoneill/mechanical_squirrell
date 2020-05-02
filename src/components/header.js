import React from 'react';
import Logo from '../assets/logo.png';

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <img src={Logo} alt="Cannot find header"/>
            </div>
        );
    }
}

export default Header;
