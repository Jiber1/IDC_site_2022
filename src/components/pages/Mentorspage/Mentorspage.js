import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./Mentorspage.css";

class Mentorspage extends Component {
    render() {
        return (
            <div className='Mentorspage'>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <div className='Reg'>
                        Register
                    </div>
                </Link>
                <Link to="/home" style={{ textDecoration: 'none' }}>
                    <div className='Learn'>
                        Learn More
                    </div>
                </Link>
            </div>
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

export default Mentorspage;