import axios from "axios";

const httpClient = axios.create({
   baseURL: 'https://myfinances-7-api.herokuapp.com/' 
})

class ApiService {

    constructor(apiurl){
        this.apiurl = apiurl;
    }

    post(url, object){
        const requestUrl = `${this.apiurl}${url}`
        return httpClient.post(requestUrl, object);
    }

    put(url, object){
        const requestUrl = `${this.apiurl}${url}`
        return httpClient.put(requestUrl, object);
    }

    delete(url){
        const requestUrl = `${this.apiurl}${url}`
        return httpClient.delete(requestUrl);
    }

    get(url){
        const requestUrl = `${this.apiurl}${url}`
        return httpClient.get(requestUrl);
    }
}

export default ApiService