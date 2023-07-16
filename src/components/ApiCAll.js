import React ,{useState,useEffect}from 'react'

function ApiCAll() {
    const [Data,setData]=useState(' ');
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/usere')
    .then(response => response.json())
    .then(json => setData(json))
    .catch((err)=>console.log(err))
  },[])
console.log(Data)
  return(
    <>
    
    </>
  )
}


export default ApiCAll
