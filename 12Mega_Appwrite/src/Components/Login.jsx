import React from 'react'
import { login as storeLogin } from "../Store/AuthSlice"
import { useForm } from "react-hook-form"
import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import CommonBtn from "./CommonBtn"
import Input from "./Input"
import { useDispatch } from "react-redux"
import authService from '../AppWrite/Auth'
import Logo from "./Logo"

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const login = async (data) => {
    setError("");
    try {
      const session = await authService.login(data)
      if (session) {
        const userData = await authService.getCurrentUser()
        if (userData) {
          dispatch(storeLogin(userData))
          navigate("/");
        }
      }
    } catch (error) {
      setError(error.message)
    }
  }
  return (
    <div
      className='flex items-center justify-center w-full'
    >
      <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
        <p className="mt-2 text-center text-base text-black/60">
          Don&apos;t have any account?&nbsp;
          <Link
            to="/signup"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign Up
          </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit={handleSubmit(login)}>
          <Input type="email" label="Email :" placeholder="Enter your email...." {...register("email"), {
            required:true,
          }}/>
          <Input type="password" placeholder="Enter Your password..." label="Password:" {...register("password"), {
            required:true,
          }}/>
          <CommonBtn type='submit' className='w-full'>
            Sign In
          </CommonBtn>
        </form>
      </div>
    </div>
  )
}

export default Login
