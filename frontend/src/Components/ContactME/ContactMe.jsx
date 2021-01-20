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

const handleEmailMe = () => {
  window.open("mailto:sara19972020@outlook.com")
}
const ContactMe = () => {
  return (
    <div id='MyContacts' className="contact">
      <Zoom top>
        <h1 id='contacthead' style={{ marginBottom: "40px", fontWeight: "500" }}>
          Contact Me
        </h1>
      </Zoom>
      <Zoom top>
        <h6 id='contacthead' style={{ marginBottom: "10px", fontWeight: "500" }}>
           Email : sara19972020@outlook.com<br/>Tel : +970594385840
        </h6>
      </Zoom>

      <br/><br/><br/>
      <Flip right>
      <div className="forLinks">
  
      <a  href="https://github.com/sarara497" target="blank"><GitHubIcon/> </a> 
      <a  href="https://www.linkedin.com/in/sara-alayed4197/" target="blank"> <LinkedInIcon/> </a>
      <a  href="https://www.facebook.com/sara.ayed.9237" target="blank"> <FacebookIcon/> </a> 
      <a className="sidebar__item sidebar__email" onClick={handleEmailMe}> <EmailIcon/> </a>
      
      </div>
      </Flip>
      <br/><br/><br/><br/>
      <Slide bottom>
      <a  href="#Home" > <ExpandLessIcon/> </a> 
      </Slide>
    </div>
    
  );
};

export default ContactMe;
