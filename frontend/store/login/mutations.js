export default {
    setToken(state,payload){
        state.token = payload
    },
    setStatus(state,payload){
        console.log("++++++++++++++in mutation",payload)
        state.status = payload
    }

  };