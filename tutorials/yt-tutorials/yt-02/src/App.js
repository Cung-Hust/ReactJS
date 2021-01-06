import React, { Component } from 'react';
import './App.css';


class Demo extends Component {
    constructor(props) {
         super(props);
         // Don't do this!
         this.state = { color: 'green' };
    }
    componentWillMount() {
      console.log("componentWillMount da chay")
    }

    componentDidMount() {
        console.log("componentDidMount da chay")
    }
    
    render() {
        console.log("Ham render da duoc chay");
        return (
           <div>
              <button onClick={() =>  this.setState({color : 'tadaaa'})}>Submit</button>
                <p>{this.state.color}</p>
            </div> 

        )
    }
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <Demo></Demo>
        <p className="App-intro">
          
        </p>
      </div>
    );
  }
}

export default App;