
import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../Utils/localStorag'

export const AuthContext=createContext()

const AuthProvider = ({children}) => {

//localStorage.clear()
    const [UserData, setUserData] = useState(null)

    useEffect(()=>{
      setLocalStorage()//ensure localstorage is set
      const {employees}=getLocalStorage()// Get employee data from localStorage
      setUserData(employees)// Set employee data in state
    },[])

      return (
        <div>
            <AuthContext.Provider value={[UserData,setUserData]} >
            {children}
            </AuthContext.Provider>
        </div>
      )
}

export default AuthProvider