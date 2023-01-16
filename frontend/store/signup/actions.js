// import axios from '@nuxtjs/axios'
export default {
    async getUserDetails({commit},signupDetails){
        console.log("in action token",signupDetails);
        const formData =new FormData();
        formData.append("firstName", signupDetails.fName);
        formData.append("secondName", signupDetails.lName);
        formData.append("email", signupDetails.email);
        formData.append("password", signupDetails.password);
        formData.append("image", signupDetails.image);
        try{
            console.log("in try block", formData)
            const {data}= await this.$axios.post(`https://otaku-world.vercel.app/data`,formData)
                
            console.log("success",data.success)
            if(data.success){
            commit("setToken",data.user)
            commit("setSuccess",data.success)
            }
        }catch(e){
            console.log("error".e)
        }
    }    
};