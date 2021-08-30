import LocalStorageService from "./localStorageService";

export const USER_LOGGED = '_user_logged'

export default class AuthService {

    static isUserAuthenticated (){
        const user = LocalStorageService.getItem(USER_LOGGED)
        return user && user.id;
    }

    static removeUserAuthenticated () {
        LocalStorageService.removeItem(USER_LOGGED)
    }
}