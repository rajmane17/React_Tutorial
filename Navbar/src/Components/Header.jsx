import React from 'react'
import {useNavigate, Link}from "react-router-dom"
import Logo from './Logo';
import LogoutBtn from './LogoutBtn';

function Header() {
    
    const authStatus = true;
    const navigate = useNavigate()
    
    const navItems = [
        {
            name:"Home",
            url:"/",
            active: authStatus,
        },
        {
            name:"addPost",
            url:"/addPost",
            active: authStatus,
        },
        {
            name: "AllPost",
            url:"/AllPost",
            active: authStatus,
        },
        {
            name:"Login",
            url:"/Login",
            active: !authStatus,
        },
        {
            name:"signUp",
            url:"/signUp",
            active: !authStatus
        }
    ]
  return (
    <header>
      <nav>
        <div>
            <Link to="/">
            <Logo />
            </Link>
        </div>
        <div>
            <ul>
            {
                navItems.map((item) => (
                    item.active ? (
                        <li key={item.name}>
                            <button onClick={() => {navigate(item.url)}}>{item.name}</button>
                        </li>
                    ): null
                ))
            }
            {
                authStatus && 
                <li>
                    <LogoutBtn />
                </li>
            }
            </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
