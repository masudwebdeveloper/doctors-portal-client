import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignUp = () => {
   const { register, handleSubmit, formState: { errors } } = useForm();

   const handleSingUp = data => {
      console.log(data.password);
   }
   return (
      <div className='my-10 h-[500px] flex flex-col justify-center items-center'>
         <div className='lg:w-96 shadow-xl p-5 rounded-md '>
            <h1 className='text-xl font-normal text-accent text-center'>Sign Up</h1>
            <form onSubmit={handleSubmit(handleSingUp)}>
               <label className="label"><span className="label-text">Name</span></label>
               <input name='name' type='text' className="input input-bordered w-full" placeholder="Your Name" {...register('name', { required: 'please enter your name' })} />
               {errors?.name && <p className='text-red-600'>{errors?.name?.message}</p>}
               <label className="label"><span className="label-text">Email</span></label>
               <input name='email' type='email' className="input input-bordered w-full" placeholder="Your Email Address" {...register('email', { required: "Email Address is required" })} />
               {errors?.email && <p className='text-red-600'>{errors?.email?.message}</p>}
               <label className="label"><span className="label-text">Password</span></label>
               <input name='password' type='password' className="input input-bordered w-full" placeholder="Your Password" {...register('password', {
                  required: "Password is required",
                  minLength: { value: 6, message: "Password must be 6 character long" },
                  pattern: { value: /(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z])/, message: 'Password to be Strength' }

               })} />
               {errors?.password && <p className='text-red-600'>{errors?.password?.message}</p>}
               <input className='mt-5 w-full btn btn-accent text-base-100 text-xl p-2 rounded-md' type="submit" value="SignUp" />
            </form>
            <p className=' text-center mt-4'>You have an already Account! <Link to='/login' className='text-secondary'>Log in</Link></p>
            <div className="divider">OR</div>
            <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
         </div>
      </div>
   );
};

export default SignUp;