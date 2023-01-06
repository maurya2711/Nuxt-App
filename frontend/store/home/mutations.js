
export default {
    setBooks(state,payload){
        state.books = payload
    },
    setMessage(state,payload){
        console.log("++++++++++++++in mutation",payload)
        state.status = payload
    }

  };