import React from 'react'
import AuthImage from '../components/authentication/AuthImage'
import Forget from '../components/authentication/Forget'
const ForgetPassword = () => {
    return (
        <div>
            <div className='auth-container'>
                <AuthImage />
                <Forget/>
            </div>
        </div>
    )
}

export default ForgetPassword