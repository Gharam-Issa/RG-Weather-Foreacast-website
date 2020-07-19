import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import SecondPage from './components/SecondPage';
// import Table from './components/Table'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
export class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
    
    }
    
  }
 

  render() {
    return (
      <div>
      <Header/>
      <Main/>
      </div>
    )
  }
}

export default App
