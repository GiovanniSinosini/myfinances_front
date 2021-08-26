import React from 'react'

import { Route, Switch, HashRouter } from 'react-router-dom'

import Login from '../views/login'
import UserRegister from '../views/userRegister';
import Home from '../views/home'
import ConsultPostings from '../views/postings/consultPostings';
import RegisterPostings from '../views/postings/registerPosting';

function Routes(){
    return(
        <HashRouter>
            <Switch>
                <Route path="/home" component={Home}/>
                <Route path="/login" component={Login}/>
                <Route path="/userRegister" component={UserRegister}/>
                <Route path="/consultPostings" component={ConsultPostings}/>
                <Route path="/registerPostings/:id?" component={RegisterPostings}/>
            </Switch>
        </HashRouter>
    )
}

export default Routes