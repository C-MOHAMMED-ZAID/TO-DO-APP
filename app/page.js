"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("") 
  const [desc, setdesc] = useState("")
  const [mainTask, setMainTask] = useState([]) //mainTask is the array of objects

  const submitHandler=(e)=>{ //e is event
    e.preventDefault() //to avoid reloading
    setMainTask([...mainTask,{ title, desc }]) //...mainTask is to copy the previous array and then add the new array

    settitle("") //to clear the input field after submitting
    setdesc("")
    console.log(mainTask)
  }
  const deleteHandler=(i)=>{ //i is index
    let copytask=[...mainTask] //copying the mainTask array
    copytask.splice(i,1) //splice is used to remove elements from array
    setMainTask(copytask) //setting the new array
  }
  
  let renderTask= <h2>No Task Available</h2> //default value

  if(mainTask.length>0){
    renderTask = mainTask.map((t,i)=>{ //t is task and i is index
      return (
        <li key={i} className='flex items-center justify-between'> 
            <div className='flex justify-between mb-5 w-2/3  bg-slate-300 p-5 rounded-lg'>
            <h5 className='text-2xl font-semibold'>{t.title}</h5>
            <h5 className='text-lg font-medium'>{t.desc}</h5>
            </div>
            <button 
            onClick={()=>{
              deleteHandler(i) //calling the deleteHandler function
            }}
            className='bg-red-600 text-white px-4 py-2 rounded font-bold'>Delete</button>
        </li>
      )
    })
  }

  return (
    <>
    <h1 className='bg-black p-5 text-white text-5xl font-bold text-center'>Zaid's To Do List</h1>

    <form onSubmit={submitHandler}> 

      <input type='text' className='text-2xl border-zinc-800 border-2  rounded-lg p-3 m-4' placeholder='Enter a title' 
      value={title} //value is the value of the input field
      onChange={(e)=>{  //two way binding - giving instructions to react what we are doing and react replicating values in the input field from me to user
        settitle(e.target.value) //e.target.value is the value of the input field
      }} />

      <input type='text' className='text-2xl border-zinc-800 border-2  rounded-lg p-3 m-4' placeholder='Enter Description' 
      value={desc}
      onChange={(e)=>{
       setdesc(e.target.value)
      }}/>

      <button className='bg-black text-white text-2xl p-3 m-4 rounded-lg font-bold'>Add Task</button>

    </form>

    <hr/>
    <div className='p-8 bg-slate-200'>
      <ul>
        {renderTask} 
      </ul> 
    </div>
    </>
  )
}

export default page
