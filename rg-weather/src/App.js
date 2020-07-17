import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Secondpage from './components/SecondPage';

export class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
       name : ""
    }
    this.setState({name:"gharam"});
  }
 

  render() {
    return (
      <div>
        <Header/> 
        <Main/>
        <Secondpage/>
      </div>
    )
  }
}

export default App
