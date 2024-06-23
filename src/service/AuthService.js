import {$authApi} from "../api/authApi.js";


export class Auth{
    static async login ({email, password}) {
        return $authApi.post('/login', {email, password},{
            withCredentials:true
        })
    }

    static async register ({email, login, password}) {
        return $authApi.post("/registration", {email,login, password})
    }
}