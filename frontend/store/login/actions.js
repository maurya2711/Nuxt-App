
export default {
    async getToken({commit},loginDetails){
        console.log("in action token",loginDetails);
        const {email,password} = loginDetails
        try{
            const {data}= await this.$axios.post(`https://otaku-world.vercel.app/login`, {
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