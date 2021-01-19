import React from 'react'

import Slide from 'react-reveal/Slide';
import { GoMarkGithub } from "react-icons/go";

import './projects.css'


const ProjectsCard = ({pname, description, technology , imageUrl , githup_link}) => {
    console.log('github' , githup_link)
    return (
       
        <Slide left>     
            <div id="container">
                
              <div class="project-details">
                  <h1 id='headerC' style={{fontSize:'50px'}}>{pname}</h1>
                  <p class="information">{description}</p>
                  <div class="control">
                      <button class="btn">
                          <span class="view">view</span>
                          <span class="GHlogo"><a  href={githup_link}  target="_blank" class="fa fa-GHlogo" aria-hidden="true"><GoMarkGithub  style={{color:'white'}}/></a></span>
                          <span class="GH">GitHub</span>
                      </button>
                 </div>
             </div>
             	
            
             <div class="product-image">
                 <img src={imageUrl} alt="proPic"/>
                 <div class="info">
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