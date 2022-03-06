import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { ReactComponent as FrontLogo } from './LandingLogo.svg';
import { ReactComponent as FrontArrow } from './LandingArrow.svg';
import { ReactComponent as FrontGraphic } from './LandingGraphic.svg';
import { ReactComponent as FrontGears } from './LandingGears.svg';
import { ReactComponent as FrontTriangles } from './LandingTriangles.svg';
import "./Landingpage.css";

class Landingpage extends Component {
    render() {
        return (
            <div className='Landingpage'>
                <div className='overallcontainer'>
                    <div className='Frontlogo'>
                        <FrontLogo />
                    </div>
                    <div className='FrontTriangles'>
                        <FrontTriangles />
                    </div>
                    <div className='FrontGraphic'>
                        <FrontGraphic />
                    </div>
                    <div className='FrontGears'>
                        <FrontGears />
                    </div>
                    <div className='regcontainer'>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <div className='btn_register'>
                            Register
                        </div>
                    </Link>
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
//                     <body className='Landingpage-abouttext'>The Illinois Design Challenge is an engineering design sprint challenge that brings people of all backgrounds together to push the edge of technology, design, and innovation. We aim to unveil the visionary efforts of the next generation of innovators.</body>
//                     <h1 className='Landingpage-aboutus'>About Us</h1>
/*
div className='emailcontainer'>
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <div className='btn_email'>
                                Email us!
                            </div>
                        </Link>
                    </div>

*/

export default Landingpage;