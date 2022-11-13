import React, { useEffect, useState } from 'react';
import AppointmentOption from '../AppointmentOption/AppointmentOption';
import BookingModal from '../BookingModal/BookingModal';

const AppointmentOptions = ({selectedDate}) => {
    const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [option, setOption] = useState(null);

    useEffect(() => {
        fetch('appointmentOptions.json')
            .then(res => res.json())
            .then(data => setAppointmentOptions(data))
    }, [])
    return (
        <section >
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-16 my-16'>
                {
                    appointmentOptions.map(appointmentOption => <AppointmentOption
                        appointmentOption={appointmentOption}
                        key={appointmentOption._id}
                        setOption={setOption}
                    ></AppointmentOption>)
                }
            </div>
            {
                option &&
                <BookingModal
                    option={option}
                    selectedDate={selectedDate}
                    setOption={setOption}
                ></BookingModal>
            }
        </section>
    );
};

export default AppointmentOptions;