
import './App.css';
import React from 'react'

import Header from './Components/Header/Header'
import About from './Components/About/About'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
    }
  }


  render(){
    return(
      <div className="App">
        <Header/>
        <About/>
      </div>
    )
  }
}

export default App;
