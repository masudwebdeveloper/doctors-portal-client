import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddDoctors = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    const { data: specialties, isLoading } = useQuery({
        queryKey: ['specialties'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/appointmentSpecialty')
            const data = await res.json();
            return data;
        }
    })
    const navigate = useNavigate();
    const handleAddDoctor = data => {
        const email = data.email;
        const name = data.name;
        const specialty = data.specialty;
        const image = data.image[0];

        const formData = new FormData();
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url,{
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imageData => {
            if(imageData.success){
                const imageUrl = imageData.data.url;
                //save the doctor of database
                const doctorInfo = {
                    name,
                    email,
                    specialty,
                    image: imageUrl,
                }
                fetch('http://localhost:5000/doctors',{
                    method: 'POST',
                    headers:{
                        'content-type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(doctorInfo)
                })
                .then(res => res.json())
                .then(data =>{
                    if(data.acknowledged){
                        toast.success(`Doctor ${name} added successfull`)
                        navigate('/dashboard/managedoctors')
                    }
                })
                .catch(err =>{
                    console.error('doctors add error', err);
                })
                
            }
        })
        .catch(err => console.error(err))
    }
    return (
        <div className='mx-auto w-1/2'>
            <h1 className="text-5xl">Add doctors</h1>
            <div className='lg:w-96 shadow-xl p-5 rounded-md relative'>
                <h1 className='text-xl font-normal text-accent text-center'>Add a Doctor</h1>
                <form onSubmit={handleSubmit(handleAddDoctor)}>
                    <label className="label"><span className="label-text">Name</span></label>
                    <input name='name' type='text' className="input input-bordered w-full" placeholder="Your Name" {...register('name', { required: 'please enter your name' })} />
                    {errors?.name && <p className='text-red-600'>{errors?.name?.message}</p>}
                    <label className="label"><span className="label-text">Email</span></label>
                    <input name='email' type='email' className="input input-bordered w-full" placeholder="Your Email Address" {...register('email', { required: "Email Address is required" })} />
                    {errors?.email && <p className='text-red-600'>{errors?.email?.message}</p>}
                    <label className="label"><span className="label-text">Specialty</span></label>
                    <select {...register('specialty')} className="select select-bordered w-full mt-5">
                        {
                            specialties.map(specialty => <option
                                key={specialty._id}
                                value={specialty.name}
                            >{specialty.name}</option>)
                        }
                    </select>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Pick a file</span>
                        </label>
                        <input type="file" className="file-input file-input-bordered w-full" {...register('image', { required: 'Please pick a file' })} />
                        {errors?.file && <p className='text-red-600'>{errors?.file?.message}</p>}
                    </div>
                    <input className='mt-5 w-full btn btn-accent text-base-100 text-xl p-2 rounded-md' type="submit" value="Add Doctor" />

                </form>

            </div>
        </div>
    );
};

export default AddDoctors;