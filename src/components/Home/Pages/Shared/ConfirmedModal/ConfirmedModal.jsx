import React from 'react';

const ConfirmedModal = ({title, message, closeModal, successAction, modalData}) => {
    return (
        <div>
            <input type="checkbox" id="confirmed-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                        <label onClick={()=>successAction(modalData)} htmlFor="confirmed-modal" className="btn btn-sm">Delete</label>
                        <button onClick={closeModal} className='btn btn-outline btn-sm'>Cancel</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmedModal;