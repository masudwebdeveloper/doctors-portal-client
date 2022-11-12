import React from 'react';
import quotes from '../../../../assets/icons/quote.svg'
import people1 from '../../../../assets/images/people1.png'
import people2 from '../../../../assets/images/people2.png'
import people3 from '../../../../assets/images/people3.png'
import TestimonalCard from './TestimonalCard';

const Testimonal = () => {
    const testimonalData = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            describesion: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            icon: people1,
            address: 'California'
        },
        {
            id: 2,
            name: 'Cavity Filling',
            describesion: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            icon: people2,
            address: 'California'
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            describesion: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            icon: people3,
            address: 'California'
        },
    ]
    return (
        <section>
            <div className='flex justify-between items-center my-20 '>
                <div>
                    <p className='text-xl font-bold text-primary'>Testimonial</p>
                    <h3 className='text-2xl lg:text-4xl font-normal'>What Our Patients Says</h3>
                </div>
                <img className='w-32 lg:w-48' src={quotes} alt="" />
            </div>
            <div className='flex flex-col lg:flex-row gap-6'>
                {
                    testimonalData.map(card => <TestimonalCard
                    key={card.id}
                    card={card}
                    ></TestimonalCard>)
                }
            </div>
        </section>
    );
};

export default Testimonal;