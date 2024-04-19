import React , {useState, useContext}from 'react'
import UserContext from '../context/UserContext'

function Profile() {

    // yaha hum data ko le rahe hai
    const {user} = useContext(UserContext)
    if (!user) return <> <h2>please login</h2> </>

    return (
        <>
        welcome{user.username}
        </>
    )
}

export default Profile
