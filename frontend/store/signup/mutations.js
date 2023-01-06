export default {
    setUserDetails(state,payload){
        state.token = payload
    },
    setStatus(state,payload){
        state.status = payload
    }
  };