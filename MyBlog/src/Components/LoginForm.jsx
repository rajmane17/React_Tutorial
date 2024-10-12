import React, { useState } from 'react'
import {useForm} from 'react-hook-form'
import {Link, useNavigate} from "react-router-dom"
import {useDispatch} from "react-redux"
import {Input, Button} from "./index.js"
import authService from "../AppWrite/Auth.js"
import { Login, logOut } from '../Store/AuthSlice.js' 

const LoginForm = () => {
  const {handleSubmit, register} = useForm();
  const Dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const submit = async (data) => {
    setError("");
    const session = await authService.login(data)
    if(session){
      const userData = await authService.getCurrentUser();
      if(userData){
        navigate("/");
        Dispatch(Login(userData))
      }
    }else{
      console.log("Appwrite :: login :: error");
      Dispatch(logOut());
    }
  }
  return (
    <form onSubmit={handleSubmit(submit)}>
      <div className='w-screen flex justify-center content-center h-screen'>
        <div className='w-38 h-58 rounded-sm bg-slate-400'>
          <h2>Login</h2>
          {error && <p>{error}</p>}
          <div>
            <Input type="email" placeholder="Enter Your Email here" label="Email:" {...register("email"),{
              required:true,
            }}/>
            <Input type="password" placeholder="Enter Your Password" label="Password" {...register("password"),{
              required:true,
            }}/>
            <Button type="submit">
              LogIn
            </Button>
          </div>
        </div>
        <h4>
          New User ? <Link to="/Signup">
          SignUp
          </Link>
        </h4>
      </div>
    </form>
  )
}

export default Login
