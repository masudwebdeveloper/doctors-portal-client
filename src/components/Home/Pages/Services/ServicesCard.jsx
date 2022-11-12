import React from 'react';

const ServicesCard = ({ service }) => {
    const { name, describesion, icon } = service;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={icon} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{describesion}</p>
            </div>
        </div>
    );
};

export default ServicesCard;