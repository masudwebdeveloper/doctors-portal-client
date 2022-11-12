import React from 'react';
import cavity from '../../../../assets/images/cavity.png'
import fluoride from '../../../../assets/images/fluoride.png'
import whitening from '../../../../assets/images/whitening.png'
import treatment from '../../../../assets/images/treatment.png'
import ServicesCard from './ServicesCard';

const ServicesCards = () => {
    const servicesData = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            describesion: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: fluoride
        },
        {
            id: 2,
            name: 'Cavity Filling',
            describesion: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: cavity
        },
        {
            id: 1,
            name: 'Teeth Whitening',
            describesion: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: whitening
        },
    ]
    return (
        <div className='mt-20'>
            <div className="hero bg-base-100">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-xl text-primary font-bold">Hello there</h1>
                        <p className="text-4xl font-normal py-3">Service We Provide</p>
                    </div>
                </div>
            </div>
            <div className='flex gap-6 flex-col lg:flex-row'>
                {
                    servicesData.map(service => <ServicesCard
                        key={service.id}
                        service={service}
                    ></ServicesCard>)
                }
            </div>
            <div className="hero bg-base-100 py-20">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={treatment} className="ml-10 mr-20 rounded-lg h-[576px] shadow-2xl" />
                    <div className=''>
                        <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                        <p className="py-6 text-base">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesCards;