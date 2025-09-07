import React, { useEffect, useState } from 'react'
import Dealer from '../components/profile/Dealer'
import UpdatePassword from '../components/profile/UpdatePassword';
import axios from 'axios';

const MyProfile = () => {
    const [userId, setUserId] = useState('');
    const [avatar, setAvatar] = useState(null);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');
    const [phone, setPhone] = useState('');
    const [location, setLocation] = useState('');
    const [website, setWebsite] = useState('');
    const [facebook, setFacebook] = useState('');
    const [instagram, setInstagram] = useState('');
    const [twitter, setTwitter] = useState('');
    const [skype, setSkype] = useState('');

    const handleMyProfileUpdate = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/api/auth/update-profile', {
                userId, avatar, firstName, lastName, email, description, phone, location, website, facebook, instagram, twitter, skype
            });
            console.log("✅ Profile updated:", response.data);
        }
        catch (error) {
            console.error("Error updating profile:", error);
        }
    }

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user?.id) {
            setUserId(user.id);
            setEmail(user.email);
        }
    }, []);

    return (
        <div>
            <Dealer />
            {/* Update Info */}
            <form action="" className='mb-[70px]' onSubmit={handleMyProfileUpdate}>
                {/* Profile setting */}
                <div className='mb-[70px]'>
                    <h2 className='text-[26px] pl-2 mb-[25px] border-l-2 border-[#d01818]'>Profile settings</h2>
                    <div class="flex gap-[90px]">
                        <h3 className='text-[#1C1818] text-[18px] font-medium'>Avatar:</h3>
                        <div class="avatar">
                            <div class="max-w-[158px] w-full mb-3">
                                <img loading="lazy" height="138" className='w-full rounded-[8px]' src="" alt="avatar" />
                            </div>
                            <div class="choose-box">
                                <p className='text-[#433D3D] text-[18px] mb-3'>Upload a new Avatar</p>
                                <div class="mb-5 rounded-[5px] border border-[#CECECE] bg-transparent m-0 text-sm py-4 px-6">
                                    <label htmlFor='upload' className='rounded-[6px] bg-white text-md py-[6px] px-4 shadow-[0px_4px_24px_0px_rgba(0,0,0,0.08)] cursor-pointer mr-2'><i class="fas fa-cloud-upload-alt mr-2"></i> Choose File</label>
                                    <input
                                        type="file"
                                        id="upload"
                                        class="hidden"
                                        name="profile_image"
                                        onChange={(e) => setAvatar(e.target.files[0])}
                                    />
                                    <span className='text-sm text-[#83827f]'>HOUSE WARMING.pptx</span>
                                </div>
                                <p class="text-sm font-medium text-[#433D3D]">PNG, JPG, SVG dimension (400 * 400) max file not more then size 4 mb</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* User information */}
                <div className='mb-[70px]'>
                    <h2 className='text-[26px] pl-2 mb-[25px] border-l-2 border-[#d01818]'>User information</h2>
                    <div className='p-8 bg-white shadow-[0px_4px_24px_0px_rgba(0,0,0,0.08)] rounded-[8px] grid grid-cols-2 gap-6'>
                        {/* first name */}
                        <div>
                            <label htmlFor="first-name" className='block mb-2 font-semibold text-md'>First name<span>*</span></label>
                            <input
                                type="text"
                                class="h-12 px-4 rounded-[4px] border border-[#e9e9e9] text-sm outline-none w-full"
                                name="first_name" id="first-name"
                                value={firstName}
                                placeholder="First name"
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>
                        {/* Last name */}
                        <div>
                            <label htmlFor='last-name' className='block mb-2 font-semibold text-md'>Last name<span>*</span></label>
                            <input
                                type="text"
                                class="h-12 px-4 rounded-[4px] border border-[#e9e9e9] text-sm outline-none w-full"
                                name="last-name"
                                id="last-name"
                                value={lastName}
                                placeholder="First name"
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                        {/* Description */}
                        <div>
                            <label for="description" className='block mb-2 font-semibold text-md'>Description<span>*</span></label>
                            <textarea
                                name="description"
                                id="description"
                                class="h-[120px] p-4 rounded-[4px] border border-[#e9e9e9] text-sm outline-none w-full"
                                value={description}
                                placeholder='Description'
                                onChange={(e) => setDescription(e.target.value)}
                            ></textarea>
                        </div>
                        {/* Phone */}
                        <div>
                            <label for="phone" className='block mb-2 font-semibold text-md'>Phone</label>
                            <input
                                type="text"
                                placeholder='Phone'
                                id='phone'
                                name='phone'
                                value={phone}
                                class="h-12 px-4 rounded-[4px] border border-[#e9e9e9] text-sm outline-none w-full"
                                onChange={(e) => { setPhone(e.target.value) }}
                            />
                        </div>
                        {/* email address */}
                        <div>
                            <label for="email" className='block mb-2 font-semibold text-md'>Email address</label>
                            <input
                                type="text"
                                placeholder='email address'
                                name='email'
                                id="email"
                                readOnly
                                value={email}
                                class="h-12 px-4 rounded-[4px] border border-[#e9e9e9] text-sm outline-none w-full"
                            />
                        </div>
                        {/* location */}
                        <div>
                            <label for="location" className='block mb-2 font-semibold text-md'>Location</label>
                            <input
                                type="text"
                                placeholder='Location'
                                id='location'
                                name='location'
                                value={location}
                                class="h-12 px-4 rounded-[4px] border border-[#e9e9e9] text-sm outline-none w-full"
                                onChange={(e) => setLocation(e.target.value)}
                            />
                        </div>
                        {/* website */}
                        <div>
                            <label for="website" className='block mb-2 font-semibold text-md'>Website</label>
                            <input
                                type="text"
                                placeholder='Website'
                                id='website'
                                name='website'
                                value={website}
                                class="h-12 px-4 rounded-[4px] border border-[#e9e9e9] text-sm outline-none w-full"
                                onChange={(e) => setWebsite(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                {/* Social profile */}
                <div className='mb-[70px]'>
                    <h2 className='text-[26px] pl-2 mb-[25px] border-l-2 border-[#d01818]'>Social Profile Link</h2>
                    <div className='p-8 bg-white shadow-[0px_4px_24px_0px_rgba(0,0,0,0.08)] rounded-[8px] grid grid-cols-2 gap-6'>
                        {/* Last name */}
                        <div>
                            <label htmlFor='facebook' className='block mb-2 font-semibold text-md'>Facebook</label>
                            <input
                                type="text"
                                class="h-12 px-4 rounded-[4px] border border-[#e9e9e9] text-sm outline-none w-full"
                                name="facebook"
                                id="facebook"
                                value={facebook}
                                placeholder="www.facebook.com/username"
                                onChange={(e) => setFacebook(e.target.value)}
                            />
                        </div>
                        {/* Description */}
                        <div>
                            <label for="instagram" className='block mb-2 font-semibold text-md'>Instagram</label>
                            <input
                                type='text'
                                name="instagram"
                                id="instagram"
                                class="h-12 p-4 rounded-[4px] border border-[#e9e9e9] text-sm outline-none w-full"
                                value={instagram}
                                placeholder='www.instagram.com/username'
                                onChange={(e) => setInstagram(e.target.value)}
                            />
                        </div>
                        {/* Phone */}
                        <div>
                            <label for="twitter" className='block mb-2 font-semibold text-md'>Twitter</label>
                            <input
                                type="text"
                                placeholder='www.twitter.com/username'
                                id='twitter'
                                name='twitter'
                                value={twitter}
                                class="h-12 px-4 rounded-[4px] border border-[#e9e9e9] text-sm outline-none w-full"
                                onChange={(e) => setTwitter(e.target.value)}
                            />
                        </div>
                        {/* email address */}
                        <div>
                            <label for="skype" className='block mb-2 font-semibold text-md'>Skype</label>
                            <input
                                type="text"
                                placeholder='@skype.me/username'
                                name='skype'
                                id='skype'
                                value={skype}
                                class="h-12 px-4 rounded-[4px] border border-[#e9e9e9] text-sm outline-none w-full"
                                onChange={(e) => setSkype(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                {/* save and update button */}
                <div className='flex gap-3'>
                    <button type='submit' className='px-5 py-3 bg-[#d01818] text-white rounded-[4px]'>Save & Update</button>
                    <button type='button' className='px-5 py-3 bg-[#d01818] text-white rounded-[4px]'>Reset all</button>
                </div>
            </form>
            {/* Update password */}
            <UpdatePassword />
        </div>
    )
}

export default MyProfile