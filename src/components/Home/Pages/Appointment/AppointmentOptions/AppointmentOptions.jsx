import React, { useEffect, useState } from 'react';
import Appointment from '../Appointment/Appointment';
import AppointmentOption from '../AppointmentOption/AppointmentOption';

const AppointmentOptions = () => {
    const [appointmentOptions, setAppointmentOptions] = useState([]);

    useEffect(()=>{
        fetch('appointmentOptions.json')
        .then(res => res.json())
        .then(data => setAppointmentOptions(data))
    },[])
    return (
        <section className='grid grid-cols-1 lg:grid-cols-3 gap-16 my-16'>
            {
                appointmentOptions.map(appointmentOption => <AppointmentOption
                appointmentOption={appointmentOption}
                ></AppointmentOption>)
            }
        </section>
    );
};

export default AppointmentOptions;