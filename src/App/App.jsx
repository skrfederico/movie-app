import React, { useState } from 'react'
import { ProvideController } from '../Controller'
import { Route, Routes } from 'react-router-dom'
import { getUser } from '../services/usersService'

import LandingPage from '../pages/LandingPage/LandingPage'
import UserReviewPage from '../pages/UserReviewsPage/UserReviewsPage'
import MoviePage from '../pages/MoviePage/MoviePage'
import AdminPage from '../pages/AdminPage/AdminPage'
import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'

import AuthPage from '../pages/AuthPage'

function App() {
  const [user, setUser] = useState(getUser())
  return (
    <div className="App">
      <ProvideController>
        {user ? (
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route
                path="/:id"
                element={<MoviePage user={user} setUser={setUser} />}
              />
              <Route path="/reviews" element={<UserReviewPage user={user} />} />
              {user.isAdmin && (
                <Route path="/admin/edit" element={<AdminPage user={user} />} />
              )}
            </Routes>
            <Footer />
          </>
        ) : (
          <AuthPage setUser={setUser} />
        )}
      </ProvideController>
    </div>
  )
}

export default App
