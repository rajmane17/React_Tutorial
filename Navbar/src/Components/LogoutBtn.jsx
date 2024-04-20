import React from 'react'
import { useState } from 'react'

function LogoutBtn() {

    function handleLogout () {
        console.log("Logged Out Succesfully");
    }
    
  return (
    <div>
      <button onClick={handleLogout}>LogoutBtn</button>
    </div>
  )
}

export default LogoutBtn
