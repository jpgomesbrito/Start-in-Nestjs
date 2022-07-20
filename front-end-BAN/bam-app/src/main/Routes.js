import React from 'react';

import Login from '../views/login';
import Home from '../views/home';


import { Route, Switch, HashRouter } from 'react-router-dom';

function Routes (){
    return (
        <HashRouter>
            <Switch>
                <Route path= "/home" componet={Home} />
                <Route path= "/login" componet={Login} />
            </Switch>
        </HashRouter>
    )
}

export default Routes;