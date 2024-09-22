import React from 'react'
import { useNavigate } from 'react-router-dom'
import './register.css'

export const Register = () => {
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle registration logic here
    }

    return (
        <div className='register-container'>
            <h1>Register</h1>
            <form className='register-form' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input type='email' id='email' name='email' required />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input type='password' id='password' name='password' required />
                </div>
                <div className="confirm-password">
                    <label htmlFor='confirmPassword'>Confirm Password</label>
                    <input type='password' id='confirmPassword' name='confirmPassword' required />
                </div>
                <button type='submit'>Register</button>
                <button type='button' onClick={() => navigate('/login')}>Back to Login</button>
            </form>
        </div>
    )
}

export default Register
