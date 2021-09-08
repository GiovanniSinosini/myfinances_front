import React from 'react'

import AuthService from '../app/service/authService';
import ApiService from '../app/apiservice';
import jwt from 'jsonwebtoken';

export const AuthContext = React.createContext();
export const AuthConsumer = AuthContext.Consumer;
export const AuthProvider = AuthContext.Provider;

class AuthenticationProvider extends React.Component {

    state = {
        userAuthenticated: null,
        isAuthenticated: false
    }

    startSession = (tokenDTO) => {
        const token = tokenDTO.token
        const claims = jwt.decode(token)
        
        const user = {
            id: claims.userid,
            name: claims.name
        }
        
        ApiService.registerToken(token)
        AuthService.login(user);
        this.setState( {isAuthenticated: true, userAuthenticated: user} )
    }

    exitSession = (user) => {
        AuthService.removeUserAuthenticated();
        this.setState( {isAuthenticated: false, userAuthenticated: null} )
    }

    render(){
        const contex = {
            userAuthenticated: this.state.userAuthenticated,
            isAuthenticated: this.state.isAuthenticated,
            startSession: this.startSession,
            exitSession: this.exitSession
        }

        return(
            <AuthProvider value={contex}>
                {this.props.children}
            </AuthProvider>
        )
    }
}
export default AuthenticationProvider