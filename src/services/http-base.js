
class HttpBase {
    async basePost(url,config) {
        try{
            const options = {
                method: 'POST',
                headers: this.headerConfig(config.headers),
                body: JSON.stringify(config.params)
            }
            let query = await this.callHttp(url,options);
            const data = await query.json();
            return data;
        } catch(err){
            throw new Error(err);
        }
    }

    async baseGet(url,config) {
        try{
            const options = {
                method: 'GET',
                headers: this.headerConfig(config.headers),
            }
            const parameters = this.buildParams(config.params);
            const _url = `${url}${parameters}`;
            let query = await this.callHttp(_url,options);
            const data = await query.json();
            return data;
        } catch(err){
            throw new Error(err);
        }
    }

    headerConfig(customHeader){
        const defaultHeader = {
            'Content-Type':'application/json',
            Accept: 'application/json'
        }
        const headersConfigObject = Object.assign(defaultHeader,customHeader);
        let headers = new Headers(headersConfigObject);
        return headers;
    }

    callHttp(url, options){
        let promise = new Promise((resolve, reject ) => {
            fetch(url, options)
            .then(response => resolve(response))
            .catch(error => reject(error))
        });

        return promise;
    }

    buildParams(params){
        let param = [];
            if(params){
                for(let [key,value] of Object.entries(params)){
                    param.push(key+'='+value);
                }
                return '?'+ param.join('&');
            }
        return '';
    }
}

export default new HttpBase;