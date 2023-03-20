import { useState } from 'react'
import LoginForm from '../components/AuthComponents/LoginForm'
import SignUpForm from '../components/AuthComponents/SignUpForm'

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true)

  return (
    <main className="flex flex-col items-center">
      {showLogin ? (
        <LoginForm
          setUser={setUser}
          showLogin={showLogin}
          setShowLogin={setShowLogin}
        />
      ) : (
        <SignUpForm
          setUser={setUser}
          showLogin={showLogin}
          setShowLogin={setShowLogin}
        />
      )}
    </main>
  )
}
