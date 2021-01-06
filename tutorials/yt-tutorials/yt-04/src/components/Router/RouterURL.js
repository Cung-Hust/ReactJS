import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from '../Home/Home';
import Layout from '../Layout/Layout';
import Login from '../Login/Login';
import Monitoring from '../Monitoring/Monitoring';

class RouterURL extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>

                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/Layout">
                            <Layout />
                        </Route>
                        <Route path="/Login">
                            <Login />
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default RouterURL;
