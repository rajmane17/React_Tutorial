import authService from "../../AppWrite/Auth"
import {useDispatch} from "react-redux"
import { logout } from '../../Store/AuthSlice'

function LogoutBtn() {
    const Dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(()=> {
          // yaha hume state ko inform kar rahe hai ki hum logout ho chuke hai 
            Dispatch(logout())
        })
    }
  return (
    <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
    onClick={logoutHandler}
    >
      Logout
    </button>
  )

}

export default LogoutBtn
