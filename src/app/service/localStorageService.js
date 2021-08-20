class LocalStorageService{

    static addItem(variable, value){
        localStorage.setItem(variable, JSON.stringify(value));
    }

    static getItem(variable){
        const item = localStorage.getItem(variable);
        return JSON.parse(item)
    }
}

export default LocalStorageService
