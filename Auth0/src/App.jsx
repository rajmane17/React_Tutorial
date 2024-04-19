import { useAuth0 } from '@auth0/auth0-react'
import './App.css'

function App() {

  const {user, loginWithRedirect, logout, isAuthenticated} = useAuth0()

  console.log("current user", user)

  return (
    <>
    {isAuthenticated && <h1>hello,{user.name}</h1>}
    {
      isAuthenticated ? (<button onClick={(e) => {logout()}}>Logout</button>) :
      <button onClick={(e) => {loginWithRedirect()}}>Login with Redirect</button>
    }
    </>
  )
}

export default App
