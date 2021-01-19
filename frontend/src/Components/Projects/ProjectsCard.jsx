import React from 'react'

import Slide from 'react-reveal/Slide';
import { GoMarkGithub } from "react-icons/go";

import './projects.css'


const ProjectsCard = ({pname, description, technology , imageUrl , githup_link}) => {
    console.log('github' , githup_link)
    return (
       
        <Slide left>     
            <div id="container">
                
              <div className="project-details">
                  <h1 id='headerC' style={{fontSize:'50px'}}>{pname}</h1>
                  <p className="information">{description}</p>
                  <div className="control">
                      <button className="btn">
                          <span className="view">view</span>
                          <span className="GHlogo"><a  href={githup_link}  target="blank" className="fa fa-GHlogo" aria-hidden="true"><GoMarkGithub  style={{color:'white'}}/></a></span>
                          <span className="GH">GitHub</span>
                      </button>
                 </div>
             </div>
             	
            
             <div className="product-image">
                 <img src={imageUrl} alt="proPic"/>
                 <div className="info">
                     <h2 id='headerInfo' style={{ fontSize:'40px'}}>The Technologies</h2>
                     <ul id='informationInfo' style={{listStyle:'none' , marginTop:'35px' , fontSize:'25px'}}>
                         <li><strong>Express/Nodejs</strong></li>
                         <li><strong>MongoDB </strong></li>
                         <li><strong>Css/Html </strong></li>
                         <li><strong>Reactjs </strong></li>
                         <li><strong>Material UI </strong></li>
                         
                     </ul>
                 </div> 
             </div>
            
          </div>
          </Slide>
          
        
    )
}

export default ProjectsCard