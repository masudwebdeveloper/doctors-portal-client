import { format } from 'date-fns';
import React from 'react';

const AvailableAppointment = ({selectedDate}) => {
    return (
        <section className='my-16'>
            <p className='text-secondary font-bold text-center'>Availabe Appointment on {format(selectedDate, 'PP')}</p>
        </section>
    );
};

export default AvailableAppointment;