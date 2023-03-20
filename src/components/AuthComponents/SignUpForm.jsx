import { signUp } from '../../services/usersService'
import { Component } from 'react'

import authComponentsClasses from './authComponentsClasses'

export default class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: '',
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: '',
    })
  }

  handleSubmit = async (evt) => {
    evt.preventDefault()
    console.log(evt)
    try {
      const formData = { ...this.state }
      delete formData.confirm
      delete formData.error
      const user = await signUp(formData)
      this.props.setUser(user)
    } catch {
      // An error happened on the server
      this.setState({ error: 'Sign Up Failed - Try Again' })
    }
  }

  render() {
    const disable = this.state.password !== this.state.confirm

    return (
      <div className={authComponentsClasses.container}>
        <div
          className={authComponentsClasses.image}
          style={{ backgroundImage: "url('/signup.jpg')" }}
        />
        <div className={authComponentsClasses.formContainer}>
          <h2 className={authComponentsClasses.heading}>Register to Sign Up</h2>

          <form
            autoComplete="off"
            className={authComponentsClasses.form}
            onSubmit={this.handleSubmit}
          >
            <div className="flex flex-col gap-2">
              <label className={authComponentsClasses.label}>Name</label>
              <input
                type="text"
                className={authComponentsClasses.input}
                name="name"
                placeholder="Enter your name"
                value={this.state.name}
                onChange={this.handleChange}
                required
              />
              <label className={authComponentsClasses.label}>Email</label>
              <input
                type="email"
                className={authComponentsClasses.input}
                name="email"
                placeholder="Enter your email"
                value={this.state.email}
                onChange={this.handleChange}
                required
              />
              <label className={authComponentsClasses.label}>Password</label>
              <input
                type="password"
                className={authComponentsClasses.input}
                name="password"
                placeholder="Create a password"
                value={this.state.password}
                onChange={this.handleChange}
                required
              />
              <label className={authComponentsClasses.label}>Confirm</label>
              <input
                type="password"
                className={authComponentsClasses.input}
                name="confirm"
                placeholder="Confirm your password"
                value={this.state.confirm}
                onChange={this.handleChange}
                required
              />
              <button
                type="submit"
                className={authComponentsClasses.button}
                disabled={disable}
              >
                Sign Up
              </button>
            </div>
            <p className={authComponentsClasses.error}>
              &nbsp;{this.state.error}
            </p>
          </form>
          <div className={authComponentsClasses.container2}>
            Already have an account?
            <h3
              className={authComponentsClasses.button2}
              onClick={() => this.props.setShowLogin(!this.props.showLogin)}
            >
              LOG IN
            </h3>
          </div>
        </div>
      </div>
    )
  }
}
