import React from 'react'
import AuthImage from '../components/authentication/AuthImage'
import SignUp from '../components/authentication/SignUp'

const Login = () => {
  return (
    <main className='py-16'>
      <div className='auth-container'>
        <AuthImage />
        <SignUp />
      </div>
    </main>
  )
}

export default Login