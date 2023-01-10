export default {
    setToken(state,payload){
        state.token = payload
    },
    setSuccess(state,payload){
        console.log("++++++++++++++in mutation",payload)
        state.status = payload
    },
    setAuth(state,payload){
        state.auth = payload
    },

  };