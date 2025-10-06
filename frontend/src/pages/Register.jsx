import React from 'react'
import LoginForm from '../components/authentication/LoginForm';
import CarImage from '../assets/images/car-logo.png'
const Register = () => {
    return (
        <main className='grid place-items-center auth-bg h-[100dvh]'>
        <div className='py-8 px-20 bg-white relative z-[10] rounded-[12px] border-2 border-blue-950/50 shadow-[0px_0px_20px_0px_rgba(0,0,0,0.10)] w-full max-w-[1100px] mx-auto'>
          <h1 className='text-2xl font-medium mb-8'>My cars.com</h1>
          <div className='flex gap-12 items-center'>
            <div className='px-12 py-8 rounded-[12px] border border-blue-950/10 bg-white w-full max-w-[420px] mx-auto'>
              <LoginForm />
            </div>
            <div className='max-w-[calc(100%-420px)] w-full'>
              <img src={CarImage} alt="" className='' />
            </div>
          </div>
        </div>
      </main>
    )
}

export default Register