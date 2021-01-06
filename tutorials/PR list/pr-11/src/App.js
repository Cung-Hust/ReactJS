import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import NotFound from './components/NotFound'

class App extends Component {
    render() {
        return (
          <div>
           <Route path='/' component={Home} />
           <Route path='/login' component={Login} />
           <Route path='' component={NotFound} />
         </div>
        );
    }
}

export default App;