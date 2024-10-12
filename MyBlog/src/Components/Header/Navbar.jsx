import React from 'react'
import {Logoutbtn} from "../index"
import {Link} from "react-router-dom"
import {useSelector} from "react-redux"

const Navbar = () => {

  const authstatus = useSelector((state) => {
    state.auth.status
  })

  const Navitems = [
    {
      name:"Home",
      url:"/",
      active:authstatus,
    },{
      name:"AllPosts",
      url:"/AllPosts",
      active:authstatus,
    },{
      name:"AllPosts",
      url:"/AllPosts",
      active:authstatus,
    },{
      name:"Add-Post",
      url:"/AddPost",
      active:authstatus,
    },{
      name:"Login",
      url:"/Login",
      active: !authstatus,
    },{
      name:"Signup",
      url:"/Signup",
      active: !authstatus,
    }
  ]
  return (
    <nav>
      <div className='w-full py-2 items-center px-1 bg-slate-800 '>
        {
          Navitems.map((item) => (
            <Link to={item.url} key={item.name}>
            <Button>
              {item.name}
            </Button>
            </Link>
          ))
        }
        {
          authstatus ? (
            <>
            <Logoutbtn />
            </>
          ): null
        }
      </div>
    </nav>
  )
}

export default Navbar
