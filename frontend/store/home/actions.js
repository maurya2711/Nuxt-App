// import axios from '@nuxtjs/axios'
// const token=this.$auth.$storage.getCookie("token")

export default {
    async getAllBooks({commit}){
        try{
            const {data}= await this.$axios.get("http://localhost:8080/data",{
                headers:{
                    "x-access-token":this.$auth.$storage.getCookie("token")
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