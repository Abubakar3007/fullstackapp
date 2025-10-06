import { React, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [serverMessage, setServerMessage] = useState('');
    const [isPasswordShow, setPasswordShow] = useState(false);

    const navigate = useNavigate();

    const handleLoginForm = async (e) => {
        e.preventDefault();
        setEmailError('');
        setPasswordError('');
        setServerMessage('');

        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', {
                email, password
            });
            setServerMessage(response.data.message || "Login successful");
            localStorage.setItem("user", JSON.stringify(response.data.user));
            navigate('/');
        }
        catch (error) {
            if (error.response && error.response.data) {
                const message = error.response.data.message;

                if (typeof message === 'string') {
                    setServerMessage(message);
                    if (message.toLowerCase().includes("email")) setEmailError(message);
                    if (message.toLowerCase().includes("password")) setPasswordError(message);
                } else {
                    setServerMessage("Something went wrong");
                }
            } else {
                setServerMessage("Server error");
            }
        }
    }

    const passwordToggle = () => {
        setPasswordShow(prev => !prev);
    }

    return (
        <div className='login-form'>
            <div>
                <h1 className="text-2xl font-semibold mb-8 text-center">Login</h1>
                {/* login form */}
                <form onSubmit={handleLoginForm}>
                    {/* Email */}
                    <div className='input-box mb-4'>
                        <label htmlFor="email" className='font-medium text-sm mb-2 hidden'>Email</label>
                        <div className='input-wrap relative'>
                            <input
                                type="text"
                                value={email}
                                placeholder='Email'
                                id='email'
                                required
                                className='w-full text-sm border-2 border-blue-950/30 rounded-[12px] pl-12 h-[52px] px-4 outline-none transition-all duration-200 ease focus:border-2 focus:border-blue-950'
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <span className='absolute top-[50%] -translate-y-1/2 left-4 text-blue-950/60'><i className="fa-regular fa-envelope"></i></span>
                        </div>
                        {emailError && <p className="mt-1 text-sm text-red-500">{emailError}</p>}
                    </div>
                    {/* Password */}
                    <div>
                        <label htmlFor="password" className='font-medium text-base mb-2 hidden'>Password:</label>
                        <div className='input-wrap password-input relative'>
                            <input
                                type={isPasswordShow ? "text" : "password"}
                                value={password}
                                placeholder='Password'
                                id='password'
                                required
                                className='w-full border-2 border-blue-950/30 rounded-[12px] px-12 h-[52px] outline-none text-sm transition-all duration-200 ease focus:border-2 focus:border-blue-950'
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <span className='absolute left-4 top-[50%] -translate-y-1/2 text-blue-950/60'><i className="fa-solid fa-lock"></i></span>
                            <button type="button" className='absolute top-[50%] -translate-y-1/2 right-4 text-sm' onClick={passwordToggle}>
                                {isPasswordShow ? <i className="fa-regular fa-eye text-blue-950/60"></i> : <i className="fa-regular fa-eye-slash text-blue-950/60"></i>}
                            </button>
                        </div>
                        {passwordError && <p className="mt-1 text-sm text-red-500">{passwordError}</p>}
                    </div>
                    {/* forget password */}
                    <div className='text-right mt-1'>
                        <Link to="/forget-password/" className='text-sm font-semibold text-blue-950/90 pb-[2px] border-b border-blue-950/90'>Forget password?</Link>
                    </div>
                    {/* Submit button */}
                    <button type='submit' className='mt-12 w-full block mx-auto h-[52px] bg-blue-950/90 rounded-[12px] text-white font-medium'>Login</button>
                    {/* Server message */}
                    {serverMessage && <p className='mt-4 text-sm text-center text-gray-700'>{serverMessage}</p>}
                </form>
                <p className='mt-2 text-gray-500 text-center text-sm'>Not account yet? <Link to='/register/' className='text-blue-950/90 font-semibold pb-[2px] border-b border-blue-950/90'>Register</Link></p>
                {/* divider */}
                <div className="mt-8 text-center text-sm text-gray-500">
                    <span className='mx-2'>Or login with</span>
                </div>
                {/* google facebook login */}
                <div className='flex gap-6 [&>button]:p-2 mt-8 justify-center'>
                    <button className=''>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24" height="24">
                            <path fill="#EA4335" d="M24 9.5c3.94 0 7.17 1.63 9.42 3.34l6.43-6.43C36.53 3.08 30.77 0 24 0 14.84 0 7.12 5.34 3.11 13.09l7.46 5.8C12.4 13.15 17.66 9.5 24 9.5z" />
                            <path fill="#FBBC05" d="M46.53 24.5c0-1.63-.15-3.18-.43-4.68H24v9.02h12.74c-.55 2.82-2.17 5.2-4.63 6.83l7.12 5.56C43.25 37.56 46.53 31.58 46.53 24.5z" />
                            <path fill="#34A853" d="M10.57 28.89A14.5 14.5 0 0 1 9.5 24c0-1.7.29-3.33.82-4.89l-7.46-5.8A24 24 0 0 0 0 24c0 3.84.9 7.45 2.5 10.67l8.07-5.78z" />
                            <path fill="#4285F4" d="M24 48c6.49 0 11.94-2.14 15.92-5.8l-7.12-5.56c-2.04 1.37-4.67 2.18-8.8 2.18-6.34 0-11.6-3.65-13.43-8.84l-8.07 5.78C7.12 42.66 14.84 48 24 48z" />
                        </svg>
                    </button>
                    <button className=''>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                            <path fill="#1877F2" d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.023 4.388 11.02 10.125 11.854v-8.385H7.078v-3.469h3.047V9.414c0-3.008 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.513c-1.49 0-1.953.925-1.953 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.093 24 18.096 24 12.073z" />
                        </svg>
                    </button>
                    <button className=''>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                            <path fill="#000000" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H15.67l-5.215-6.82-5.973 6.82H1.175l7.735-8.835L.66 2.25h7.873l4.713 6.235 5-6.235z" />
                        </svg>
                    </button>
                    <button className=''>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                            <path fill="#000000" d="M16.365 1.43c0 1.14-.413 2.08-1.236 2.83-.988.895-2.177 1.4-3.485 1.26-.05-1.1.453-2.19 1.26-2.94.907-.84 2.2-1.35 3.46-1.15zm4.97 17.36c-.82 1.81-1.82 3.63-3.29 3.66-1.26.03-1.66-.73-3.1-.73s-1.88.7-3.08.75c-1.4.05-2.48-1.96-3.3-3.77-1.78-3.84-.38-8.76 2.77-8.86 1.24-.02 2.15.82 3.11.82.96 0 2.05-.84 3.46-.85 2.33-.04 4.1 2.43 4.1 5.53 0 1.09-.24 2.25-.77 3.45z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SignUp