import ApiService  from "../apiservice";

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
}

export default UserService