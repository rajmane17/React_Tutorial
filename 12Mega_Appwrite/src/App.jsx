import { useEffect, useState } from 'react'
import {useDispatch} from "react-redux"
import './App.css'
import authService from "./AppWrite/Auth"
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import {Outlet} from "react-router-dom"
import { logout, login } from "./Store/AuthSlice"

function App() {

  const [loading, setLoading] = useState(true)
  const Dispatch = useDispatch()


  useEffect(() => {
    authService.getCurrentUser()
    .then((userData)=> {
      if (userData) {
        Dispatch(login({userData}))
      } else {
        Dispatch(logout())
      }
    })
    .finally(()=> {setLoading(false)})
  }, [])

    // This is known as conditional rendering
  if (loading) {
    return (
      <>
      <h1>Loading....</h1>
      </>
    )
  } else {
    <>
    <div>
      <div>
        <Header/>
        <main>
          Todo: <Outlet/>
        </main>
        <Footer />
      </div>
    </div>
    </>
  }

}

export default App
