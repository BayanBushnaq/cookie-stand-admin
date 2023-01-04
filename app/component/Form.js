
import React from "react";
import {useState} from 'react';
import Report from "./Report";



export default function Form() {
    const [Location,setLocation]= useState("")
    const [MinimumCustomers,setMinimumCustomers]= useState("")
    const [MaximumCustomers,setMaximumCustomers]= useState("")
    const [Average,setAverage]= useState("")
    const [allOutputs, setAllOutputs] = useState([]);
    // const [show,setShow] = useState(true)
    
    let [ShowTable,setShowTable] = useState(false)
    
    const handleLocation = (e) =>{
        {(e.target.value !==""?setLocation(e.target.value):null)}
        }

    const handleMinCustomer = (e) =>{
        {(e.target.value !==""?setMinimumCustomers(e.target.value):null)}
        // setMinimumCustomers(e.target.value)

    }
    const handleMaxCustomer = (e) =>{
        {(e.target.value !== ""?setMaximumCustomers(e.target.value):null)}
        // setMaximumCustomers(e.target.value)
    }
    const handleAvg = (e) =>{
        {(e.target.value !== ""?setAverage(e.target.value):null)}
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
        
        
        
        
    }
    return (
        <>
    
     <button onClick={()=>setShowTable(true)} type="submit" className='bg-stone-300 text-base bg-contain bg-origin-content
     text-teal-900 rounded-md hover:bg-orange-200 px-2 py-1 font-serif font-bold absolute top-3 right-14'>Overview</button> 



    <div class="container mx-auto px-56 center: true mt-40 bg-emerald-200 h-11 ">
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
       
        {allOutputs.length == 0 ?<h2 className='text-zinc-400 text-base mt-40 text-center '>No Cookie Stands Available</h2>:null}
        {allOutputs.length > 0 &&
            allOutputs.map((item, index) => {
                    return(
                        <p className='text-zinc-400 text-base mt-40 text-center '>{item}</p>
                        )
                    })}
                    </h3>
                    <h3 className='text-center text-zinc-400 mb-20'>
       
                   
                   </h3>
                    <h3 className='text-center text-zinc-400 mb-20'>
                   </h3>
        
 
                    

      </>
  );
}
