import React from 'react';
import image from '../../../../assets/images/chair.png'
import InfoCard from './InfoCard';
import clock from '../../../../assets/icons/clock.svg'
import marker from '../../../../assets/icons/marker.svg'
import phone from '../../../../assets/icons/phone.svg'
import PrimaryButton from '../../../Button/PrimaryButton/PrimaryButton';


const Banner = () => {
    const infoData = [
        {
            id: 1,
            name: 'Opening Hours',
            describesion: 'Morining 9:00 am - 10:00 pm',
            icon: clock,
            background: 'bg-gradient-to-r from-sky-500 to-indigo-500'
        },
        {
            id: 2,
            name: 'Visit Our Location',
            describesion: 'Godhora, KadimChilan 6430, Lalpur, Natore',
            icon: marker,
            background: 'bg-gradient-to-r from-accent to-accent'
        },
        {
            id: 3,
            name: 'Contact Me',
            describesion: '+880 179 682951',
            icon: phone,
            background: 'bg-gradient-to-r from-secondary to-primary'
        },
    ]
    return (
        <div className="hero" style={{ backgroundImage: `url("https://i.ibb.co/S0RpQ3j/chair.png")` }}>
            <div className="hero-overlay bg-base-100 bg-opacity-95"></div>
            <div>
                <div className="hero-content flex-col lg:flex-row-reverse max-w-full px-2 lg:px-10 lg:py-20">
                    <img alt='' src={image} className="w-full lg:w-[700px] rounded-lg shadow-2xl" />
                    <div className='lg:px-10'>
                        <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                        <PrimaryButton>Get Started</PrimaryButton>

                    </div>
                </div>
                {/* for Info card */}
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
                    {
                        infoData.map(card => <InfoCard
                        key={card.id}
                        card={card}
                        ></InfoCard>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Banner;