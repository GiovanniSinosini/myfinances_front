import React from 'react'

import { Route, Switch, HashRouter } from 'react-router-dom'

import Login from '../views/login'
import UserRegister from '../views/userRegister';

function Routes(){
    return(
        <HashRouter>
            <Switch>
                <Route path="/login" component={Login}/>
                <Route path="/userRegister" component={UserRegister}/>
            </Switch>
        </HashRouter>
    )
}

export default Routes