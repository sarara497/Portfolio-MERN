import React from 'react'
import './about.css'

import profilepic from '../../Photos/Profilephoto.jpg'

const About = () => {
    return (
        <div className='about'>
            <h1 class="w3-animate-left" style={{ marginBottom: '60px' }}> About Me </h1>
            <div className='about__cointainer'>
                <div id="border" class="w3-animate-left">
                <img id='about__pic' class="w3-animate-left" src={profilepic} alt="profile"/>
                </div >
                <div id='about__content' class="w3-container  w3-animate-left">
                    <h4 className='about__disc'> A graduate of Applied Computing, I joined in this specialty with desire and love in computers , and I am a software developer with robust problem-solving skills and proven experience in creating and designing software in a test-
                               driven environment, I am looking for a job to increase my experience and employ my scientific knowledge in the job market. </h4>
                    <a href='https://drive.google.com/file/d/1VWk4y6XfKwO3Oltj_yVMmZXJdwTcpZB-/view?usp=sharing' target="_blank" className='btn'>My Resume</a>
                   
                </div>
            </div>


        </div>
    )
}

export default About