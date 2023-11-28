import React, { useState } from 'react'

export default function Multiplestate () {
 const [data,setdata] = useState({firstName : "Ansh", lastName : "Sindhu",fullName:""});
    
 const fullName =()=>{
    setdata ({...data,fullName : data.firstName +" " + data.lastName})
 }
 
 return (
    <div>{data.fullName}
    {data.firstName}
    {data.lastName}

          <button onclick={fullName}>display</button>
    </div>
  )
}
