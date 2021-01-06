import React, { Component } from 'react';
import './App.css';
import Content from './Components/Content/Content';
import Header from './Components/Header/Header';

class App extends Component {
  render() {
    return (
      <div className='layout'>                
        <Header />
        {/* <hr/> */}
        <Content />
      </div>
    );
  }
}

export default App;
