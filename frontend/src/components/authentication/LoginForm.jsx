import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = () => {
  // const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [usernameError, setUsernameError] = useState('')
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [serverError, setServerError] = useState('');
  const navigate = useNavigate();

  // password state
  const [isPasswordShow, setPasswordShow] = useState(false);

  const usernameRegex = /^[a-z]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^[A-Z][A-Za-z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*[0-9]+.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+.*$/;

  const handleRegisterForm = async (e) => {
    e.preventDefault();
    setEmailError('');
    setPasswordError('');
    setServerError('');
    setSuccessMessage('');
    setUsernameError('')

    if (!usernameRegex.test(username)) {
      setUsernameError("Username must only contain lowercase letters.");
      return;
    }

    // Email format validation
    if (!emailRegex.test(email)) {
      setEmailError("Invalid email format!");
      return;
    }

    if (!passwordRegex.test(password)) {
      setPasswordError("Password must start with a capital letter, include a number and a symbol.");
      return;
    }

    // Password match validation
    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', {
        username,
        email,
        password
      });
      setSuccessMessage("Registration successful!");
      console.log("Registration successful", response.data);

      // Clear inputs after success
      setUsername('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      navigate('/login/');
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Registration failed!';
      setServerError(errorMessage);
      console.error("Registration failed:", error);
    }
  };

  // Password toggle
  const PasswordToggle = () => {
    setPasswordShow(prev => !prev);
  };

  return (
    <div className='login-form'>
      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true"><i className="icon-autodeal-close"></i></span>
      </button>
      <div>
        <h1 className="text-2xl font-semibold mb-8 text-center">Register</h1>
        <form onSubmit={handleRegisterForm}>
          {/* Username */}
          <div className='input-box mb-4'>
            <label htmlFor="username" className='font-medium text-sm mb-2 hidden'>Username:</label>
            <div className='input-wrap relative'>
              <input
                type="text"
                value={username}
                placeholder='Username'
                id='user-name'
                required
                className='w-full text-sm border-2 border-blue-950/30 rounded-[12px] pl-12 h-[52px] px-4 outline-none transition-all duration-200 ease focus:border-2 focus:border-blue-950'
                onChange={(e) => setUsername(e.target.value)}
              />
              <span className='absolute left-4 top-[50%] -translate-y-1/2'><i className="fa-regular fa-user"></i></span>
            </div>
            {usernameError && <p className="text-sm text-red-500">{usernameError}</p>}
          </div>
          {/* Email */}
          <div className='input-box mb-4'>
            <label htmlFor="email" className='font-medium text-sm mb-2 hidden'>Email:</label>
            <div className='input-wrap relative'>
              <input
                type="text"
                value={email}
                placeholder='Email'
                id='email'
                required
                className='w-full text-sm border-2 border-blue-950/30 rounded-[12px] pl-12 h-[52px] px-4 outline-none transition-all duration-200 ease focus:border-2 focus:border-blue-950'
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (emailError && emailRegex.test(e.target.value)) {
                    setEmailError('');
                  }
                }}
              />
              <span className='absolute top-[50%] -translate-y-1/2 left-4'><i className="fa-regular fa-envelope"></i></span>
            </div>
            {emailError && <p className="text-sm text-red-500">{emailError}</p>}
          </div>
          {/* Password */}
          <div className='input-box mb-4'>
            <label htmlFor="password" className='font-medium text-sm mb-2 hidden'>Password:</label>
            <div className='input-wrap password-input relative'>
              <input
                type={isPasswordShow ? 'text' : 'password'}
                value={password}
                placeholder='Password'
                id='password'
                required
                className='w-full text-sm border-2 border-blue-950/30 rounded-[12px] pl-12 h-[52px] px-4 outline-none transition-all duration-200 ease focus:border-2 focus:border-blue-950'
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className='absolute left-4 top-[50%] -translate-y-1/2'><i className="fa-solid fa-lock"></i></span>
              <button type="button" className='absolute top-[50%] -translate-y-1/2 right-4 text-sm' onClick={PasswordToggle}>
                {isPasswordShow ? <i className="fa-regular fa-eye"></i> : <i className="fa-regular fa-eye-slash"></i>}
              </button>
            </div>
          </div>

          {/* Confirm password */}
          <div className='input-box'>
            <label htmlFor="confirm-password" className='font-medium text-sm mb-2 hidden'>Confirm Password:</label>
            <div className='input-wrap relative'>
              <input
                type="password"
                value={confirmPassword}
                placeholder='Confirm Password'
                id='confirm-password'
                required
                className='w-full text-sm border-2 border-blue-950/30 rounded-[12px] pl-12 h-[52px] px-4 outline-none transition-all duration-200 ease focus:border-2 focus:border-blue-950'
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  if (passwordError && e.target.value === password) {
                    setPasswordError('');
                  }
                }}
              />
              <span className='absolute left-4 top-[50%] -translate-y-1/2'><i className="fa-solid fa-lock"></i></span>
            </div>
            {passwordError && <p className="text-sm text-red-500">{passwordError}</p>}
          </div>

          {/* Server Error */}
          {serverError && <p className="mt-2 text-sm text-red-500">{serverError}</p>}

          {/* Success Message */}
          {successMessage && <p className="mt-2 text-sm text-green-600">{successMessage}</p>}

          {/* Submit button */}
          <button type='submit' className='mt-12 w-full block mx-auto h-[52px] bg-blue-950/90 rounded-[12px] text-white font-medium'>Sign Up</button>
        </form>
        <p className='mt-2 text-gray-500 text-center text-sm'>Already account? <Link to='/register/' className='text-blue-950/90 font-semibold pb-[2px] border-b border-blue-950/90'>Login</Link></p>
      </div>
    </div>
  );
};

export default LoginForm;
