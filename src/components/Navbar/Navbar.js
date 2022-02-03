import React, { Component } from 'react';
import { Options } from "./Options";
import './Navbar.css'
import { Button } from "../Registerbutton/Button"
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = { onClick: false } // On click boolean for animations/icon transitions, and mobile navbar

  handleClick = () => {
    this.setState({ onClick: !this.state.onClick})
  }
//update ul classname with true false states for mobile navbar


  render() {
    return (
      <nav className='Navbar'>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <h1 className='Navbar-logo'>Illinois Design Challenge</h1>
        </Link>
          <ul className='Navbar-menu'>
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
