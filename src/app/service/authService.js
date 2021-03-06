import LocalStorageService from "./localStorageService";

import jwt from 'jsonwebtoken'
import ApiService from '../apiservice'

export const USER_LOGGED = '_user_logged'
export const TOKEN = 'access_token'

export default class AuthService {

    static isUserAuthenticated() {
        const token = LocalStorageService.getItem(TOKEN)
        if(!token){
            return false;
        }
        const decodedToken = jwt.decode(token)
        const expiration = decodedToken.exp

        const isTokenInvalid = Date.now() >= (expiration * 1000)
        return !isTokenInvalid;
    }

    static removeUserAuthenticated () {
        LocalStorageService.removeItem(USER_LOGGED)
        LocalStorageService.removeItem(TOKEN)
    }

    static login(user, token){
        LocalStorageService.addItem(USER_LOGGED, user)
        LocalStorageService.addItem(TOKEN, token)
        ApiService.registerToken(token)
    }

    static getUserLogged(){
        return LocalStorageService.getItem(USER_LOGGED)
    }

    static refreshSession(){
        const token = LocalStorageService.getItem(TOKEN)
        const user = AuthService.getUserLogged()
        AuthService.login(user, token)
        return user
    }
}