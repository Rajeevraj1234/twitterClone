import { useContext,createContext, useState } from "react";

const userLoginContext = createContext();

const UserLoginProvider = ({children}) =>{
    const [userLogin , setUserLogin] = useState(null);
    return(
        <userLoginContext.Provider value={{setUserLogin,userLogin}}>
            {children}
        </userLoginContext.Provider>
    )
}

const useUserLoginContextProvider = () =>{
    return useContext(userLoginContext);
}

export {useUserLoginContextProvider , UserLoginProvider}

