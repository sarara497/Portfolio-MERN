import React from 'react'
import Slide from 'react-reveal/Slide';
import './about.css'

import profilepic from '../../Photos/Profilephoto.jpg'

const About = () => {
    return (
        
        <div className='about'>
        <Slide left>
            <h1  style={{ marginBottom: '60px' }}> About Me </h1>
        </Slide>

        
            <div className='about__cointainer'>
            <Slide left>
                <div id="border" >
                <img id='about__pic'  src={profilepic} alt="profile"/>
                </div >
            </Slide>
            <Slide right>
                <div id='about__content' >
                    <h4 className='about__disc'> A graduate of Applied Computing, I joined in this specialty with desire and love in computers , and I am a software developer with robust problem-solving skills and proven experience in creating and designing software in a test-
                               driven environment, I am looking for a job to increase my experience and employ my scientific knowledge in the job market. </h4>
                    <a href='https://drive.google.com/file/d/1VWk4y6XfKwO3Oltj_yVMmZXJdwTcpZB-/view?usp=sharing' target="_blank" className='btn'>My Resume</a>
                   
                </div>
                </Slide>
            </div>
           


        </div>
        
    )
}

export default About