import { useState } from "react"
import React from 'react'
import { useDispatch } from "react-redux"
import { login } from "../Store/AuthSlice"
import authService from "../AppWrite/Auth"
import { useNavigate, Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import CommonBtn from "./CommonBtn"
import Input from "./Input"

function SignUp() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState("");

    async function signup(data) {
        setError("")
        try {
            const session = await authService.createAccount(data);
            if (session) {
                const userCreated = await authService.getCurrentUser(userData);
                if (userCreated) {
                    dispatch(login(userCreated));
                    navigate("/");
                }
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit(signup)}>
                <Input label="Name" placeholder="Enter Your Name" type="text" {...register("Name"), {
                    required: true
                }} />
                <Input label="phoneNo." placeholder="Enter Your Number" type="number" {...register("mobileNum"), {
                    required: true
                }} />
                <Input label="email" placeholder="Enter Your email" type="email" {...register("email"), {
                    required: true
                }} />
                <Input type="password" placeholder="Enter Your password..." label="Password:" {...register("password"), {
                    required: true,
                }} />
                <CommonBtn type='submit' className='w-full'>
                    Sign In
                </CommonBtn>
            </form>
        </>
    )
}

export default SignUp
