
export default {
    setNewBookDetails(state,payload){
        state.newBookDetails = payload
    },
    setMessage(state,payload){
        state.status = payload
    },
    setApiSuccess(state,payload){
        state.apiSuccess = payload
    }
  };