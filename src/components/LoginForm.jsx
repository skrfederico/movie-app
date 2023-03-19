import { useState } from 'react'
import * as usersService from '../services/usersService'
import '../index.css'

export default function LoginForm({ setUser }) {
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
      // The promise returned by the signUp service method
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials)
      setUser(user)
    } catch {
      setError('Log In Failed - Try Again')
    }
  }

  return (
    <body class=" w-full h-full login-page">
      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col items-center justify-center min-h-screen">
          <h2 className="text-4xl font-extrabold mb-16  ">
            Movie Review Login
          </h2>
          <form
            className="border-8 border-white-1000 rounded-md p-12 w-50 text-White  "
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <div className="mb-4 w-full font-extrabold text-2xl">
              <label htmlFor="email" className="block mb-2">
                Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                value={credentials.email}
                onChange={handleChange}
                required
                className="border p-2 bg-slate-800 border-slate-700"
                placeholder="Email"
              />
            </div>
            <div className="mb-8 w-full font-extrabold text-2xl">
              <label htmlFor="password" className="block mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={credentials.password}
                onChange={handleChange}
                required
                className="border p-2 bg-slate-800 border-slate-700"
                placeholder="Password"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md shadow hover:bg-blue-600 transition-colors duration-300 mt-4"
            >
              Log in
            </button>
            <p className="text-red-500 text-sm mt-4">{error}</p>
          </form>
        </div>
      </div>
    </body>
  )
}
