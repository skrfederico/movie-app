import * as usersAPI from './usersApi'

export async function signUp(userData) {
  const token = await usersAPI.signUp(userData)
  // Persist the token to localStorage
  localStorage.setItem('token', token)
  return getUser()
}

export async function login(credentials) {
  const token = await usersAPI.login(credentials)
  // Persist the token to localStorage
  localStorage.setItem('token', token)
  return getUser()
}

export function getToken() {
  const token = localStorage.getItem('token')
  // getItem will return null if no key
  if (!token) return null
  const payload = JSON.parse(atob(token.split('.')[1]))
  if (payload.exp < Date.now() / 1000) {
    // Token has expired
    localStorage.removeItem('token')
    return null
  }
  return token
}

export function getUser() {
  const token = getToken()
  return token ? JSON.parse(atob(token.split('.')[1])).user : null
}

export function logOut() {
  localStorage.removeItem('token')
}
