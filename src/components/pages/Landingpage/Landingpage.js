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
import { ReactComponent as GrabCAD } from './GrabCAD.svg';
import { ReactComponent as Devpost } from './Devpost.svg';
import { ReactComponent as Arrow } from './Circle_arrow.svg';
import { ReactComponent as SmallArrow } from './Smallsvgs/Circle_arrow_80.svg';
import { ReactComponent as MobileArrow } from './Smallsvgs/Circle_arrow_60.svg';

import { Events_One, Events_Two, Events_Three, Events_Four } from './Events';
import { ReactComponent as EventD1 } from './EventD1.svg';
import { ReactComponent as EventD2 } from './EventD2.svg';
import { ReactComponent as EventD3 } from './EventD3.svg';
import { ReactComponent as EventD4 } from './EventD4.svg';

import { ReactComponent as IJBLogo } from './IJetBrunswickLogo.svg';
import { ReactComponent as GraykeaLogo } from './GraykeaLogo.svg';
import { ReactComponent as MobileIJBLogo } from './Smallsvgs/MobileIJBLogo.svg';
import { ReactComponent as MobileGraykeaLogo } from './Smallsvgs/MobileGraykeaLogo.svg';

import { FAQ } from './FAQ';

import { ReactComponent as FooterLogo } from './IDCLogofooter.svg';
import { ReactComponent as FooterSponsor } from './Footer_logo_collection.svg';
import { ReactComponent as DiscordLogo } from './discord.svg';
import { ReactComponent as InstagramLogo } from './instagram.svg';
import { ReactComponent as EmailLogo } from './email.svg';

import { ReactComponent as FooterSponsorMobile } from './Footerlogocollectionmobile.svg';
import Confetti from './Confetti'




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
                        
                        Participants will be allowed to continue a pre-existing project of their own!
                    
                    </normal>
                    <normal className='curated_text'> 
                       
                        The IDC will give out a curated Design Challenge for participants to design for!
                        
                    </normal>
                    <normal className='sponsor_1_text'> 
                       
                        A sponsor will provide a prompt for participants to design for!
                        
                    </normal>
                </div>
                <div className='fourth_container'>
                    <large className="Submission_title"> Submission Details </large>
                    <div className='gradCAD_wrapper'>
                        <GrabCAD />
                    </div>
                    <medium className="grabCAD_text">All CAD files will be submitted through <br/>GrabCAD</medium>
                    <div className='Devpost_wrapper'>
                        <Devpost />
                    </div>
                    <medium className="Devpost_text">Portfolios will be submitted through <br/>DevPost</medium>
                    <div className='Circle_arrow_wrapper'>
                        <Arrow />
                    </div>
                    <div className='Small_Circle_arrow_wrapper'>
                        <SmallArrow />
                    </div>
                    <div className='Mobile_Circle_arrow_wrapper'>
                        <MobileArrow />
                    </div>
                </div>
                <large className='Event_title'> Event Schedule </large>
                <div className='fifth_container'>
                <div className='Day_1_logo'><EventD1/></div>
                <div className='Day_1_title'> Introduction to the CADathon </div>
                    <div className='Day_1'>
                    <ul className='Event_block'>
                        {Events_One.map((item, index) => {
                            return (
                                <li key={index} className='daylist'>
                                    <div className={item.tag}>
                                        <day1event_title>{item.title}</day1event_title> <br/>
                                        <day1event_date>{item.date} </day1event_date> <br/>
                                        <day1event_text>{item.place}</day1event_text> <br/>
                                        <day1event_text>{item.description}</day1event_text>
                                        <div className='day1_marker'/>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                    </div>
                    <div className='Day_2_logo'><EventD2/></div>
                    <div className='Day_2_title'> CAD Basics and Social Events </div>
                    <div className='Day_2'>
                    <ul className='Event_block'>
                        {Events_Two.map((item, index) => {
                            return (
                                <li key={index} className='daylist'>
                                    <div className={item.tag}>
                                        <day1event_title>{item.title}</day1event_title> <br/>
                                        <day2event_date>{item.date} </day2event_date> <br/>
                                        <day1event_text>{item.place}</day1event_text> <br/>
                                        <day1event_text>{item.description}</day1event_text>
                                        <div className='day2_marker'/>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                    </div>
                    <div className='Day_3_logo'><EventD3/></div>
                    <div className='Day_3_title'> Keynotes and Work Time </div>
                    <div className='Day_3'>
                    <ul className='Event_block'>
                        {Events_Three.map((item, index) => {
                            return (
                                <li key={index} className='daylist'>
                                    <div className={item.tag}>
                                        <day1event_title>{item.title}</day1event_title> <br/>
                                        <day3event_date>{item.date} </day3event_date> <br/>
                                        <day1event_text>{item.place}</day1event_text> <br/>
                                        <day1event_text>{item.description}</day1event_text>
                                        <div className='day3_marker'/>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                    </div>
                    <div className='Day_4_logo'><EventD4/></div>
                    <div className='Day_4_title'> Making Portfolios and finishing off </div>
                    <div className='Day_4'>
                        <ul className='Event_block'>
                        {Events_Four.map((item, index) => {
                            return (
                                <li key={index} className='daylist'>
                                    <div className={item.tag}>
                                        <day1event_title>{item.title}</day1event_title> <br/>
                                        <day4event_date>{item.date} </day4event_date> <br/>
                                        <day1event_text>{item.place}</day1event_text> <br/>
                                        <day1event_text>{item.description}</day1event_text>
                                        <div className='day4_marker'/>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                    </div>
                    <div className='Discord_text'>
                        Discord Moderation will take place from 12:00 PM to 12:00 AM Everyday
                    </div>
                    <a className='join_discord' href="https://discord.gg/BKJYhuBtkc" onClick={()=> Event("DISCORD_EVENTS", "Discord button clicked at event container", "EVENT_SCHEDULE")}>
                        Click here to join our Discord
                    </a>
                </div>
                <div className='sixth_container'>
                    <large className='Sponsor_Companies'>
                        Sponsor Companies
                    </large>
                    <div className='IJet_brunswick_container'>
                        <div className='IJB_logo'>
                            <IJBLogo/>
                        </div>
                        <div className='Mobile_IJB_logo'>
                            <MobileIJBLogo/>
                        </div>
                        <div className='IJB_text'>
                        Brunswick is an industry leader in the marine 
                        space who focus on lifestyle products like recreational boats, 
                        marine engines, active recreation, and activated workplace products.
                        </div>
                        <div className='IBJ_learn_more_btn'>
                            <a className='IBJ_btn_wrapper' href="https://ijetlab.com/home" onClick={()=> Event("IJETBRUNSWICK", "IJet Brunswick button clicked", "IDJ")}>
                                Learn More
                            </a>
                        </div>
                    </div>
                    <div className='Graykea_container'>
                        <div className='Graykea_logo'>
                            <GraykeaLogo/>
                        </div>
                        <div className='Mobile_Graykea_logo'>
                            <MobileGraykeaLogo/>
                        </div>
                        <div className='Graykea_text'>
                        GrayKea is a social impact startup that aims to 
                        relieve the financial stress of students in college 
                        through alumni crowdfunding.
                        </div>
                        <div className='Graykea_learn_more_btn'>
                            <a className='Graykea_btn_wrapper' href="https://www.graykea.com/" onClick={()=> Event("GRAYKEA", "Graykea button clicked", "GRAYKEA")}>
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
                <div className='faq_container'>
                        <div className='faq_title'>Frequently Asked Questions</div>
                        <div className='q_and_a_container'>
                        <ul className='faq_block'>
                        {FAQ.map((item, index) => {
                            return (
                                <li key={index} className='faqlist'>
                                    <div className={item.tag}>
                                        <div className='question'>{item.question}</div> <br/>
                                        <div className='answer'>{item.answer}</div>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                        </div>
                </div>
                <div className='footer'>
                    <div className='time_to_register_text'>
                        It's time to register!
                    </div>
                    <div className='footer_reg_container'>
                    <a className='btn_register' href="https://forms.gle/54DJ6jxApRHSG7NYA" style={{ textDecoration: 'none' }} onClick={()=> Event("REGISTER_FOOTER", "Register button clicked", "TOP_FOOTER")}>
                        <div style={{margin: '-10px 0px'}}>
                            Register
                        </div>
                    </a>
                    </div>
                    <div className='foot_container'>
                        <div className='idc_footer_logo'>
                            <FooterLogo/>
                        </div>
                        <div className='sponsor_footer_logo'>
                            <FooterSponsor/>
                        </div>
                        <div className='sponsor_footer_logo_mobile'>
                            <FooterSponsorMobile/>
                        </div>

                        <a className='discord_logo' href="https://discord.gg/BKJYhuBtkc" onClick={()=> Event("DISCORD", "Discord button clicked", "DISCORD_FOOTER")}>
                            <DiscordLogo/>
                        </a>
                        <a className='instagram_logo' href="https://instagram.com/illinoisdesignchallenge" onClick={()=> Event("INSTAGRAM", "Instagram button clicked", "INSTA_FOOTER")}>
                            <InstagramLogo/>
                        </a>
                        <a className='email_logo' href="mailto:illinoisdesignchallenge@gmail.com" onClick={()=> Event("EMAIL", "Email button clicked", "EMAIL_FOOTER")}>
                            <EmailLogo/>
                        </a>
                    </div>
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