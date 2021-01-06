import React from 'react';
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import RouterURL from './components/Router/RouterURL';


function App() {
  return (
    <Router>
      <div className="App">
        <RouterURL />
      </div>
    </Router>
    
  );
}

export default App;
