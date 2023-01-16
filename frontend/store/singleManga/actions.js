export default {
    async getSingleManga({commit}, id){
        console.log("+++++++++++++++++ single manga action dispatch", id)
        try{
            const {data}= await this.$axios.get(`${process.env.API_BASE_URL}/data/${id}`,{
                headers:{
                    "x-access-token":this.$cookiz.get("token")
                }
            })
            if(data.message === "sucess"){
              commit('setSingleManga',data.singleNovel)      
                commit('setMessage',data.message)
            }
        }catch(e){
            console.log("error",e)
        }
    },

    async downloadBook({commit},details){
        console.log("+++++++++++++++++ download book action dispatch", details)
        const {id, file}= details
        console.log("details", id, file)
        try{
            const {data}= await this.$axios.post(`${process.env.API_BASE_URL}/data/download/${id}`, {file},{
                headers:{
                    "x-access-token":this.$cookiz.get("token")
                }
            });
            console.log("in action download", data)
        }catch(e){
            console.log("error",e)
        }
    }

    
};