import { useNavigate } from 'react-router-dom'
import './login.css'

export const Login = () => {
    const navigate = useNavigate()

    const navigateToSignup = () => {
        navigate('/register')
    }
    
    const navigateToForum = () => {
        navigate('/forum')
    }

    return (
        <div className='login-container'>
            <h1>Login</h1>
            <form className='login-form'>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input type='text' id='email' name='email' required />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input type='password' id='password' name='password' required />
                </div>
                <button type='submit' onClick={navigateToForum}>Login</button>
                <button type='button' onClick={navigateToSignup}>Sign Up</button>
            </form>
        </div>
    )
}

export default Login
