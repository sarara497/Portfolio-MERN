import React from "react";
import "./skills.css";
import Slide from 'react-reveal/Slide';
import Flip from 'react-reveal/Flip';

const Skills = () => {
  return (
    <div className="skills">
      <Flip top>
      <h1>Technical Skills</h1>
      </Flip>
      <div className='theContainer' > 
        <div className="forSkils">
          <h4>HTML/CSS</h4><h5>95%</h5>
          <div className="container">
          <Slide left>
            <div className="skill hC"></div>
            </Slide>
          </div>
          <br />
       
          <h4>JavaScript</h4><h5>90%</h5>
          <div className="container">
          <Slide left>
            <div className="skill js"></div>
            </Slide>
          </div>
          <br />
          <h4>Node/Express</h4><h5>85%</h5>
          <div className="container">
          <Slide left>
            <div className="skill exp"></div>
            </Slide>
          </div>
          <br />
          <h4>React JS</h4><h5>80%</h5>
          <div className="container">
          <Slide left>
            <div className="skill react"></div>
            </Slide>
          </div>
          <br />
        </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        
        <div className="forSkils">
        <h4>Material-UI</h4><h5>90%</h5>
          <div className="container">
          <Slide left>
            <div className="skill m"></div>
            </Slide>
          </div>
          <br />
          <h4>MongoDB</h4><h5>85%</h5>
          <div className="container">
          <Slide left>
            <div className="skill mo"></div>
            </Slide>
          </div>
          <br />
          <h4>Structure & Algorithms</h4><h5>75%</h5>
          <div className="container">
          <Slide left>
            <div className="skill str"></div>
            </Slide>
          </div>
          <br />
          <h4>Object-Oriented</h4><h5>70%</h5>
          <div className="container">
          <Slide left>
            <div className="skill opp"></div>
            </Slide>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Skills;
