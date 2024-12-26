import React, { useState } from 'react'
import { setLocalStorage } from '../../Utils/localStorag'

const Header = (props) => {

  // const [userName, setUserName] =useState('')
  // if(!data){
  //   setUserName('Admin')
  // }else{
  //   setUserName(data.firstName)
  // }

    const logOutUser=()=>{

     localStorage.setItem('loggedInUser','')
     props.changeUser('')
     //window.location.reload()
    }

  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>userName👋</span></h1>
        <button onClick={logOutUser} className='bg-red-500 text-white px-5 py-2  rounded-sm text-lg font-medium'>
             Log Out</button>
    </div>
  )
}

export default Header;