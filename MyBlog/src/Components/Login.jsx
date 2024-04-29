import React, { useState } from 'react'
import {useForm} from 'react-hook-form'
import {Link, Navlink, useNavigate} from "react-router-dom"
import {useDispatch} from "react-redux"
import {Input, Button} from "./index.js"
import authService from "../AppWrite/Auth.js"
import { Login } from '../Store/AuthSlice.js' 

const Login = () => {
  const {handleSubmit, register} = useForm();
  const Dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState(true);

  const submit = async (data) => {
    setError("");
    const session = await authService.login(data)
    if(session){
      const userData = await authService.getCurrentUser();
    }
    if(userData){
      navigate("/");
      Dispatch(Login(userData))
    }
  }
  return (
    <form>
      <div className='w-screen flex justify-center content-center h-screen'>
        <div className='w-38 h-58 rounded-sm bg-slate-400'>
          <h2>Login</h2>
          <div>
            <Input />
            <Input />
            <Button />
          </div>
        </div>
      </div>
    </form>
  )
}

export default Login
