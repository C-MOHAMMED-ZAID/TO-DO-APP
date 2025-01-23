import React from 'react'
import Link from 'next/link'

const Header = (props) => {
  return (
    <div className='h-16 bg-red-700 text-white px-5 flex items-center justify-between'>
        {/* <h2>{props.name}</h2> */}
        <h2>Logo</h2>
        <div className='flex px-4 space-x-3'>
        <Link href='/About'>About</Link>
        <Link href='/Courses'>Courses</Link>
        <Link href='/Product'>Product</Link>
        </div>
    </div>
  )
}

export default Header