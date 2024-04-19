import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function SayHi (){
  return(
    <>
    <a href="https://google.com">Google</a>
    </>
  )
}
const anotherUser = "Akshay"
const createreact = React.createElement(
  //The syntax here is predefined
  "a",
  { href:"http://google.com", target: "_blank"},
  "click me to visit google",
  anotherUser
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <SayHi />  */}
    {/* createreact */}
    <App />
  </React.StrictMode>,
)
