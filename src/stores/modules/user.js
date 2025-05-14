import{ definStore } from 'pinia'
export const useUserStore = definStore('user',{
    state:()=>({
        name:'主人',
        age:18,
        isLogin:false
    }),
    actions:{
        login(){
            this.isLogin=true
        },
        logout(){
            this.isLogin=false
        }
    },
    getters:{
        welcomeMessage:(state)=>`欢迎${state.name}!`
    }
})