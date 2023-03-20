import axios from 'axios'

class MovieService {
  baseURL = 'http://localhost:3001/api/movies'

  constructor() {
    this.instance = axios.create({ baseURL: this.baseURL })
  }

  async getAllMovies() {
    const { data } = await this.instance.get('/')
    return data
  }

  // Create
  async getMovie({ title, poster, id, rating }) {
    const { data } = await this.instance.post('/', {
      title: title,
      poster: poster,
      id: id,
      rating: rating,
    })
    return data
  }

  async deleteMovie(id) {
    return await this.instance.delete(`/${id}`)
  }
}

const movieService = new MovieService()
export default movieService
