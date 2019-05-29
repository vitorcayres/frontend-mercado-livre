import React, { Component } from 'react'
import logo from '../assets/images/logo.png'
import SearchFormComponent from './SearchFormComponent';

class MenuComponent extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <a href="/">
                        <img src={logo} alt="" className="navbar-logo" />
                    </a>
                    <div className="navbar-collapse">
                        <SearchFormComponent />
                    </div>
                </div>
            </nav>
        );
    }
}

export default MenuComponent;