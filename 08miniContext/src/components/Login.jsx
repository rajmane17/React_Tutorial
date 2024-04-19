import React from 'react'
import { useState, useContext } from 'react'
import UserContext from '../context/UserContext'


function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    //Yaha hum data bhej rahe hai
    const {setUser} = useContext(UserContext)


    const handleSubmit = (e) => {
        e.preventDefault()
        setUser(username, password)
    }
  return (
    <>
      <h2>Login</h2>
      <input type="text"
      value={username}
      onChange={(e) => {
        setUsername(e.target.value)
      }}
       placeholder='Username' />

      <input type="text"
       value={password}
       onChange={(e)=> setPassword(e.target.value)}
       placeholder='Password' />
      <button onClick={handleSubmit}></button>
    </>
  )
}

export default Login
