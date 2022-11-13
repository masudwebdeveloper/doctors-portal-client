import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Login = () => {
   const { register, formState: { errors }, handleSubmit } = useForm();

   const handleSingUp = data => {
      console.log(data);
   }
   return (
      <div className='my-10 h-[500px] flex flex-col justify-center items-center'>
         <div className='lg:w-96 shadow-xl p-5 rounded-md '>
            <h1 className='text-xl font-normal text-accent text-center'>Login</h1>
            <form onSubmit={handleSubmit(handleSingUp)}>
               <label className="label"><span className="label-text">Email</span></label>
               <input name='email' type='email' className="input input-bordered w-full" {...register("email", { required: "Email Address is required" })} placeholder="First name" />
               {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
               <label className="label"><span className="label-text">Password</span></label>
               <input name='password' type='password' className="input input-bordered w-full" 
               {...register("password", { 
                  required: "Password is required",
                  minLength: {value: 6, message: "Password must be 6 charecter length longer"}
                  })} placeholder="First name" />
               {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
               <label className="label"><span className="label-text mb-5">Forgot Password?</span></label>
               <input className='w-full btn btn-accent text-base-100 text-xl p-2 rounded-md' type="submit" value="Submit" />
            </form>
            <p className=' text-center mt-4'>New to Doctor Portal?<Link to='/signup' className='text-secondary'>Create new account</Link></p>
            <div className="divider">OR</div>
            <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
         </div>
      </div>
   );
};

export default Login;