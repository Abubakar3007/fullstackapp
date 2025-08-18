import React, { useState } from 'react';
import axios from 'axios';
const UpdatePassword = () => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [showOldPassword, setShowOldPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handlePasswordUpdate = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/api/auth/update-password', {
                oldPassword,
                newPassword
            });
        }
        catch (error) {

        }
    }

    return (
        <div>
            <h2 className='text-[26px] pl-2 mb-[25px] border-l-2 border-[#d01818]'>Update Password</h2>
            <form onSubmit={handlePasswordUpdate}>
                <div className='flex gap-6 mb-6'>
                    {/* Old password */}
                    <div className='flex-1'>
                        <label htmlFor='old-password' className='block mb-2 font-semibold text-md'>Old Password</label>
                        <div className='relative'>
                            <input
                                type={showOldPassword ? 'text' : 'password'}
                                className="h-12 px-4 rounded-[4px] border border-[#e9e9e9] text-sm outline-none w-full"
                                id="old-password"
                                value={oldPassword}
                                onChange={(e) => setOldPassword(e.target.value)}
                            />
                            <button type="button" className='absolute -translate-y-1/2 top-1/2 right-4' onClick={() => setShowOldPassword(prev => !prev)}>
                                {showOldPassword ? <i className="fa-regular fa-eye"></i> : <i className="fa-regular fa-eye-slash"></i>}
                            </button>
                        </div>
                    </div>

                    {/* New password */}
                    <div className='flex-1'>
                        <label htmlFor='new-password' className='block mb-2 font-semibold text-md'>New Password</label>
                        <div className='relative'>
                            <input
                                type={showNewPassword ? 'text' : 'password'}
                                className="h-12 px-4 rounded-[4px] border border-[#e9e9e9] text-sm outline-none w-full"
                                id="new-password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                            />
                            <button type="button" className='absolute -translate-y-1/2 top-1/2 right-4' onClick={() => setShowNewPassword(prev => !prev)}>
                                {showNewPassword ? <i className="fa-regular fa-eye"></i> : <i className="fa-regular fa-eye-slash"></i>}
                            </button>
                        </div>
                    </div>

                    {/* Confirm password */}
                    <div className='flex-1'>
                        <label htmlFor='confirm-password' className='block mb-2 font-semibold text-md'>Confirm Password</label>
                        <div className='relative'>
                            <input
                                type={showConfirmPassword ? 'text' : 'password'}
                                className="h-12 px-4 rounded-[4px] border border-[#e9e9e9] text-sm outline-none w-full"
                                id="confirm-password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                            <button type="button" className='absolute -translate-y-1/2 top-1/2 right-4' onClick={() => setShowConfirmPassword(prev => !prev)}>
                                {showConfirmPassword ? <i className="fa-regular fa-eye"></i> : <i className="fa-regular fa-eye-slash"></i>}
                            </button>
                        </div>
                    </div>
                </div>

                <button type='submit' className='px-5 py-3 bg-[#d01818] text-white rounded-[4px]'>
                    Update Password
                </button>
            </form>
        </div>
    );
};

export default UpdatePassword;
