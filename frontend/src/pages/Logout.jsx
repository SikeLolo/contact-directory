import React from 'react'
import { useAuth } from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); 
    alert('You have been logged out.');
    navigate('/');
  }

  return (
    <div className='h-screen bg-[#fef9d9] flex flex-col items-center'>
      <h1>Logout</h1>
      <button onClick={handleLogout} className='border-2 border-black'>
        Confirm
      </button>
    </div>
  )
}

export default Logout