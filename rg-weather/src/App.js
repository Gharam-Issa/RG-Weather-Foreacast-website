import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
//import Secondpage from './components/SecondPage';

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
