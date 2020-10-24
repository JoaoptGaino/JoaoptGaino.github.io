import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
const Routes = () => {
    return (
        <HashRouter>
            <Route path="/" component={Home} exact />
            <Route path='/projects' component={Projects} />
        </HashRouter>
    );
}


export default Routes;