'use client';
import React from "react";
import {useState} from 'react';
import Report from "./Report";
// import {toggleThemeHandler} from '../../contexts/theme'



export default function Form() {
    const [Location,setLocation]= useState("")
    const [MinimumCustomers,setMinimumCustomers]= useState("")
    const [MaximumCustomers,setMaximumCustomers]= useState("")
    const [Average,setAverage]= useState("")
    const [allOutputs, setAllOutputs] = useState([]);
    // const [show,setShow] = useState(true)
    
    let [ShowTable,setShowTable] = useState(false)
    
    
    const handleLocation = (e) =>{
        {(e.target.value.length == 0 || e.target.value == undefined ?null:setLocation(e.target.value))}
        console.log(e.target.value.length)
    }
    
    const handleMinCustomer = (e) =>{
        {(e.target.value.length == 0 || e.target.value == undefined ?null:setMinimumCustomers(e.target.value))}
        // setMinimumCustomers(e.target.value)
        
    }
    const handleMaxCustomer = (e) =>{
        {(e.target.value.length == 0 || e.target.value == undefined ?null:setMaximumCustomers(e.target.value))}
        // setMaximumCustomers(e.target.value)
    }
    const handleAvg = (e) =>{
        {(e.target.value.length == 0 || e.target.value == undefined ?null :setAverage(e.target.value))}
        // setAverage(e.target.value)
    }
    
    
    
    const onSubmitHandler = (e) =>{
        e.preventDefault();
        const output = `{"location": "${Location}","minCustomers":${MinimumCustomers},"maxCustomers":${MaximumCustomers},"avgCookies":${Average}}`
        // const output = {
            //     location: Location ,
            //     min_customers: MinimumCustomers ,
            //     max_customers: MaximumCustomers ,
            //     avg_cookies: Average 
            //   };
            setAllOutputs([output]);
            console.log(output)
            console.log(allOutputs.length)
            console.log(e.target.value.length)
            
            
        
        
    }
    return (
        <div className=' dark:bg-stone-400'>
    
     <button onClick={()=>setShowTable(true)} type="submit" className='bg-stone-300 text-base bg-contain bg-origin-content
     text-teal-900 rounded-md hover:bg-orange-200 px-2 py-1 font-serif font-bold absolute top-3 right-40 '>Overview</button> 

     {/* <button onClick={toggleThemeHandler} type="submit" className='bg-stone-300 text-base bg-contain bg-origin-content
     text-teal-900 rounded-md hover:bg-orange-200 px-2 py-1 font-serif font-bold absolute top-3 
     left-2/4 ml-80 '>Theme</button>  */}

    <div class="container mx-auto px-56 center: true  bg-emerald-200 h-11  dark:bg-stone-400" >
        <h1 className='text-4xl italic font-medium text-center'> Create Cookie Stand</h1>
      <form onSubmit={onSubmitHandler} method="post" >
      <br/>
        <label for="first">Location &nbsp;</label>
        <input onChange={handleLocation} type="text" id="Location" name="Location" placeholder /><br/> 
        <br/>
        <label for="last">Minimum Customers Per Hour &nbsp;&nbsp;</label>
        <label for="last">Maximum Customers Per Hour &nbsp;&nbsp;</label>
        <label for="last">Average Cookies Per Sale &nbsp;&nbsp; </label> <br/>
        <input onChange={handleMinCustomer} type="text" id="MinimumCustomers" name="MinimumCustomers" placeholder=" "/> &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; <span></span>
        <input onChange={handleMaxCustomer} type="text" id="MaximumCustomers" name="MaximumCustomers" placeholder=" "/> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span></span>
        <input onChange={handleAvg} type="text" id="Average Cookies" name="AverageCookies" placeholder=" "/> &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; <span></span> 
        <button onClick={()=>setShow(false)} type="submit" className='bg-emerald-400 text-3xl bg-contain bg-origin-content text-teal-900 rounded-md hover:bg-teal-400 px-6 py-1'>Create</button>
      </form>
      </div>
      
      
      {/* {show?<h3 className='text-zinc-400 text-base mt-40 text-center'>Report Table Coming Soon... </h3>:null} */}
      {ShowTable?<div><Report/></div>:null}
      
      <h3 className='text-center text-zinc-400 mb-20'>
       
        {allOutputs.length == 0 ?<h2 className='text-zinc-400 text-base  text-center mt-60 dark:text-zinc-200'>No Cookie Stands Available</h2>:null}
        {allOutputs.length > 0 &&
            allOutputs.map((item, index) => {
                    return(
                        <p className='text-zinc-400 text-base mt-40 text-center  '>{item}</p>
                        )
                    })}
                    {/* </h3>
                    <h3 className='text-center text-zinc-400 mb-20 '> */}
       
                   
                   {/* </h3>
                    <h3 className='text-center text-zinc-400 pb-20 '> */}
                   </h3>
        
 
                    

      </div>
  );
}
