import React from 'react'

import { Route, Switch, HashRouter, Redirect } from 'react-router-dom'

import Login from '../views/login'
import UserRegister from '../views/userRegister';
import Home from '../views/home'
import ConsultPostings from '../views/postings/consultPostings';
import RegisterPostings from '../views/postings/registerPosting';
import { AuthConsumer } from '../main/authenticationProvider' 
import LandingPage from '../views/landingPage';
import LocalStorageService from '../app/service/localStorageService';

function RoutesAuthenticated( {component: Component, isUserAuthenticated, ...props} ){
    return (
        <Route {...props} render={ (componentProps) => {
            const userAuth = LocalStorageService.getItem('access_token')
            if(userAuth){
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
                <Route exact path="/" component={LandingPage}/>
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
