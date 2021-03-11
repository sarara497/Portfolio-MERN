import React from "react";
import Slide from "react-reveal/Slide";
import "./about.css";

import profilepic from "../../Photos/Profilephoto.jpg";

const About = () => {
  return (
    <div id="About" className="about">
      <Slide left>
        <h1 style={{ marginBottom: "60px" }}> About Me </h1>
      </Slide>

      <div className="about__cointainer">
        <Slide left>
          <div id="border">
            <img id="about__pic" src={profilepic} alt="profile" />
          </div>
        </Slide>
        <Slide right>
          <div id="about__content">
            <h4 className="about__disc">
              A graduate of Applied Computing, I enrolled in this Specialty with
              desire and love in computers , and I am passionate about
              programming and figuring out everything related to new
              technologies and very good at critical-thinking and problem
              solving, I am looking for a job to increase my experience and
              employ my scientific knowledge in the job market.
            </h4>
            <a
              href="https://drive.google.com/file/d/1qubA5XSu9HOyXOEgaOus5CbDct1I2jOU/view?usp=sharing"
              target="blank"
              className="btnn"
            >
              My Resume
            </a>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default About;
