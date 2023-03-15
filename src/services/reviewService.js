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
    console.log(data)
    return data
  }

  handleError(error) {
    throw error
  }

  async getAllReviews() {
    return await this.instance.get('/')
  }

  async createReview(review) {
    return await this.instance.post('/', {
      body: review.body,
      author: review.author,
    })
  }

  async deleteReview(id) {
    return await this.instance.delete(`/${id}`)
  }

  async updateReview(id, review) {
    return await this.instance.put('/', {
      body: review.body,
      author: review.author,
    })
  }
}

const reviewService = new ReviewService()
export default reviewService
