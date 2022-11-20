import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmedModal from '../../Home/Pages/Shared/ConfirmedModal/ConfirmedModal';

const ManageDoctors = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null);
    const closeModal = () =>{
        setDeletingDoctor(null)
    }

    
    const { data: doctors = [], refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/doctors', {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                const data = await res.json();
                return data;
            }
            catch (error) {
                console.error('managedoctors api fetching error', error);
            }
        }
    })

    const handleDeleteDoctor = doctor =>{
        fetch(`http://localhost:5000/doctors/${doctor._id}`,{
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data =>{
            if(data.deletedCount > 0){
                refetch();
                toast.success(`Doctor ${doctor.name} deleted successfully`);
            }
        })
    }
    return (
        <div>
            <h1 className="text-3xl my-5">Total doctors : {doctors?.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>sl no</th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors?.length > 0 &&
                            doctors.map((doctor, i) => <tr
                                className="hover"
                                key={doctor._id}
                            >
                                <th>{i + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="w-12 rounded-full">
                                            <img src={doctor?.image} alt='' />
                                        </div>
                                    </div>
                                </td>
                                <td>{doctor?.name}</td>
                                <td>{doctor?.email}</td>
                                <td>{doctor?.specialty}</td>
                                <td>
                                    <label onClick={()=> setDeletingDoctor(doctor)} htmlFor="confirmed-modal" className="btn btn-sm btn-error hover:text-white">Delete</label>
                                    
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingDoctor && <ConfirmedModal
                title={`Are you sure want to delete?`}
                message={`If you delete ${deletingDoctor?.name}. it never came back`}
                closeModal = {closeModal}
                successAction = {handleDeleteDoctor}
                modalData = {deletingDoctor}
                />
            }
        </div>
    );
};

export default ManageDoctors;