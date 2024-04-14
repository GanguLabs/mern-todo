import React, { useState } from 'react'

import { loginUser } from "../api/usersApi"
import { useNavigate } from 'react-router-dom';


const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        loginUser(password)
        .then(()=>{
            // console.log('User logged in');
            navigate('/');
        }).catch((err)=>{
            setError(err.message)
        })

    };

    return (
        <div>
            <h1>Login</h1>
            {error && <p style={{color: 'red'}}>{error}</p>}
            <form onSubmit={handleLogin}>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <br />
                <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <br />

                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default LoginPage