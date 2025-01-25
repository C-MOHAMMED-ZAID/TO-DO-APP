"use client"
import React, { createContext } from 'react'
export const MyContext = createContext() //Context API is used to pass data through the component tree without having to pass props down manually at every level. with context api every files can access the data without passing it as props.

const Context = ({children}) => {
    const username = 'John Doe'


  return (
    <div>
        <MyContext.Provider value={username}> 
            {/* value is used to pass the data to the children components */}
            {children}
            </MyContext.Provider> 
            {/* Provider is used to pass the data to the children components */}
    </div>
  )
}

export default Context