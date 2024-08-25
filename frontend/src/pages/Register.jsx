import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import axios from 'axios';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [altpassword, setAltPassword] = useState('');
    const navigate = useNavigate();
    const { user, login, logout } = useAuth();

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(password !== altpassword){
            alert('The passwords do not match. Try again.');
            setPassword('');
            setAltPassword('');
            return;
        }
        try {
            const response = await axios.post('http://localhost:5000/api/auth/register', {username, password})
            login({ username: username, password: password})
            alert('Account Made');
            navigate('/profile');
        } catch (error) {
            console.error('There was an error registering in', error);
        }
    }

    const redirectLogin = () => {
        navigate('/login');
    }
    return (
        <div className='h-screen bg-[#fef9d9] flex flex-col items-center'>
            <h1 className='font-semibold text-4xl my-8'>Register</h1>
            <form onSubmit={handleSubmit} className='flex flex-col border-2 border-black px-12 py-8 shadow-lg text-right'>
                <label className='my-3 select-none text-lg'>Set Username:
                    <input type='text' className='rounded-none focus:outline-none mx-4 px-1 py-1 border-black border-2 selection:bg-[#ffad60]' value={username} onChange={(event) => setUsername(event.target.value)}></input>
                </label>
                <label className='my-3 select-none text-lg'>Set Password:
                    <input type='password' className='rounded-none focus:outline-none mx-4 px-1 py-1 border-black border-2 selection:bg-[#ffad60]' value={password} onChange={(event) => setPassword(event.target.value)}></input>
                </label>
                <label className='my-3 select-none text-lg'>Re-enter Password:
                    <input type='password' className='rounded-none focus:outline-none mx-4 px-1 py-1 border-black border-2 selection:bg-[#ffad60]' value={altpassword} onChange={(event) => setAltPassword(event.target.value)}></input>
                </label>
                <button onClick={redirectLogin} className='text-center cursor-pointer underline'>Already have an account</button>
                <input type='submit' className='py-1 shadow-sm mt-4 font-semibold text-lg border-black border-2 cursor-pointer'></input>
            </form>
        </div>
    )
}

export default Register 