'use client';

import {useState , useEffect , createContext} from 'react';
import axios from 'axios';
export const AuthContext = createContext();
export function AuthWrapper({children}){
    const [globalState,setglobalState] = useState({
        tokens : null,
        login
    })
    async function login(userInfo){
        //send a request to the server 
        const url = "https://cookie-stands-project.herokuapp.com/api/token/";
        const res = await axios.post(url,userInfo)
        setglobalState({
            tokens : res.data.access,
            login
            
        })
        console.log(res)
    }

    return(
        <AuthContext.Provider value ={globalState}>
            {children}
        </AuthContext.Provider>
    )
}



