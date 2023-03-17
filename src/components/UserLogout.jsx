import { logOut } from '../services/usersService'
import { appClasses } from '../appClasses'

export default function UserLogOut({ user, setUser }) {
  function handleLogOut() {
    logOut()
    setUser(null)
  }

  return (
    <button className={appClasses.navLogoutBtn} onClick={handleLogOut}>
      LOG OUT
    </button>
  )
}
