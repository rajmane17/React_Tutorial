import Logo from "../Logo"
import LogoutBtn from "./LogoutBtn"
import Container from "../Container/Container"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import {useSelector} from "react-redux"

function Header() {

  const authStatus = useSelector((state) => {
    state.auth.status
  })
  const navigate = useNavigate()

  const navItems = [
    {
      name: "Home",
      url: "/",
      active: true
    }, {
      name: "Login",
      url: "/Login",
      active: !authStatus
    }, {
      name: "signUp",
      url: "/signUp",
      active: !authStatus
    }, {
      name: "All-Post",
      url: "/AllPost",
      active: authStatus
    }, {
      name: "Add-Post",
      url: "/AddPost",
      active: authStatus
    }
  ]
  
  return (
    <header>
      <Container>
        <nav>
          <div>
            <Link to="/">
            <Logo />
            </Link>
          </div>
          <ul>
            {
              navItems.map((item) => (
                item.active ? (
                  <li key={item.name}>
                    <button onClick={() => navigate(item.url)}>{item.name}</button>
                  </li>
                ) : null
              ))
            }
            {
              authStatus && (
                <li>
                  <LogoutBtn />
                </li>
              )
            }
          </ul>
        </nav>
      </Container>
    </header>
  )

}

export default Header
