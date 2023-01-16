// import axios from '@nuxtjs/axios'
export default {
    async getToken({commit},loginDetails){
        console.log("in action token",loginDetails);
        const {email,password} = loginDetails

        console.log("+++++++++++++++",email,password);
        try{
            console.log("in try block")
            const {data}= await this.$axios.post(`${process.env.API_BASE_URL}/login`, {
                email:loginDetails.email,
                password:loginDetails.password
            })
            console.log("success",data.success)
            if(data.success){
            commit("setToken",data.user.token)
            commit("setAuth",true)
            this.$cookiz.set('token',data.user.token)
            
            commit("setSuccess",data.success)
            }
        }catch(e){
            console.log("error".e)
        }
    }    
};