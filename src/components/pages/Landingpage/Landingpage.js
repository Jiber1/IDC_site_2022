import React, { Component } from 'react';
import { RegButton } from "../../Registerbutton/RegisterButton";
import { LearnMoreButton } from '../../LearnMoreButton/LearnMoreButton';
import { Link } from "react-router-dom";
import "./Landingpage.css";

class Landingpage extends Component {
    render() {
        
        return (
        <div className='LandingPage'>
            <h1 className='LandingPage-logo'>Illinois Design Challenge</h1>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <RegButton>Register</RegButton>
            </Link>
            <Link to="/home" style={{ textDecoration: 'none' }}>
                <LearnMoreButton>Learn more</LearnMoreButton>
            </Link>
        </div>
        )
    }
}

export default Landingpage;