import React, { Component } from 'react';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';

class Home extends Component {
    render() {
        return (
            <div>                
                <Header />
                <Menu />
            </div>
        );
    }
}

export default Home;