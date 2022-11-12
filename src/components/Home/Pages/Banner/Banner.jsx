import React from 'react';
import image from '../../../../assets/images/chair.png'
import { FaClock, FaPhone } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';


const Banner = () => {
    return (
        <div className="hero" style={{ backgroundImage: `url("https://i.ibb.co/S0RpQ3j/chair.png")` }}>
            <div className="hero-overlay bg-base-100 bg-opacity-95"></div>
            <div>
                <div className="hero-content flex-col lg:flex-row-reverse max-w-full px-2 lg:px-10 lg:py-20">
                    <img alt='' src={image} className="w-full lg:w-[700px] rounded-lg shadow-2xl" />
                    <div className='lg:px-10'>
                        <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                        <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary hover:from-pink-500 hover:to-yellow-500"><span className='bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600'>Get Started</span></button>

                    </div>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
                    {/* right side */}
                    <div className='bg-gradient-to-r from-sky-500 to-indigo-500 flex items-center px-3 py-6 rounded-lg'>
                        <FaClock className='text-6xl text-white mr-5'></FaClock>

                        <div>
                            <h4 className='text-lg font-bold text-white'>Opening Hours</h4>
                            <p className='text-base font-normal text-white'>Lorem Ipsum is simply dummy text of the pri</p>
                        </div>
                    </div>
                    {/* middle */}
                    <div className='bg-gradient-to-r from-accent to-accent flex items-center px-3 py-6 rounded-lg'>
                        <MdLocationOn className='text-6xl text-white mr-5'></MdLocationOn>
                        <div>
                            <h4 className='text-lg font-bold text-white'>Visit our location</h4>
                            <p className='text-base font-normal text-white'>Brooklyn, NY 10036, United States</p>
                        </div>
                    </div>
                    {/* left side */}
                    <div className='bg-gradient-to-r from-secondary to-primary flex items-center px-3 py-6 rounded-lg'>
                        <FaPhone className='text-6xl text-white mr-5'></FaPhone>
                        <div>
                            <h4 className='text-lg font-bold text-white'>Contact us now</h4>
                            <p className='text-base font-normal text-white'>+000 123 456789</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;