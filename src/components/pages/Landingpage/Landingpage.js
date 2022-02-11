import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./Landingpage.css";

class Landingpage extends Component {
    render() {
        
        return (
        <body class="backdrop">
            <div className='Landingpage'>
                <h1 className='Landingpage-logo'>Illinois Design Challenge</h1>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <div className='Register'>
                        Register
                    </div>
                </Link>
                <Link to="/home" style={{ textDecoration: 'none' }}>
                    <div className='Learnmore'>
                        Learn More
                    </div>
                </Link>
            </div>
        </body>
        )
    }
}
/*
const Landing = () => {
    return (
        <>
            <Landingpage />
            <Outlet />
        </>
    );
}; */

export default Landingpage;