// import axios from '@nuxtjs/axios'
// const token=this.$auth.$storage.getCookie("token")

export default {
    async getSearchedBook({commit},value){
        try{
            const {data}= await this.$axios.get(`${process.env.API_BASE_URL}/data/search?query=${value}`,{
                headers:{
                    "x-access-token":this.$cookiz.get("token")
                }
            })
            console.log("in serach api",data)
        }catch(e){
            console.log("error",e)
        }
    }
    
};