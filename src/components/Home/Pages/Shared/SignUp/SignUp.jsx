import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../../contexts/AuthProvider';
import useToken from '../../../../../hooks/useToken/useToken';

const SignUp = () => {
   const [passwordShow, setPasswordShow] = useState();
   const [signUpError, setSignUpError] = useState('')
   const { register, handleSubmit, formState: { errors } } = useForm();
   const { createUser, updateUser } = useContext(AuthContext);
   const [createUserEmail, setCreateUserEmail] = useState('')
   const [token] = useToken(createUserEmail)
   const navigate = useNavigate();
    if(token){
      navigate('/')
    }
   const handleSingUp = data => {
      setSignUpError('');
      createUser(data.email, data.password)
         .then(result => {
            const user = result.user;
            console.log(user);
            const userInfo = {
               displayName: data.name
            }
            updateUser(userInfo)
               .then(() => {
                  saveUser(data.name, data.email)
               })
               .catch(error => console.error('update error', error))

         })
         .catch(err => {
            setSignUpError(err)
            console.error('signupError', err)
         })
   }

   const saveUser = (name, email) => {
      const user = { name, email };
      fetch('http://localhost:5000/users', {
         method: 'POST',
         headers: {
            'content-type': 'application/json'
         },
         body: JSON.stringify(user)
      })
         .then(res => res.json())
         .then(data => {
            console.log(data);
            setCreateUserEmail(email)
         })
         .catch(err => {
            console.error('saveuser error', err);
         })
   }


   return (
      <div className='my-10 h-[500px] flex flex-col justify-center items-center'>
         <div className='lg:w-96 shadow-xl p-5 rounded-md relative'>
            <h1 className='text-xl font-normal text-accent text-center'>Sign Up</h1>
            <form onSubmit={handleSubmit(handleSingUp)}>
               <label className="label"><span className="label-text">Name</span></label>
               <input name='name' type='text' className="input input-bordered w-full" placeholder="Your Name" {...register('name', { required: 'please enter your name' })} />
               {errors?.name && <p className='text-red-600'>{errors?.name?.message}</p>}
               <label className="label"><span className="label-text">Email</span></label>
               <input name='email' type='email' className="input input-bordered w-full" placeholder="Your Email Address" {...register('email', { required: "Email Address is required" })} />
               {errors?.email && <p className='text-red-600'>{errors?.email?.message}</p>}
               <label className="label"><span className="label-text">Password</span></label>
               <input name='password' type={passwordShow ? 'text' : 'password'} className="input input-bordered w-full" placeholder="Your Password" {...register('password', {
                  required: "Password is required",
                  minLength: { value: 6, message: "Password must be 6 character long" },
                  pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/, message: 'Password must be Uppercase, number & special character' }

               })} />
               {errors?.password && <p className='text-red-600'>{errors?.password?.message}</p>}
               <input className='mt-5 w-full btn btn-accent text-base-100 text-xl p-2 rounded-md' type="submit" value="SignUp" />
               {
                  signUpError && <p className='text-red-600 text-lg'>{signUpError}</p>
               }
            </form>
            <button onClick={() => setPasswordShow(!passwordShow)}>
               {
                  passwordShow ?
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 absolute block top-[265px] right-[30px]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                     </svg>
                     :
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6  absolute block top-[265px] right-[30px]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                     </svg>
               }
            </button>
            <p className=' text-center mt-4'>You have an already Account! <Link to='/login' className='text-secondary'>Log in</Link></p>
            <div className="divider">OR</div>
            <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
         </div>
      </div>
   );
};

export default SignUp;