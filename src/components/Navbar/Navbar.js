import React, { Component } from 'react';
import { Options } from "./Options";
import { Button } from "../Registerbutton/RegisterButton"
import { Link } from "react-router-dom";
import './Navbar.css'

class Navbar extends Component {
  state = { onClick: false } // On click boolean for animations/icon transitions, and mobile navbar

  handleClick = () => {
    this.setState({ onClick: !this.state.onClick})
  }
  
  render() {
    return (
      <nav className='Navbar'>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <h1 className='Navbar-logo'>IDC</h1>
        </Link>
        <div className="mobile-menu-icon" onClick={this.handleClick}>
          <i className={this.state.onClick ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
          <ul className={this.state.onClick ? 'Navbar-menu active' : 'Navbar-menu'}>
            {Options.map((item, index) => {
              return (
                <li key={index}>
                  <a className={item.cName} href={item.url}>
                    {item.title}
                  </a>
                </li>
              )
            })}
          </ul>
        <Button>Register</Button>
      </nav>
    ) 
  }
}
  

export default Navbar;
