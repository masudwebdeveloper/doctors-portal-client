import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../../Home/Pages/Shared/Loading/Loading';
import CheckOut from './CheckOut';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    const booking = useLoaderData();
    const navigation = useNavigation();
    const { treatMent, price, slot, appointmentDate } = booking;
    if(navigation.state === "loading"){
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className="text-3xl">Payment for {treatMent}</h1>
            <p>Pay to <strong>${price}</strong> on {appointmentDate} time {slot}</p>
            <div className='w-96 mt-12'>
                <Elements stripe={stripePromise}>
                    <CheckOut
                        booking={booking}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;