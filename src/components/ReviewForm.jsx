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
      const review = { ...this.state }
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
      <form autoComplete="off" onSubmit={this.handleSubmit}>
        <label htmlFor="author">Author</label>
        <input
          type="text"
          name="author"
          value={this.state.author}
          onChange={this.handleChange}
        />
        <label htmlFor="body">Body</label>
        <input
          type="text"
          name="body"
          value={this.state.body}
          onChange={this.handleChange}
        />
        <button type="submit">Create Review</button>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </form>
    )
  }
}
