import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const Home = () => {
  const navigate = useNavigate();
  const { user, login, logout } = useAuth();

  const handleClick = () => {
    navigate('/register');
  }

  return (
    <div className='h-screen bg-[#fef9d9] flex flex-col items-center'>
        <h1>Home</h1>
        {
          user ? (
            <h1> Hello there {user.username}</h1>
          ) : (
            <button onClick={handleClick} className='rounded-md border-2 border-black bg-[#ffad60] px-3 py-2'>Get Started</button>
          )
        }
    </div>
  )
}

export default Home