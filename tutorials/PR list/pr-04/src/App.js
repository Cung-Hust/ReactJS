import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Product from './components/Product';
import Label from './components/Label';

function App() {
  return (
    <div>
        <Header/>
        <div class="row">
            <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                <Label />
            </div>

            <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                <Label />
            </div>

            <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                <Label />
            </div>

            <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                <Label />
            </div>

        </div>
    </div>
    );

}

export default App;
