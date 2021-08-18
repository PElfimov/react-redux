
import  ENDPOINTS  from 'modules/api/endpoints';

const BASE_URL = `https://5f7998dbe402340016f9321f.mockapi.io`





class Api {
    baseUrl: string 
    endpoints:any

    constructor(baseUrl:string, endpoints:any) {
        this.baseUrl = baseUrl
        this.endpoints = endpoints
    }

    async generateRequest(endpoint:any, data:any) {
        const {method, url} = this.endpoints[endpoint]
        return fetch(`${this.baseUrl}${url}`, {method, body:data})
    }   

    async fetch(endpoint:any, data?:any) {
        const response:any = await this.generateRequest(endpoint, data)
        return response.json()
    }
}

export default new Api(BASE_URL, ENDPOINTS)