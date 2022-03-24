import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { ReactComponent as FrontLogo } from './LandingLogo.svg';
import { ReactComponent as FrontArrow } from './LandingArrow.svg';
import { ReactComponent as FrontGraphic } from './LandingGraphic.svg';
import { ReactComponent as FrontGears } from './LandingGears.svg';
import { ReactComponent as FrontTriangles } from './LandingTriangles.svg';
import "./Landingpage.css";
import { Slider } from 'react-typeform-embed';
import { Popup } from 'react-typeform-embed';
import { Event } from '../../ReactGA/Event';
class Landingpage extends Component {
    render() {
        return (
            <div className='Landingpage' content="width=device-width, initial-scale=1">
                <div className='overallcontainer'>
                    <div className='Frontlogo' >
                        <FrontLogo />
                    </div>
                    <div className='FrontGraphic' >
                        <FrontGraphic />
                    </div>
                    
                    <div className='regcontainer'>
                    <a className='btn_register' href="https://forms.gle/54DJ6jxApRHSG7NYA" style={{ textDecoration: 'none' }} onClick={()=> Event("REGISTER", "Register button clicked", "LANDING_PAGE")}>
                        <div style={{margin: '-10px 0px'}}>
                            Register
                        </div>
                    </a>

                    <a className='btn_register_pop_up' href="https://forms.gle/54DJ6jxApRHSG7NYA" style={{ textDecoration: 'none' }} onClick={()=> Event("REGISTER", "Register button clicked", "LANDING_PAGE")}>
                        <div style={{margin: '-10px 0px'}}>
                            Register
                        </div>
                    </a>
                    </div>
                    <div className='not_working_btn' >
                            <a className='nwb' href="https://forms.gle/54DJ6jxApRHSG7NYA" style={{ textDecoration: 'none', color: 'white'}} >Not Working? Click Here</a>
                    </div>
                    <div className='Landingpage-subcap'>The Illinois Design Challenge is an engineering design sprint challenge that brings people of all backgrounds together to push the edge of technology, design, and innovation. We aim to unveil the visionary efforts of the next generation of innovators.</div>
                </div>
            </div>
        )
    }
}
/*
const Landing = () => {
    return (
        <>                     <button data-tf-slider="IiUEV5kd" data-tf-width="550" data-tf-iframe-props="title=Illinois Design Challenge Participant Registration" data-tf-medium="snippet" style={{all:'unset'}}>Register</button><script src="//embed.typeform.com/next/embed.js"></script>
            <Landingpage />
            <Outlet />
        </>
    );<a classname='reg1' href="https://forms.gle/54DJ6jxApRHSG7NYA" style={{ textDecoration: 'none', color: '#394f57', margin: '-10px 0px'}} >Register</a>
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

                    <Link to="//embed.typeform.com/next/embed.js" style={{ textDecoration: 'none' }}>
                        <div className='btn_register'>
                            Register
                        </div>
                    </Link>
<div className='FrontGears' >
                        <FrontGears />
                    </div>
                    <div className='FrontTriangles' >
                        <FrontTriangles />
                    </div>
*/

export default Landingpage;