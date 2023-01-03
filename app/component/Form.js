import React from "react";
import {useState} from 'react';

export default function Form() {
    const [Location,setLocation]= useState('Barcelona')
    const [MinimumCustomers,setMinimumCustomers]= useState('2')
    const [MaximumCustomers,setMaximumCustomers]= useState('4')
    const [Average,setAverage]= useState('2.5')
    const [allOutputs, setAllOutputs] = useState([]);
    const [show,setShow] = useState(true)

    
    const handleLocation = (e) =>{
        setLocation(e.target.value)}

    const handleMinCustomer = (e) =>{
        setMinimumCustomers(e.target.value)

    }
    const handleMaxCustomer = (e) =>{
        setMaximumCustomers(e.target.value)
    }
    const handleAvg = (e) =>{
        setAverage(e.target.value)
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
        
        
       
        
        
        
        
        
    }
    return (
        <>
    <div class="container mx-auto px-56 center: true mt-40 bg-emerald-200 h-11 ">
        <h1 className='text-4xl italic font-medium text-center'> Create Cookie Stand</h1>
      <form onSubmit={onSubmitHandler} method="post" >
      <br/>
        <label for="first">Location &nbsp;</label>
        <input onChange={handleLocation} type="text" id="Location" name="Location" placeholder="Barcelona" /><br/> 
        <br/>
        <label for="last">Minimum Customers Per Hour &nbsp;&nbsp;</label>
        <label for="last">Maximum Customers Per Hour &nbsp;&nbsp;</label>
        <label for="last">Average Cookies Per Sale &nbsp;&nbsp; </label> <br/>
        <input onChange={handleMinCustomer} type="text" id="MinimumCustomers" name="MinimumCustomers" placeholder="2"/> &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; <span></span>
        <input onChange={handleMaxCustomer} type="text" id="MaximumCustomers" name="MaximumCustomers" placeholder="4"/> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span></span>
        <input onChange={handleAvg} type="text" id="Average Cookies" name="AverageCookies" placeholder="2.5"/> &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; <span></span> 
        <button onClick={()=>setShow(false)} type="submit" className='bg-emerald-400 text-3xl bg-contain bg-origin-content text-teal-900 rounded-md hover:bg-teal-400 px-6 py-1'>Create</button>
      </form>
      </div>
      
      
      {show?<h3 className='text-zinc-400 text-base mt-40 text-center'>Report Table Coming Soon... </h3>:null}
      
      <h3 className='text-center text-zinc-400 mb-20'>
       
        {allOutputs.length > 0 &&
            allOutputs.map((item, index) => {
                    return(
                        
                        <p className='text-zinc-400 text-base mt-40 text-center'>{item}</p> 
                        
                    )
                    })}
                    </h3>
      

      
      </>
  );
}
