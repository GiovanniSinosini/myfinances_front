import ApiService from "../apiservice";

export default class PostingsService extends ApiService{

    constructor(){
        super('/api/postings')
    }

    search( postingFilter ){
        let params = `?year=${postingFilter.year}`

        if (postingFilter.month){
            params.concat(`&month=${postingFilter.month}`)
        }

        if (postingFilter.type){
            params.concat(`&type=${postingFilter.type}`)
        }

        if (postingFilter.status){
            params.concat(`&status=${postingFilter.status}`)
        }
        return this.get(params)
    }




}