import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Menu from './components/Menu'
import Main from './components/Main'
// import Login from './components/Login'
// import NotFound from './components/NotFound'

class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                  {/*<Switch>*/}
                    <Route path='' component={Menu} />
                    <Route path='' component={Main} />
                  {/*</Switch>*/}
                </BrowserRouter>
         </div>
        );
    }
}

export default App;