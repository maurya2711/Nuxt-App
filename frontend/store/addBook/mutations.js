
export default {
    setNewBookDetails(state,payload){
        state.newBookDetails = payload
    },
    setMessage(state,payload){
        console.log("in message mutation",payload)
        state.status = payload
    },
    setApiSuccess(state,payload){
        console.log("in succes mutation",payload)
        state.apiSuccess = payload
    }
  };