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

  // async updateMovie(_id, updatedMovie) {
  //   const { data } = await this.instance.put(`/${_id}`, {
  //     title: updatedMovie.title,
  //     poster: updatedMovie.poster,
  //     id: updatedMovie.id,
  //     rating: updatedMovie.rating,
  //   })
  //   return data
  // }
}

const movieService = new MovieService()
export default movieService
