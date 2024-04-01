import { createContext, useState} from "react";

export const authContext = createContext();

export const AuthContextProvider = ({children}) =>{
    const [isAuth, setIsAuth] = useState(false);
    
    return (
        <authContext.Provider value = {{isAuth, setIsAuth}}>
            {children}
        </authContext.Provider>
    )
}