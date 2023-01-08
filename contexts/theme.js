// Main steps to create Context 
// 1. create the provider(context), that will provide the global state to my app
// 1.1 create the context
// 1.2 create the context wrapper (provider)
import { createContext, useEffect, useState } from "react";
export const ThemeContext = createContext();

export default function Themewrapper({children}){

    const [isDarkTheme,setisDarkTheme] = useState(true)

    function initialTemeHandler(){
        const mode = JSON.parse(localStorage.getItem('mode'))
        if (mode==false){
            console.log(1,isDarkTheme)
            setisDarkTheme(false)   
            document.querySelector("body").classList.remove("dark"); 
        }
        // take the initial value
        else{
        console.log(2,isDarkTheme)
        isDarkTheme && document.querySelector("body").classList.add("dark"); // add dark class to the body element
    }}
        
    
    function toggleThemeHandler(){
        setisDarkTheme(!isDarkTheme)
        document.querySelector("body").classList.toggle("dark")
        localStorage.setItem('mode', JSON.stringify(!isDarkTheme))

    }
    const globalState = {
        isDarkTheme : true ,
        toggleThemeHandler 
    }
    useEffect(()=>initialTemeHandler)
    return(
        <ThemeContext.Provider value={globalState}>
            {children}
        </ThemeContext.Provider>
    )

}