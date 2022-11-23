import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../../contexts/AuthProvider';

const BookingModal = ({ option, selectedDate, setOption, refetch }) => {
    const { user } = useContext(AuthContext)
    const { _id, name, slots, price } = option; // option is a appointmentoption
    const date = format(selectedDate, "PP")


    const handleAppointment = (event) => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const patientName = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const booking = {
            bookingId: _id,
            appointmentDate: date,
            slot,
            treatMent: name,
            patient: patientName,
            email,
            phone,
            price,
        }
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Booking Confirmed')
                    setOption(null)
                    refetch();
                } else {
                    toast.error(data.message)
                    setOption(null)

                }
            })
            .catch(error => {
                console.error('Booking post Error: ', error);
            })

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
                        <input name='name' type="text" placeholder="your name" className="input input-bordered w-full" required />
                        <input name='email' defaultValue={user?.email} type="email" placeholder="your email" disabled className="input input-bordered w-full" required />
                        <input name='phone' min='11' max='15' type="text" placeholder="your phone number" className="input input-bordered w-full" required />
                        <input type="submit" value="Submit" className='w-full btn-accent py-2 font-bold text-2xl rounded-lg' required />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;