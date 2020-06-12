import React, { Component } from 'react';
import { Link } from "react-router-dom"

import './NavBar.css'


class NavBar extends Component {

  isAuthenticated = () => localStorage.getItem("credentials") !== null;

clearStorage = () => localStorage.clear();

    render(){
        return (
            <header>
         <picture className="site-title">
        <img src={require('./nutshell-logo.png')}></img>
    </picture>
        <nav>
          <ul className="container">
            <li><Link className="nav-link" to="/">Home</Link></li>
            <li><Link className="nav-link" to="/events">Events</Link></li>
            <li><Link className="nav-link" to="/news">News</Link></li>
            <li><Link className="nav-link" to="/tasks">Tasks</Link></li>
            <li><Link className="nav-link" to="/" onClick={this.clearStorage}>Logout</Link></li>
          
          </ul>
        </nav>
      </header>
        )
    }
}


export default NavBar;