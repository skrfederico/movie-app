import { Component } from 'react'

export default class ReviewForm extends Component {
  state = {
    body: '',
    author: '',
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: '',
    })
  }

  handleSubmit = async (evt) => {
    evt.preventDefault()
    try {
      console.log(this)
      const review = { ...this.state, movie: this.props.movieId }
      await this.props.createReview(review)
      this.setState({
        body: '',
        author: '',
      })
    } catch (error) {
      this.setState({ error: 'Review Creation Failed - Try Again' })
    }
  }

  render() {
    return (
      <form
        autoComplete="off"
        onSubmit={this.handleSubmit}
        className="flex flex-col mt-8"
      >
        <div className="flex flex-col mb-4">
          <label className="font-semibold text-lg" htmlFor="body">
            Create Review
          </label>
          <textarea
            className="border p-2"
            rows="5"
            cols="100"
            name="body"
            value={this.state.body}
            onChange={this.handleChange}
          />
        </div>
        <div className="flex flex-col mb-4">
          <label className="font-semibold text-lg" htmlFor="author">
            Author
          </label>
          <input
            type="text"
            className="border p-2"
            name="author"
            value={this.state.author}
            onChange={this.handleChange}
          />
        </div>
        <button
          className="text-white font-semibold text-lg bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-lg px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          type="submit"
        >
          Submit
        </button>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </form>
    )
  }
}
