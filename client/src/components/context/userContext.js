import React,{useContext ,  createContext , useReducer, useEffect} from 'react'
import axios from "axios"
import reducer from "../Reducer/userReducer"

const API = "https://dummyjson.com/users";

const userContext = createContext();

const initialState = {
    user:[],
}

const UserProvider = ({children}) =>{

    const [state ,  dispatch] = useReducer(reducer ,  initialState);

    const getUser = async (url) =>{
        const res = await axios.get(url);
        const user = await res.data.users;
        dispatch({type:"ADD_USER",payload:user});
    }
 

    useEffect(()=>{
        getUser(API);
    },[])
    

    return(
        <userContext.Provider value={{state}}>
            {children}
        </userContext.Provider>
    )
}

const useUserContextProvider = () =>{
    return useContext(userContext)
}

export {useUserContextProvider , UserProvider}