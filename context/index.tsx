"use client";

import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useEffect, useState } from "react";

interface AccountProps{
      name: string,
      pin:string
}
interface ContextType {
      account : AccountProps | null ,
      setAccount : Dispatch<SetStateAction<AccountProps | null>>
}
interface ChildProps{
      children:ReactNode
}

export const Context = createContext<ContextType | null>( null)

const GlobalContext = ({children} : ChildProps) =>{

      const [account, setAccount] = useState<AccountProps | null >(null)

      useEffect(() => {
            setAccount(JSON.parse(sessionStorage.getItem("account")!))
      }, [])
      
     return(
      <Context.Provider value={{account ,setAccount}}>
            {children}
      </Context.Provider>
     )
}

export default GlobalContext

export const useGlobalContext = () => {
      const context = useContext(Context)
      if (context === null) {
            throw new Error('useGlobalContext must be used within a GlobalContext')
      }
      return context
}