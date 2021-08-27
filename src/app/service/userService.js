import ApiService  from "../apiservice";
import ErrorValidation from "../exception/errorValidation";

class UserService extends ApiService{

    constructor(){
        super('/api/users')
    }

    authenticate(userData){
        return this.post('/authentication', userData)
    }

    getBalance(id){
        return this.get(`/${id}/balance`)
    }

    saveUser(user){
        return this.post('/', user)
    }

    validationFormUser(user){
        const errors = []

        if(!user.name){
        errors.push('NAME FIELD is required.')
        }
        if(!user.email){
        errors.push('EMAIL FIELD is required.')
        } else if (!user.email.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]/) ){
        errors.push('Email invalid. Try again.')
        }

        if(!user.password || !user.passwordRepeat){
        errors.push('PASSWORD FIELDS is required.')
        } else if (user.password !== user.passwordRepeat) {
        errors.push('The passwords are different. Try again.')
        }
        
        if (errors && errors.length > 0){
            throw new ErrorValidation(errors);
        }
    }
}

export default UserService