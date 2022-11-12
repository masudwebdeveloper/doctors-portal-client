import React from 'react';

const TestimonalCard = ({ card }) => {
    const { icon, name, describesion, address } = card;
    return (
        <section className='shadow-xl rounded-lg p-3 lg:p-10'>
            <p className='font-normal text-base'>{describesion}</p>
            <div className={`flex flex-row items-center mt-3 rounded-lg`}>
                <img className='mr-4 w-20 h-20 border-4 border-primary rounded-full' src={icon} alt="" />
                <div className='w-full'>
                    <h4 className='text-lg font-bold'>{name}</h4>
                    <p className='text-base font-normal'>{address}</p>
                </div>
            </div>
        </section>
    );
};

export default TestimonalCard;