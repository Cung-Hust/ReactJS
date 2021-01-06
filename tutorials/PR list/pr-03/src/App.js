import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
// import Product from './components/Product';
import Running from './components/States/Running';
import Stopped from './components/States/Stopped';
import PlannedStop from './components/States/PlannedStop';
import Disconnect from './components/States/Disconnect';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="row">
{/*                    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <Product />
                    </div>
                    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <Product />
                    </div>*/}
                    <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2">
                        <Running />
                    </div>

                    <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2">
                        <Stopped />
                    </div>

                    <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2">
                        <PlannedStop />
                    </div>

                    <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2">
                        <Disconnect />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;