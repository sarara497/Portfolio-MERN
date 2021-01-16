import './App.css';
import React from 'react'

import Header from './Components/Header/Header'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import Projects from './Components/Projects/ProjectsCard'
import ContactMe from './Components/ContactME/ContactMe'

const App = () => {


  return (
      <div className="App">
        <Header/>
        <About/>
        <Skills/>
        <Projects/>
        <ContactMe/>
      </div>
    )
  }


export default App;
