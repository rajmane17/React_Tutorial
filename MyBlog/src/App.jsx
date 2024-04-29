import { useState, useEffect } from 'react'
import React from 'react'
import {useDispatch} from "react-redux"
import {Outlet} from "react-router-dom"
import authService from "./AppWrite/Auth.js"
import {Login, logOut} from "./Store/AuthSlice.js"
import {Navbar, Footer} from "./Components/index.js"

function App() {

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser().then(
      (userData) => {
        if(userData){
          dispatch(Login(userData));
        }else{
          dispatch(logOut());
        }
      }
    ).catch(
      (error) => {console.log(error)}
    ).finally(
      () => {setLoading(false)}
    )
  }, [])

  if(loading) {
    <h1>Loading...</h1>
  }else{
    <>
    <div className='w-full bg-slate-800 min-h-screen flex flex-wrap content-between'>
      <div  className='w-full block'>
        <Navbar />
        <main>
          Todo: {/* <Outlet /> */}
        </main>
        <Footer />
      </div>
    </div>
    </>
  }
}

export default App
