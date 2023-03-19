import axios from 'axios'

class ReviewService {
  baseURL = 'http://localhost:3001/api/reviews'

  constructor() {
    this.instance = axios.create({ baseURL: this.baseURL })
    this.initializeResponseInterceptor()
  }

  initializeResponseInterceptor() {
    this.instance.interceptors.response.use(
      this.handleResponse,
      this.handleError
    )
  }

  handleResponse({ data }) {
    return data
  }

  handleError(error) {
    throw error
  }

  async getAllReviews() {
    return await this.instance.get('/')
  }

  async createReview(review, movie, moviePoster, user, moviePageLink) {
    console.log(user)
    console.log(moviePoster)
    return await this.instance.post('/', {
      body: review.body,
      author: review.author,
      movie: movie,
      moviePoster: moviePoster,
      user: user,
      moviePageLink: moviePageLink
    })
  }

  async deleteReview(id) {
    return await this.instance.delete(`/${id}`)
  }

  async updateReview(id, review, user) {
    return await this.instance.put(`/${id}`, {
      body: review.body,
      author: review.author,
      user: review.user
    })
  }
}

const reviewService = new ReviewService()
export default reviewService
