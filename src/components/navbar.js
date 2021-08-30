import React from 'react'

import NavbarItem from './navbarItem'
import AuthService from '../app/service/authService'

const logOff = () => {
  AuthService.removeUserAuthenticated();
}

const isUserAuth = () => {
  AuthService.isUserAuthenticated();
}

function Navbar() {
  return (
  <div className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
  <div className="container">
  <a href="#/login" className="navbar-brand">My Finances</a>
  <button className="navbar-toggler" 
    type="button" 
    data-toggle="collapse" 
    data-target="#navbarResponsive" 
    aria-controls="navbarResponsive" 
    aria-expanded="false" 
    aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav">
            <NavbarItem render={isUserAuth()} href="#/home" label="Home" />
            <NavbarItem render={isUserAuth()} href="#/userRegister" label="Register"/>
            <NavbarItem render={isUserAuth()} href="#/consultPostings" label="Postings"/>
            <NavbarItem render={isUserAuth()} onClick={logOff} href="#/login" label="Sign out"/>
        </ul>
  </div>
  </div>
  </div>

  )
}

export default Navbar