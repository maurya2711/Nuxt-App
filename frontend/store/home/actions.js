// import axios from '@nuxtjs/axios'
// const token=this.$auth.$storage.getCookie("token")
export default {
    async getAllBooks({commit}){
        try{
            const {data}= await this.$axios.get(`${process.env.API_BASE_URL}/data`,{
                headers:{
                    "x-access-token":this.$cookiz.get("token")
                }
            })
            commit('setBooks',data.allNovels)
            if(data.message === "sucess"){
              commit('setBooks',data.allNovels)      
                commit('setMessage',data.message)
            }
        }catch(e){
            console.log("error",e)
        }
    }
    
};