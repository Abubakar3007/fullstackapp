import React from 'react'
import RegisterImage from '../../assets/images/register.webp';
const AuthImage = () => {
  return (
    <div className='auth-image'>
        <img src={RegisterImage} alt='Register image' loading='lazy' />
    </div>
  )
}

export default AuthImage