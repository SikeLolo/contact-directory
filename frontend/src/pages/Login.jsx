import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Logout = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const redirectRegister = () => {
    navigate('/register');
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {username, password})
      navigate('/profile');
    } catch (error) {
      if(error.response && error.response.status === 400){
        alert(error.response.data.error);
      }
      else{
        console.error('There was an error logging in', error);
      }
    }
  }
  return (
    <div className='h-screen bg-[#fef9d9] flex flex-col items-center'>
      <h1 className='font-semibold text-4xl my-8'>Login</h1>
      <form onSubmit={handleSubmit} className='flex flex-col border-2 border-black px-12 py-8 shadow-lg text-right'>
        <label className='my-3 select-none text-lg'>Enter Username:
          <input type='text' className='rounded-none focus:outline-none mx-4 px-1 py-1 border-black border-2 selection:bg-[#ffad60]' value={username} onChange={(event) => setUsername(event.target.value)}></input>
        </label>
        <label className='my-3 select-none text-lg'>Enter Password:
          <input type='password' className='rounded-none focus:outline-none mx-4 px-1 py-1 border-black border-2 selection:bg-[#ffad60]' value={password} onChange={(event) => setPassword(event.target.value)}></input>
        </label>
        <button onClick={redirectRegister} className='text-center cursor-pointer underline'>No account? Create Account</button>
        <input type='submit' className='py-1 shadow-sm mt-4 font-semibold text-lg border-black border-2 cursor-pointer'></input>
      </form>
    </div>
  )
}

export default Logout
