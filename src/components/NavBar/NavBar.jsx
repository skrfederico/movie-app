import { Link } from 'react-router-dom'
import AdminPage from '../../pages/AdminPage/AdminPage'
import UserLogOut from '../UserLogout'

import navBarClasses from './navBarClasses'

export default function NavBar({ user, setUser }) {
  return (
    <nav className={navBarClasses.nav}>
      <div className={navBarClasses.navContainer}>
        <Link to={`/`} className={navBarClasses.navLogo}>
          <img
            src="favicon-32x32.png"
            className={navBarClasses.navLogoImg}
            alt="DaMaFe Logo"
          />
          <span className={navBarClasses.navTitle}>DaMaFe</span>
        </Link>
        <div className={navBarClasses.navListContainer} id="navbar-solid-bg">
          <ul className={navBarClasses.navList}>
            <li>
              <Link to={`/`} className={navBarClasses.navListItem}>
                Home
              </Link>
            </li>
            <li>
              <Link to={`/reviews`} className={navBarClasses.navListItem}>
                Reviews
              </Link>
            </li>
            {user.isAdmin && (
              <li>
                <Link
                  to="/admin/edit"
                  element={
                    <AdminPage
                      user={user}
                      className={navBarClasses.navListItem}
                    />
                  }
                  className={navBarClasses.navListItem}
                >
                  Admin
                </Link>
              </li>
            )}
          </ul>
        </div>
        <UserLogOut setUser={setUser} />
      </div>
    </nav>
  )
}
