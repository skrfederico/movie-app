import { logOut } from '../services/usersService'

export default function UserLogOut({ setUser }) {
  function handleLogOut() {
    logOut()
    setUser(null)
  }

  return (
    <button
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0"
      onClick={handleLogOut}
    >
      LOG OUT
    </button>
  )
}
