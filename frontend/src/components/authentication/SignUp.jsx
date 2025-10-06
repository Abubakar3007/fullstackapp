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
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true"><i className="icon-autodeal-close"></i></span>
            </button>
            <div>
                <h4>Login</h4>
                {/* login form */}
                <form onSubmit={handleLoginForm}>
                    {/* Email */}
                    <div className='input-box'>
                        <label htmlFor="email" className='label'>Email:</label>
                        <div className='input-wrap'>
                            <input
                                type="text"
                                value={email}
                                placeholder='Your Email'
                                id='email'
                                required
                                className='input'
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <span className='absolute top-[50%] -translate-y-1/2 left-4'><i className="fa-regular fa-envelope"></i></span>
                        </div>
                        {emailError && <p className="mt-1 text-sm text-red-500">{emailError}</p>}
                    </div>

                    {/* Password */}
                    <div className='input-box'>
                        <label htmlFor="password" className='label'>Password:</label>
                        <div className='input-wrap password-input'>
                            <input
                                type={isPasswordShow ? "text" : "password"}
                                value={password}
                                placeholder='Your Password'
                                id='password'
                                required
                                className='input'
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <span className='absolute left-4 top-[50%] -translate-y-1/2'><i className="fa-solid fa-lock"></i></span>
                            <button type="button" className='password-btn' onClick={passwordToggle}>
                                {isPasswordShow ? <i className="fa-regular fa-eye"></i> : <i className="fa-regular fa-eye-slash"></i>}
                            </button>
                        </div>
                        {passwordError && <p className="mt-1 text-sm text-red-500">{passwordError}</p>}
                    </div>

                    {/* forget password */}
                    <div className='mb-4 text-right'>
                        <Link to="/forget-password/" className='text-sm'>Forget password?</Link>
                    </div>

                    {/* Submit button */}
                    <button type='submit' className='btn'>Login</button>
                    {/* Server message */}
                    {serverMessage && <p className='mt-4 text-sm text-center text-gray-700'>{serverMessage}</p>}
                </form>
                <p className='mt-3 text-center'>Don't have an account? <Link to='/register/' className='text-[#ff7101]'>Register</Link></p>
            </div>
        </div>
    )
}

export default SignUp