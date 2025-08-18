import React from 'react'
import AuthImage from '../components/authentication/AuthImage'
import LoginForm from '../components/authentication/LoginForm'
import '../components/authentication/auth.scss'
const Register = () => {
    return (
        <main className='py-16'>
            <div className='auth-container'>
                <AuthImage />
                <LoginForm />
            </div>
        </main>
    )
}

export default Register