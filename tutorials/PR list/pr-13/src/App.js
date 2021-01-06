import React, { Component } from 'react';
import './App.css';


var Form = React.createClass({
    focusOnField: function() {
        React.findDOMNode(this.refs.textField).focus();
    },
    render: function() {
        return (
            <div>
              <input 
                  type="text"
                  ref="textField" />
              <input 
                  type="submit"
                  value="Focus on the input!" 
                  onClick={this.focusOnField} />
          </div>
        );
    }
});

class App extends Component {
    render() {
        return (
            <div>
                <h1> Welcome to the focus app!</h1>
                <Form />
            </div>
        );
    }
}

export default App;