import React, { useState } from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AppointmentOptions from '../AppointmentOptions/AppointmentOptions';
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';


const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <div>
            <AppointmentBanner
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            ></AppointmentBanner>
            <AvailableAppointment
                selectedDate={selectedDate}
            ></AvailableAppointment>
            <AppointmentOptions></AppointmentOptions>
        </div>
    );
};

export default Appointment;