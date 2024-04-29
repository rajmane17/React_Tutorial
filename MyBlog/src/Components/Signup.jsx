import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import authService from '../AppWrite/Auth'
import { Login, logOut } from '../Store/AuthSlice'
import { useNavigate, Link, NavLink } from 'react-router-dom'
import { Input, Button } from "./index"
import { useForm } from 'react-hook-form'

function Signup() {

  const Navigate = useNavigate();
  const Dispatch = useDispatch();
  const [error, setError] = useState("");
  const {register, handleSubmit} = useForm()

  const SignUp = async(data) => {
    setError("")
    const acc_Created = await authService.createAccount(data)
    if(acc_Created){
      const userData = await authService.getCurrentUser(acc_Created);
      if(userData){
        Dispatch(Login(userData));
        Navigate("/");
      }
    }else{
      console.log("Appwrite :: createAccount :: error");
      Dispatch(logOut());
    }
  }
  return (
    <div className='w-full text-slate-900 flex flex-wrap content-center justify-end h-screen'>
      <div className='w-52 h-72 rounded-xl bg-slate-400'>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit(SignUp)}>
          <Input placeholder="Enter Your Full Name" label="Full Name : " type="text" {...register("FullName"),{required : true}}/>
          <Input placeholder="Enter Your Email" label="Email : " type="email" {...register("Email"),{required:true}}/>
          <Input placeholder="Enter Your Password" label="Password : " type="Password" {...register("Password"),{required:true}}/>
          <Input placeholder="Enter Your Number" label="Phone No. : " type="number" {...register("Number"),{required:true}}/>
          <Button type="submit">
            SignUp
          </Button>
        </form>
      </div>
    </div>
  )
}

export default Signup
