import React from 'react'
import Button from "../Button"
import {useDispatch}from "react-redux"
import authservice from "../../AppWrite/Auth"
import { logOut } from '../../Store/AuthSlice';

function Logoutbtn() {
  const dispatch = useDispatch();
  
  const handleLogOut = () => {
    authservice.signOut().then(() => {
      dispatch(logOut())
    })
  }
  return (
    <div>
      <Button onClick={handleLogOut}>
        LogOut
      </Button>
    </div>
  )
}

export default Logoutbtn
