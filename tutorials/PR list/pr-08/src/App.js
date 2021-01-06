import React from 'react';
import ReactDOM from 'react-dom';
// import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Content from './components/Content';

import Machine from './components/Machine';
// import Product from './components/Product';
// import Running from './components/States/Running';
// import Stopped from './components/States/Stopped';
// import PlannedStop from './components/States/PlannedStop';
// import Disconnect from './components/States/Disconnect';

// import Send from './components/Data/Send';

class App extends React.Component {
    render() {
        // const state = 1;
        var state = Math.floor(Math.random() * 4) + 1;
        return (
            <div>
                <Header />
{/*                <div>
                    <Machine /> 
                    <Machine />
                    <Machine />
                    <Machine />
                    <Machine />
                </div>*/}
                <Content />
            </div>
        )
    }
}

export default App;