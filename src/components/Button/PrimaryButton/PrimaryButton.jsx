import React from 'react';

const PrimaryButton = ({children}) => {
    return (
        <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary hover:from-pink-500 hover:to-yellow-500"><span className='bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600'>{children}</span></button>
    );
};

export default PrimaryButton;