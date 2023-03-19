import { signUp } from '../services/usersService'
import { Component } from 'react'

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
      // The promise returned by the signUp service method
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await signUp(formData)
      // Baby step
      this.props.setUser(user)
    } catch {
      // An error happened on the server
      this.setState({ error: 'Sign Up Failed - Try Again' })
    }
  }

  // We must override the render method
  // The render method is the equivalent to a function-based component
  // (its job is to return the UI)
  render() {
    const disable = this.state.password !== this.state.confirm

    // document.body.classList.add("signup-page");

    return (
      <div className=" w-full h-full signup-page">
        <div className="flex items-center justify-center h-screen">
          <div className="flex flex-col items-center justify-center min-h-screen">
            <h2 className="text-4xl font-extrabold mb-16 ">
              Register to Sign Up
            </h2>
            <div className="border-8 border-white-1000 rounded-md p-12 w-50 text-White">
              <form autoComplete="off" onSubmit={this.handleSubmit}>
                <div className="flex flex-col">
                  <label className="mb-4 w-full font-extrabold text-2xl">
                    Name
                  </label>
                  <input
                    type="text"
                    className="border p-2 bg-slate-800 border-slate-700"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    required
                  />
                  <label className="mb-4 w-full font-extrabold text-2xl">
                    Email
                  </label>
                  <input
                    type="email"
                    className="border p-2 bg-slate-800 border-slate-700"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    required
                  />
                  <label className="mb-4 w-full font-extrabold text-2xl">
                    Password
                  </label>
                  <input
                    type="password"
                    className="border p-2 bg-slate-800 border-slate-700"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    required
                  />
                  <label className="mb-4 w-full font-extrabold text-2xl">
                    Confirm
                  </label>
                  <input
                    type="password"
                    className="border p-2 bg-slate-800 border-slate-700"
                    name="confirm"
                    value={this.state.confirm}
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded-md shadow hover:bg-blue-600 transition-colors duration-300 mt-4"
                  disabled={disable}
                >
                  Sign Up
                </button>
                <p className="text-red-500 text-sm mt-2">
                  &nbsp;{this.state.error}
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
