import React, { useState } from 'react'

const Login = ({handleLogin}) => {
  

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const submitHandler=(e)=>{
        e.preventDefault();
        handleLogin(email,password)
        console.log("email is :", email);
        console.log("password is:",password)

        setEmail("")
        setPassword("")
    }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 rounded-xl border-emerald-600 p-20'>
           <form onSubmit={(e)=>{
            submitHandler(e)
           }}
            className='flex flex-col items-center justify-center'>
           <input
           value={email}
            onChange={(e)=>{
            setEmail(e.target.value)
           }}
            required className='outline-none bg-transparent placeholder:text-gray-400 border-2 border-emerald-600 px-5 py-3 text-xl  rounded-full' type="email" placeholder='Enter Your Email' />
           <input 
           value={password}
           onChange={(e)=>{
            setPassword(e.target.value)
        }
           }
           required className='outline-none bg-transparent placeholder:text-gray-400 border-2 border-emerald-600 px-5 py-3 text-xl mt-3 rounded-full' type="password" placeholder='Enter Your Password' />
           <button className='mt-5 text-white outline-none  bg-emerald-600 px-5 py-3 text-xl  rounded-full'> Log in</button>
           </form>
        </div>

    </div>
  )
}

export default Login