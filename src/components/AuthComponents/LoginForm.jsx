import { useState } from 'react'
import * as usersService from '../../services/usersService'

import authComponentsClasses from './authComponentsClasses'

export default function LoginForm({ setUser, setShowLogin, showLogin }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  })
  const [error, setError] = useState('')

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value })
    setError('')
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault()
    try {
      const user = await usersService.login(credentials)
      setUser(user)
    } catch {
      setError('Log In Failed - Try Again')
    }
  }

  return (
    <div className={authComponentsClasses.container}>
      <div
        className={authComponentsClasses.image}
        style={{ backgroundImage: "url('/login.jpg')" }}
      />
      <div className={authComponentsClasses.formContainer}>
        <h2 className={authComponentsClasses.heading}>Movie Review Login</h2>
        <form
          className={authComponentsClasses.form}
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className={authComponentsClasses.label}>
              Email
            </label>
            <input
              type="text"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              required
              className={authComponentsClasses.input}
              placeholder="Email"
            />
            <label htmlFor="password" className={authComponentsClasses.label}>
              Password
            </label>
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              required
              className={authComponentsClasses.input}
              placeholder="Password"
            />

            <button type="submit" className={authComponentsClasses.button}>
              Login
            </button>
          </div>
          <p className={authComponentsClasses.error}>{error}</p>
        </form>
        <div className={authComponentsClasses.container2}>
          Don't have an account?
          <h3
            className={authComponentsClasses.button2}
            onClick={() => setShowLogin(!showLogin)}
          >
            SIGN UP
          </h3>
        </div>
      </div>
    </div>
  )
}
