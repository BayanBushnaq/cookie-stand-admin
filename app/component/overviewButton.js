import React from "react";
import {useState} from 'react';
import Report from "./Report";

export default function overviewButton(){
    let [ShowTable,setShowTable] = useState(false)

    return(
        <>
        <button onClick={()=>setShowTable(true)} type="submit" className='bg-stone-300 text-base bg-contain bg-origin-content
     text-teal-900 rounded-md hover:bg-orange-200 px-2 py-1 font-serif font-bold absolute top-3 right-14'>Overview</button>
        {ShowTable?<div><Report/></div>:null}

        </>
    )
}