"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const page = ({params}) => { //this is a dynamic routing used to get the id of the user without having to create a new page for each user
    
    const {id} = params; // This is the id of the user
    const [users, setusers] = useState([]) // This is the user data
    const getUsers= async()=>{
    const {data}= await axios.get('https://jsonplaceholder.typicode.com/users/'+id) // This is the data that is being fetched
    setusers(data)
  }  
  useEffect(() => {
    getUsers()
  }, []) 

      return (
        <> 
    <div>{JSON.stringify(users) // This is the user data
    } 
    </div>

    </>
  )
}

export default page