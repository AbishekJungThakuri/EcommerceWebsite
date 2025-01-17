import React from 'react'
import './css/LoginSignUp.css'

export  const LoginSignup = () => {
  return (
    <div className='loginsignup' >
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          Already have an account? <span>Login here</span>
          <div className="loginsignup-agree">
            <input type="checkbox" />
          <p>By continuing, i agree to terms of use & policy.</p>
          </div>
        </p>
      </div>
    </div>
  )
}
