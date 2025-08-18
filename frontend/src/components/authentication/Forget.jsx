import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

const Forget = () => {
    const [email, setEmail] = useState('');

    const handleLoginForm = async (e) => {
        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', { email });
        } catch (error) {

        }
    }

    return (
        <div className='login-form'>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true"><i className="icon-autodeal-close"></i></span>
            </button>
            <div>
                <h4>Forget Password</h4>

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
                    </div>

                    {/* Submit button */}
                    <button type='submit' className='btn'>Get new password</button>
                </form>
                <p className='mt-3 text-left'><Link className='text-[#ff7101]' to='/login/'>Back to login</Link> </p>
            </div>
        </div>
    )
}

export default Forget