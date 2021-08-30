import React from 'react'

import { Route, Switch, HashRouter, Redirect } from 'react-router-dom'

import Login from '../views/login'
import UserRegister from '../views/userRegister';
import Home from '../views/home'
import ConsultPostings from '../views/postings/consultPostings';
import RegisterPostings from '../views/postings/registerPosting';
import { AuthConsumer } from '../main/authenticationProvider' 

function RoutesAuthenticated( {component: Component, isUserAuthenticated, ...props} ){
    return (
        <Route {...props} render={ (componentProps) => {
            if(isUserAuthenticated){
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

function Routes(props){
    return(
        <HashRouter>
            <Switch>
                <Route path="/login" component={Login}/>
                <Route path="/userRegister" component={UserRegister}/>
                
                <RoutesAuthenticated isUserAuthenticated={props.isUserAuthenticated} path="/home" component={Home}/>
                <RoutesAuthenticated isUserAuthenticated={props.isUserAuthenticated} path="/consultPostings" component={ConsultPostings}/>
                <RoutesAuthenticated isUserAuthenticated={props.isUserAuthenticated} path="/registerPostings/:id?" component={RegisterPostings}/>
            </Switch>
        </HashRouter>
    )
}

// eslint-disable-next-line
export default () => (
    <AuthConsumer>
        { (context) => (<Routes isUserAuthenticated={context.isAuthenticated} />) }
    </AuthConsumer>
)
