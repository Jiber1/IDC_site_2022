import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { ReactComponent as FrontLogo } from './LandingLogo.svg';
import { ReactComponent as FrontArrow } from './LandingArrow.svg';
import { ReactComponent as FrontGraphic } from './LandingGraphic.svg';
import { ReactComponent as IDCpencil } from './IDCpencil.svg';
import { ReactComponent as IconCollection } from './Iconcollection.svg';

import { ReactComponent as SmallFrontGraphic } from './Smallsvgs/LandingGraphic80.svg';
import { ReactComponent as TinyFrontGraphic } from './Smallsvgs/LandingGraphic60.svg';
import { ReactComponent as MobileFrontGraphic } from './Smallsvgs/LandingGraphic40.svg';
import { ReactComponent as SmallFrontLogo } from './Smallsvgs/LandingLogo80.svg';
import { ReactComponent as TinyFrontLogo } from './Smallsvgs/LandingLogo60.svg';
import { ReactComponent as MobileFrontLogo } from './Smallsvgs/LandingLogo40.svg';

import "./Landingpage.css";
import "./fonts.css";
import { Event } from '../../ReactGA/Event';


class Landingpage extends Component {
    constructor() {
        super();
        this.scrollDiv = React.createRef();
    }
    render() {
        return (
            <div className='Landingpage' content="width=device-width, initial-scale=1">
                <div className='overallcontainer'>
                
                    <div className='Frontlogo' >
                        <SmallFrontLogo />
                    </div>
                    <div className='TinyFrontLogo' >
                        <TinyFrontLogo />
                    </div>
                    <div className='FrontGraphic' >
                        <SmallFrontGraphic />
                    </div>
                    <div className='TinyFrontGraphic' >
                        <TinyFrontGraphic />
                    </div>
                    <div className='MobileFrontLogo' >
                        <MobileFrontLogo />
                    </div>
                    <div className='MobileFrontGraphic' >
                        <MobileFrontGraphic />
                    </div>

                    <div className='regcontainer'>
                    <a className='btn_register' href="https://forms.gle/54DJ6jxApRHSG7NYA" style={{ textDecoration: 'none' }} onClick={()=> Event("REGISTER", "Register button clicked", "LANDING_PAGE")}>
                        <div style={{margin: '-10px 0px'}}>
                            Register
                        </div>
                    </a>
                    </div>
                    <div className='arrow_container' >
                        <div className='front_arrow' onClick={() => {
            this.scrollDiv.current.scrollIntoView({ behavior: 'smooth' });
          }}>
                            <FrontArrow />
                        </div>
                    </div>
                    <div className='white_triangle'/>
                </div>
                <div className='white_container' ref={this.scrollDiv} content="width=device-width, initial-scale=1">
                    <div className='What_is_idc'>
                        <div>
                            What is Illinois Design Challenge?
                        </div>
                    </div>
                    <div className='What_is_idc_section'>
                        <div>
                            The Illinois Design Challenge is a 
                            weekend long sprint challenge, from April 14-17th, 
                            where participants showcase their 
                            design skills through the use of 3D Design softwares. 
                        </div>
                    </div>
                    <div className='idc_pencil'>
                            <IDCpencil/>
                    </div>
                    <div className='icon_collection'>
                        <IconCollection/>
                    </div>
                </div>
                <div className='third_container' content="width=device-width, initial-scale=1">
                    <div className='challenge_categories'>
                            Design Challenge Categories
                    </div>
                    <normal className='under_text'> 
                        *to be released at start of competition*
                    </normal>
                    <div className='back_box'/>
                    <div className='front_box'>
                        <div className='challenge_text'> Open Challenge </div>
                    </div>
                    <div className='back_box_mid'/>
                    <div className='front_box_mid'>
                        <div className='challenge_text'> Curated Challenge </div>
                    </div>
                    <div className='back_box_right'/>
                    <div className='front_box_right'>
                        <div className='challenge_text'> Sponsored Challenge </div>
                    </div>
                    <normal className='open_text'> 
                        <div>
                        Participants will be allowed to continue a pre-existing project of their own!
                        </div>
                    </normal>
                    <normal className='curated_text'> 
                        <div>
                        The IDC will give out a curated Design Challenge for participants to design for!
                        </div>
                    </normal>
                    <normal className='sponsor_1_text'> 
                        <div>
                        A sponsor will provide a prompt for participants to design for!
                        </div>
                    </normal>
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
*/

export default Landingpage;