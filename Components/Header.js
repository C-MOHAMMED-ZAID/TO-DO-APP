import React, { useContext } from 'react'
import Context, { MyContext } from '@/Helper/Context'

const Header = (props) => {
  const user = useContext(MyContext)
  return (
    <>
    <div className='bg-green-300 p-5'>
      {user}
    </div>
    </>
  )
}

export default Header