import { format } from 'date-fns';
import React from 'react';
import AppointmentOptions from '../AppointmentOptions/AppointmentOptions';

const AvailableAppointment = ({selectedDate}) => {
    return (
        <section className='my-16'>
            <p className='text-secondary font-bold text-center'>Availabe Appointment on {format(selectedDate, 'PP')}</p>
            <AppointmentOptions
                selectedDate={selectedDate}
            ></AppointmentOptions>
        </section>
    );
};

export default AvailableAppointment;