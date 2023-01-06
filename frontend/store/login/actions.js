// import axios from '@nuxtjs/axios'
export default {
    async getToken({commit},loginDetails){
        console.log("in action token",loginDetails);
        const {email,password} = loginDetails

        console.log("+++++++++++++++",email,password);
        try{
            console.log("in try block")
            const {data}= await this.$axios.post("http://localhost:8080/login", {
                email:loginDetails.email,
                password:loginDetails.password
            })
            console.log("success",data.success)
            if(data.success){
            commit("setToken",data.user.token)
            // this.$auth.$storage.setLocalStorage("x-access-token", data.user.token)
            this.$auth.$storage.setCookie("token", data.user.token)
            // console.log("setting token to localStorage",response)
            commit("setSuccess",data.success)
            }
        }catch(e){
            console.log("error".e)
        }
    }    
};