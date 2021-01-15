import './App.css';
import React from 'react'

import Header from './Components/Header/Header'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'

const App = () => {


  return (
      <div className="App">
        <Header/>
        <About/>
        <Skills/>
      </div>
    )
  }


export default App;
