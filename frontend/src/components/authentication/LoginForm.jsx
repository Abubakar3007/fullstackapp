import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
      // navigate('/login/');
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
        <h4>Register</h4>

        <form onSubmit={handleRegisterForm}>
          {/* Username */}
          <div className='input-box'>
            <label htmlFor="user-name" className='label'>User Name:</label>
            <div className='input-wrap'>
              <input
                type="text"
                value={username}
                placeholder='User name'
                id='user-name'
                required
                className='input placeholder-black-200 focus:border-[#ff7101]'
                onChange={(e) => setUsername(e.target.value)}
              />
              <span className='absolute left-4 top-[50%] -translate-y-1/2'><i className="fa-regular fa-user"></i></span>
            </div>
            {usernameError && <p className="text-sm text-red-500">{usernameError}</p>}
          </div>

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
          <div className='input-box'>
            <label htmlFor="password" className='label'>Password:</label>
            <div className='input-wrap password-input'>
              <input
                type={isPasswordShow ? 'text' : 'password'}
                value={password}
                placeholder='Your Password'
                id='password'
                required
                className='input'
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className='absolute left-4 top-[50%] -translate-y-1/2'><i className="fa-solid fa-lock"></i></span>
              <button type="button" className='password-btn' onClick={PasswordToggle}>
                {isPasswordShow ? <i className="fa-regular fa-eye"></i> : <i className="fa-regular fa-eye-slash"></i>}
              </button>
            </div>
          </div>

          {/* Confirm password */}
          <div className='input-box'>
            <label htmlFor="confirm-password" className='label'>Confirm Password:</label>
            <div className='input-wrap'>
              <input
                type="password"
                value={confirmPassword}
                placeholder='Confirm Password'
                id='confirm-password'
                required
                className='input'
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
          <button type='submit' className='btn'>Sign Up</button>
        </form>
        <p className='mt-3 text-center'>Already have an account? <Link to='/login/' className='text-[#ff7101]'>Login</Link> </p>
      </div>
    </div>
  );
};

export default LoginForm;
