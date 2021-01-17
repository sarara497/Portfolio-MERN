import React from 'react'
import Flip from 'react-reveal/Flip';
import { GoMarkGithub } from "react-icons/go";

import './projects.css'


const ProjectsCard = ({pname, description, technology , imageUrl , githup_link}) => {
    console.log('github' , githup_link)
    return (
       
                <Flip top>
            <div id="container">	
              <div class="product-details">
                  <h1 style={{fontSize:'50px'}}>{pname}</h1>
                  <p class="information">{description}</p>
                  <div class="control">
                      <button class="btn">
                          <span class="price">view</span>
                          <span class="shopping-cart"><a  href={githup_link}  target="_blank" class="fa fa-shopping-cart" aria-hidden="true"><GoMarkGithub  style={{color:'white'}}/></a></span>
                          <span class="buy">GitHub</span>
                      </button>
                 </div>
             </div>
             <div class="product-image">
                 <img src={imageUrl} alt="proPic"/>
                 <div class="info">
                     <h2 style={{fontFamily:'Farsan , cursive' , fontSize:'40px'}}>The Technologies</h2>
                     <ul style={{listStyle:'none' , marginTop:'35px' , fontSize:'25px'}}>
                         <li><strong>Express/Nodejs</strong></li>
                         <li><strong>MongoDB </strong></li>
                         <li><strong>Css/Html </strong></li>
                         <li><strong>Reactjs </strong></li>
                         <li><strong>Material UI </strong></li>
                         
                     </ul>
                 </div> 
             </div>
          </div>
          </Flip>
        
    )
}

export default ProjectsCard