import React from 'react'

import { Route, Switch, HashRouter, Redirect } from 'react-router-dom'

import Login from '../views/login'
import UserRegister from '../views/userRegister';
import Home from '../views/home'
import ConsultPostings from '../views/postings/consultPostings';
import RegisterPostings from '../views/postings/registerPosting';

const isUserAuthenticated = () => {
    return true;
}

function RoutesAuthenticated( {component: Component, ...props} ){
    return (
        <Route {...props} render={ (componentProps) => {
            if(isUserAuthenticated()){
                return (
                    <Component {...componentProps}/>
                )
            } else{
                return(
                    <Redirect to={ {pathname: '/login', state : { from: componentProps.location}} } />
                )
            }
        }}/>
    )
}

function Routes(){
    return(
        <HashRouter>
            <Switch>
                <Route path="/login" component={Login}/>
                <Route path="/userRegister" component={UserRegister}/>
                
                <RoutesAuthenticated path="/home" component={Home}/>
                <RoutesAuthenticated path="/consultPostings" component={ConsultPostings}/>
                <RoutesAuthenticated path="/registerPostings/:id?" component={RegisterPostings}/>
            </Switch>
        </HashRouter>
    )
}

export default Routes