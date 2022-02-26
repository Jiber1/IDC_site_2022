import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Button } from '../../Registerbutton/RegisterButton';
import "./Landingpage.css";

class Landingpage extends Component {
    render() {
        return (
            <div className='Landingpage'>
                <div className='overallcontainer'>
                    <h1 className='Landingpage-logo'>IDC</h1>
                    <div className='regcontainer'>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <div className='btn_register'>
                            Register
                        </div>
                    </Link>
                    </div>
                    <div className='learncontainer'>
                        <Link to="/home" style={{ textDecoration: 'none' }}>
                            <div className='btn_learn'>
                                Learn More
                            </div>
                        </Link>
                    </div>
                    <div className='down_arrow'>
                        <i class="fa-solid fa-angle-down"></i>
                    </div>
                </div>
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

export default Landingpage;