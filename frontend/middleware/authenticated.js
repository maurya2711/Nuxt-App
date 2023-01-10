

export default function ({ app, redirect }) {
    if( app.$cookiz.get('token') && process.server ){
        return redirect("/")
    }
}


  
  