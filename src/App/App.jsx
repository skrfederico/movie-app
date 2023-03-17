import React, { useState } from 'react'

import { Route, Routes } from 'react-router-dom'
import { getUser } from '../services/usersService'
import { MoviePage } from '../pages/MoviePage'
import { LandingPage } from '../pages/LandingPage'
import { ProvideController } from '../Controller'
import { Link } from 'react-router-dom'
import UserLogOut from '../components/UserLogout'

import AuthPage from '../pages/AuthPage'

import { appClasses } from '../appClasses'

function App() {
  const [user, setUser] = useState(getUser())
  return (
    <div className="App w-full h-full">
      <nav className={appClasses.nav}>
        <div className={appClasses.navContainer}>
          <Link to={`/`} className={appClasses.navLogo}>
            <img
              src="favicon-32x32.png"
              className={appClasses.navLogoImg}
              alt="DaMaFe Logo"
            />
            <span className={appClasses.navTitle}>DaMaFe</span>
          </Link>
          <div className={appClasses.navListContainer} id="navbar-solid-bg">
            <ul className={appClasses.navList}>
              <li>
                <Link to={`/`} className={appClasses.navListItem}>
                  Home
                </Link>
              </li>
              <li>
                <a href="#" className={appClasses.navListItem}>
                  Reviews
                </a>
              </li>
              <li></li>
            </ul>
          </div>
          <UserLogOut />
        </div>
      </nav>

      <ProvideController>
        {user ? (
          <>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/:id" element={<MoviePage />} />
            </Routes>
          </>
        ) : (
          <AuthPage setUser={setUser} />
        )}
      </ProvideController>

      <footer className={appClasses.footer}>
        <div className={appClasses.footerContainer}>
          <div className={appClasses.footerLogo}>
            <a href="#" className="flex items-center mb-4 sm:mb-0">
              <img
                src="favicon-32x32.png"
                className={appClasses.footerLogoImg}
                alt="DaMaFe Logo"
              />
              <span className={appClasses.footerTitle}>DaMaFe</span>
            </a>
            <ul className={appClasses.footerLinks}>
              <li>
                <Link to={`/`} className={appClasses.footerLink}>
                  Home
                </Link>
              </li>
              <li>
                <a href="#" className={appClasses.footerLink}>
                  Reviews
                </a>
              </li>
              <li>
                <a href="#" className={appClasses.footerLink}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr className={appClasses.footerRule} />
          <span className={appClasses.footerCopy}>
            ©{' '}
            <a href="#" className={appClasses.footerLink}>
              DaMaFe™
            </a>
            All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  )
}

export default App
