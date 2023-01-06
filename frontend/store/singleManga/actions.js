export default {
    async getSingleManga({commit}, id){
        console.log("+++++++++++++++++", id)
        try{
            const {data}= await this.$axios.get(`http://localhost:8080/data/${id}`,{
                headers:{
                    "x-access-token":this.$auth.$storage.getCookie("token")
                }
            })
            if(data.message === "sucess"){
              commit('setSingleManga',data.singleNovel)      
                commit('setMessage',data.message)
            }
        }catch(e){
            console.log("error",e)
        }
    }
    
};