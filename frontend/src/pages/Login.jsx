import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Logout = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(username);

    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {username})
      navigate('/profile');
    } catch (error) {
      console.error('There was an error logging in', error);
    }

  }
  return (
    <div className='h-screen bg-[#fef9d9] flex flex-col items-center'>
      <h1 className='font-semibold text-4xl my-8'>Login</h1>
      <form onSubmit={handleSubmit} className='flex flex-col border-2 border-black px-12 py-8 shadow-lg text-right'>
        <label className='my-3 select-none'>Enter Username:
          <input type='text' className='rounded-none focus:outline-none mx-4 px-1 border-black border-2' value={username} onChange={(event) => setUsername(event.target.value)}></input>
        </label>
        <label className='my-3 select-none'>Enter Password:
          <input type='text' className='rounded-none focus:outline-none mx-4 px-1 border-black border-2' value={password} onChange={(event) => setPassword(event.target.value)}></input>
        </label>
        <input type='submit' className='shadow-sm mt-6 font-semibold text-lg border-black border-2 cursor-pointer'></input>
      </form>
    </div>
  )
}

export default Logout
