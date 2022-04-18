const axios = require('axios').default;
class kLogs {
    constructor(apikey){
        this.apikey = apikey;
        this.host = 'https://logs.khokon.dev'
    }
    prepare(payload){
        this.payload = payload;
    }
    send(){
        return new Promise(async (resolve, reject) => {
            if(!this.apikey)
            reject("API Key is required")
            if(typeof(this.payload) != 'object')
            reject("Only Object is accepted");
            let response = await axios.post(`${this.host}/api`, JSON.stringify(this.payload), {
                headers:{
                    'API-KEY': this.apikey,
                    'Content-Type': 'application/json'
                }
            })
            resolve(response.data);
        });
    }
}
module.exports = kLogs