import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ option, selectedDate,setOption }) => {
    const { name, slots } = option; // option is a appointmentoption
    const date = format(selectedDate, "PP")
    let d = new Date(241654564555);
    d.getDate()
    const today = format(d, 'PP')

    const handleAppointment = (event) => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const patientName = form.name.value;
        const email =form.email.value;
        const phone = form.phone.value;

        const booking = {
            appoinmentDate: date,
            slot,
            treatMent: name,
            patient: patientName,
            email,
            phone,
        }
        console.log(booking);
        setOption(null)

    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleAppointment} className='grid grid-cols-1 gap-y-5 mt-10'>
                        <input name='date' type="text" value={date} disabled className="input input-bordered w-full" />
                        <select name='slot' className="select select-bordered w-full">
                            {
                                slots.map((slot, index) => <option key={index} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" placeholder="your name" className="input input-bordered w-full" required/>
                        <input name='email' type="email" placeholder="your email" value={today} className="input input-bordered w-full" required/>
                        <input name='phone' type="text" placeholder="your phone number" className="input input-bordered w-full" required/>
                        <input type="submit" value="Submit" className='w-full btn-accent py-2 font-bold text-2xl rounded-lg' />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;