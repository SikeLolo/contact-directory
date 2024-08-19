import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className=' relative w-full h-16 bg-[#b5c18e] border-black border-b-2'>
        <h1 className='absolute font-semibold h-full left-12 top-1 text-5xl select-none tracking-wide'>THE ADDRESS</h1>
        <div className='h-full flex justify-end items-center gap-10 px-10 py-2 font-semibold font-sans text-xl'>
            <Link to="/" className='rounded-md py-1 px-6 border-transparent border-2 select-none hover:bg-[#fef9d9] hover:border-stone-600 hover:shadow-md focus:outline-none focus:ring'>Home</Link>
            <Link to="/profile" className='rounded-md py-1 px-6 border-transparent border-2 select-none hover:bg-[#fef9d9] hover:border-stone-600 hover:shadow-md focus:outline-none focus:ring'>Profile</Link>
            <Link to="/login" className='rounded-md py-1 px-6 border-transparent border-2 select-none hover:bg-[#fef9d9] hover:border-stone-600 hover:shadow-md focus:outline-none focus:ring'>Login</Link>
        </div>
    </div>
  )
}

export default Navbar
