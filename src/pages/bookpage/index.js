import React, { useEffect } from 'react'
import axios from 'axios'

function BookPage() {
    useEffect(()=>{
     axios("https://localhost:8000/students")
     .then(res=>console.log(res))
     .catch(err=>console.log(err))    
    },[])
  return (
    <div>
      homepage
    </div>
  )
}

export default BookPage

async function getstaticprops(){
    const response = await axios("http://localhost:8000/students")
    console.log(response.data)
    return{
        props:{
            data:data
        }
    }
}
