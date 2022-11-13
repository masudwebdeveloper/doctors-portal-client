import React from 'react';
import { DayPicker } from 'react-day-picker';
import image from '../../../../../assets/images/chair.png'

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
    return (
        <div className="hero" style={{ backgroundImage: `url("https://i.ibb.co/S0RpQ3j/chair.png")` }}>
            <div className="hero-overlay bg-base-100 bg-opacity-95"></div>
            <div>
                <div className="hero-content flex-col lg:flex-row-reverse px-0 lg:px-10 lg:py-20">
                    <img alt='' src={image} className="w-full lg:w-2/5 rounded-lg shadow-2xl" />
                    <div className=''>
                        <DayPicker
                            mode='single'
                           selected={selectedDate}
                            onSelect={setSelectedDate}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;