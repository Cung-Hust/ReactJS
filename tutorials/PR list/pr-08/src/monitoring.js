import React from 'react';
import ReactDOM from 'react-dom';

import './App.css';

import Header from './components/Header';
import Content from './components/Content';

import Machine from './components/Machine';

class Monitoring extends React.Component {
    render() {
        return (
            <div>
                <Content />
            </div>
        )
    }
}

export default Monitoring;