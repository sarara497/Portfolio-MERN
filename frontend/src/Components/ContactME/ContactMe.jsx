import React from "react";
import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip';
import Slide from 'react-reveal/Slide';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import "./contactme.css";

const ContactMe = () => {
  return (
    <div className="contact">
      <Zoom top>
        <h1 style={{ marginBottom: "60px", fontWeight: "500" }}>
          Contact Me
        </h1>
      </Zoom>
      <br/><br/><br/>
      <Flip right>
      <div className="forLinks">
  
      <a  href="https://github.com/sarara497" target="_blank"><GitHubIcon/> </a> 
      
  
      <a  href="https://www.linkedin.com/in/sara-alayed4197/" target="_blank"> <LinkedInIcon/> </a>
      
  
      <a  href="https://www.facebook.com/sara.ayed.9237" target="_blank"> <FacebookIcon/> </a> 
      
  
      <a  href="sara19972020@outlook.com" target="_blank"> <EmailIcon/> </a>
      
      </div>
      </Flip>
      <br/><br/><br/><br/>
      <Slide bottom>
      <a  href="." > <ExpandLessIcon/> </a> 
      </Slide>
      
    </div>
    
  );
};

export default ContactMe;
