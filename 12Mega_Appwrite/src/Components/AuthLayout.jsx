import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'

export default function Protected({ children, authentication = true }) {
    const navigate = useNavigate();
    const authStatus = useSelector(state => state.auth.status)
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        if (authStatus == true) {
            navigate("/");
        } else if (authStatus == false) {
            navigate("/login");
        }
        setLoader(false)
    }, [authStatus, navigate, authentication])
    return
    {
        loader ? <h1>Loading...</h1> : <>{children}</>
    }

}


