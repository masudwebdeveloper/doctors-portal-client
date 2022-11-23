import React, { useContext } from 'react';
import { Link, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../../../contexts/AuthProvider';

const DisplayError = () => {
    const { logOut } = useContext(AuthContext);
    const error = useRouteError();
    const handleSignOut = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.error(error);
            })
    }
    return (
        <div className='flex flex-col justify-center items-center min-h-screen'>
            
                <span className='text-5xl -ml-20 font-bold'>4</span>
                <span className='w-10 h-10 border-8 border-lime-400 border-dotted animate-spin bg-gray-800 rounded-full inline'></span>
                <span className='text-5xl ml-20 font-bold'>4</span>
            
            <p>Sorry, an unexpected error has occurred.</p>
            <p className='text-red-600'>
                <i>{error.statusText || error.message}</i>
            </p>
            <h3 className='text-3xl'>Please <Link><button className='btn btn-outline btn-ghost' onClick={handleSignOut}>Sign Out</button></Link> and log back in</h3>
        </div>
    );
};

export default DisplayError;