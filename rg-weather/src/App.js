import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
//import Secondpage from './components/SecondPage';
import Table from './components/Table'
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
        <Table/>
      </div>
    )
  }
}

export default App
