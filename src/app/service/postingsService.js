import ApiService from "../apiservice";

export default class PostingsService extends ApiService{

    constructor(){
        super('/api/postings')
    }

    getListMonths() {
        return [
            { label: 'Select...', value: ''},
            { label: 'January', value: 1},
            { label: 'February', value: 2},
            { label: 'March', value: 3},
            { label: 'April', value: 4},
            { label: 'May', value: 5},
            { label: 'June', value: 6},
            { label: 'July', value: 7},
            { label: 'August', value: 8},
            { label: 'September', value: 9},
            { label: 'October', value: 10},
            { label: 'November', value: 11},
            { label: 'December', value: 12},
          ]
    }

    getTypes() {
        return [
            { label: 'Select...', value: ''},
            { label: 'Payments', value: 'PAYMENTS'},
            { label: 'Receipts', value: 'RECEIPTS'}
        ]
    }

    getStatus() {
        return [
            { label: 'Select...', value: ''},
            { label: 'Canceled', value: 'CANCELED'},
            { label: 'Effective', value: 'EFFECTIVE'},    
            { label: 'Pending', value: 'PENDING'}
        ]
    }

    search( postingFilter ){
        let params = `?year=${postingFilter.year}`

        if (postingFilter.month){
            params = `${params}&month=${postingFilter.month}`
        }

        if (postingFilter.type){
            params = `${params}&type=${postingFilter.type}`
        }

        if (postingFilter.status){
            params = `${params}&status=${postingFilter.status}`
        }

        if (postingFilter.user){
            params = `${params}&user=${postingFilter.user}`
        }

        if (postingFilter.description){
            params = `${params}&description=${postingFilter.description}`
        }

        return this.get(params)
    }

    deletePosting(id){
        return this.delete(`/${id}`)
    }

    save(posting){
        return this.post('/', posting)
    }




}