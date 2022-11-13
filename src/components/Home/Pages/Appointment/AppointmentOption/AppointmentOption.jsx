import React from 'react';
import PrimaryButton from '../../../../Button/PrimaryButton/PrimaryButton';

const AppointmentOption = ({appointmentOption}) => {
    const {_id, name, slots} = appointmentOption;
    return (
        <div className="card shadow-xl">
            <div className="card-body">
                <h2 className="text-2xl text-center font-semibold">{name}</h2>
                <p className='text-center'>{slots.length > 0 ? slots[0] : 'Try Another day'}</p>
                <p className='text-center'>{slots.length} {slots.length > 1 ? 'Spaces' : 'Space' } Available</p>
                <div className="card-actions justify-center">
                    <PrimaryButton><span className='duration-200 hover:text-base-100 font-bold'>
                    BOOK APPOINTMENT
                    </span>
                    </PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;