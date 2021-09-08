import axios from "axios";

const httpClient = axios.create({
   baseURL: 'http://localhost:8080',
   withCredentials: true 
})

class ApiService {

    constructor(apiurl){
        this.apiurl = apiurl;
    }

    static registerToken(token){
        if (token){
            httpClient.defaults.headers.common['Authorization'] = `Bearer ${token}`
        }
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