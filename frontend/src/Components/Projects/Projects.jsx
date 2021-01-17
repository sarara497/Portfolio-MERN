import React, { Component } from "react";
import ProjCard from './ProjectsCard'
import Flip from 'react-reveal/Flip';


import './projects.css'

class Projects extends Component {
    constructor(props) {
      super(props)
      this.state = {
        AllProjects: [],
      }
    }
  
    componentDidMount = () => {
      this.getProjects()
    }

    getProjects = () => {
      const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      };
      fetch('http://localhost:4000/Projects/retrieveProjects', requestOptions)
        .then(response => response.json())
        .then(data => {
          this.setState({ AllProjects : data })
          console.log("Projects",this.state.AllProjects)
        })
    }
  
    render() {
     
      const {  AllProjects } = this.state
      console.log("Projects" ,  AllProjects)
  
      return (
        <div className='project'>
            <Flip top>
            <h1  style={{ marginBottom: '60px' , fontWeight:'500' }}> My Projects </h1>
            </Flip>
              {
          
                  AllProjects.map(({pname, description, technology , imageUrl , githup_link}, index) =>
               
                  <ProjCard pname={pname} description={description}  technology={technology}  imageUrl={imageUrl}  githup_link={githup_link} key={index} />
                )
              }
        </div>
        
      );
    }
  }
  export default Projects;