import { useQuery } from '@tanstack/react-query';
import { parseISO,format } from 'date-fns';
import React, { useState } from 'react';
import AppointmentOption from '../AppointmentOption/AppointmentOption';
import BookingModal from '../BookingModal/BookingModal';

const AppointmentOptions = ({ selectedDate }) => {
    const [option, setOption] = useState(null);
    const date = format(selectedDate, "PP");

    const { data: appointmentOptions = [], refetch, isLoading } = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/appointmentOptions?date=${date}`)
            const data = await res.json()
            return data
        }
    })

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
                    refetch={refetch}
                ></BookingModal>
            }
        </section>
    );
};

export default AppointmentOptions;