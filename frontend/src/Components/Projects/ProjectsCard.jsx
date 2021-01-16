import React from 'react'
import Flip from 'react-reveal/Flip';
import { GoMarkGithub } from "react-icons/go";

import './projects.css'


const Projects = () => {
    return (
        <div className='project'>
            <Flip top>
                <h1  style={{ marginBottom: '60px' , fontWeight:'500' }}> My Projects </h1>
                </Flip>
                <Flip top>
            <div id="container">	
              <div class="product-details">
                  <h1 style={{fontSize:'50px'}}>Sharkona</h1>
                  <p class="information">"Help Real-Estate office and normal people who need to rent or sale any type of RealEstate to communicate easier with each other and also to find what they need easier. "</p>
                  <div class="control">
                      <button class="btn">
                          <span class="price">view</span>
                          <span class="shopping-cart"><a target="_blank" href='https://github.com/sarara497/Inventory-Management' class="fa fa-shopping-cart" aria-hidden="true"><GoMarkGithub  style={{color:'white'}}/></a></span>
                          <span class="buy">GitHub</span>
                      </button>
                 </div>
             </div>
             <div class="product-image">
                 <img src="https://i.imgur.com/q4w1Zu0.png" alt="proPic"/>
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
       </div>
        
    )
}

export default Projects