import { useState } from 'react'
import LoginForm from '../components/LoginForm'
import SignUpForm from '../components/SignUpForm'

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true)

  return (
    <main className="flex flex-col items-center">
      {showLogin ? (
        <LoginForm setUser={setUser} />
      ) : (
        <SignUpForm setUser={setUser} />
      )}
      <h3
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow w-32"
        onClick={() => setShowLogin(!showLogin)}
      >
        {showLogin ? 'SIGN UP' : 'LOG IN'}
      </h3>
    </main>
  )
}
