export async function getMovieById(id) {
  const response = await fetch(`/api/movies/${id}`)
  const movie = await response.json()
  return movie
}
