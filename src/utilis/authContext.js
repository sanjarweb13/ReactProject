import { createContext, useState } from "react";


export const AuthContext = createContext()  

const AuthProvider=(props)=>{
    const [currentUser,setCurrentUser]=useState(null)

    const logout=()=>{
        setCurrentUser(null)
    }

    const myValue = {currentUser, setCurrentUser, logout}

    return <AuthContext.Provider value={myValue}>{props.children}</AuthContext.Provider>
}

export default AuthProvider; 