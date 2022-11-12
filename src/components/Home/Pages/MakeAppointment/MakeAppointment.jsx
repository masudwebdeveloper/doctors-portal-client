import React from 'react';
import appoinment from '../../../../assets/images/appointment.png'
import doctor from '../../../../assets/images/doctor.png'
import PrimaryButton from '../../../Button/PrimaryButton/PrimaryButton';

const MakeAppointment = () => {
    return (
        <div className="hero" style={{ backgroundImage: `url(${appoinment})` }}>
            <div className="hero-overlay"></div>
            <div className="hero-content p-0 flex-col lg:flex-row">
                <img alt='' src={doctor} className="w-1/2 -mt-32 hidden lg:block rounded-lg" />
                <div className='p-3'>
                    <p className="py-5 text-xl text-primary">Appointment</p>
                    <h1 className="text-4xl font-semibold text-base-100">Make an appointment Today</h1>
                    <p className="py-6 text-base-100">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <PrimaryButton>Get Appointment</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default MakeAppointment;