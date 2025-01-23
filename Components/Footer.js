import React from 'react'

const Footer = (props) => {
  return (
    <div className='h-10 bg-neutral-600 text-zinc-300 flex justify-between px-5' >
        <h2>{props.company}</h2> 
        <div className='space-x-5 flex '>
            <h5>copyright @ company</h5>
            <h5>Our Blogs</h5>
            <h5>Linkedin</h5>
            <h5>Youtube</h5>
            <h5>Twitter</h5>
        </div>
    </div>
  )
}

export default Footer