
import './App.css';
import React from 'react'


import { Switch, Route, Redirect } from 'react-router-dom';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
    }
  }


  render(){
    return(
      <div className="App">
        <p>Hello Front</p>
      </div>
    )
  }
}

export default App;
