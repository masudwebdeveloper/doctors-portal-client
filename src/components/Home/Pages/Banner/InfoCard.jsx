import React from 'react';

const InfoCard = ({card}) => {
    const {name, describesion, background, icon} = card;
    return (
        <div className={`${background} flex flex-col lg:flex-row items-center p-6 rounded-lg`}>
            <img className='mr-4' src={icon} alt="" />
            <div>
                <h4 className='text-lg font-bold text-white'>{name}</h4>
                <p className='text-base font-normal text-white'>{describesion}</p>
            </div>
        </div>
    );
};

export default InfoCard;