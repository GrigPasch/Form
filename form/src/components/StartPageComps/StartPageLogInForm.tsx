import React from 'react'
import './StartPageLoginForm.css'
import { useNavigate} from 'react-router-dom';


const StartPageLogInForm = () => {
    const navigate = useNavigate();
    
    return (
    <div className='rectangle' id='logInForm'>
        <p>
            Log In
        </p>
        <input type='text' placeholder='Username' id='start'/>
        <input type='password' placeholder='Password' id='start'/>
            <button type='button'onClick={() => navigate('Page-1', {replace: true})}>
                Log In
            </button>
    </div>
  )
}

export default StartPageLogInForm