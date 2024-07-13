import {defineStore} from 'pinia'
// @ts-ignore
export const useAuthStore = defineStore('auth',{
    state: () => {
        return {
            token: null,
            isLogin:  false,
            user: null,
        }
    },

    actions:{
        setToken(data:any){
            this.token = data.token
            this.isLogin = true;
        },
        setAuthUser(data:any){
            this.user = data
        },

        removeToken(){
            this.token = null
            this.isLogin = false
            this.user = null
        }
    },
    getters:{
        getToken():any{
            return this.token
        },
        getIsLogin():any{
            return this.isLogin
        },
        getAuthUser():any{
            return this.user
        }
    },

    persist: true,
})
