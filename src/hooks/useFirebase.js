import { useState } from "react"

const useFirebase = () =>{
    const [user,setUser] = useState({})

    const googleSignIn = () => console.log('hooks used')

    return {user,googleSignIn};

} 

export default useFirebase;