import { useState } from 'react'
import { useController } from '../Controller'

export default function ReviewForm({ movie }) {
  const { createReview } = useController()
  const [formData, setFormData] = useState({
    body: '',
    author: '',
  })

  const [error, setError] = useState('')

  function handleChange(evt) {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    try {
      await createReview(formData, movie.imdbID)
      setFormData({
        body: '',
        author: '',
      })
    } catch {
      setError('Editing Failed - Try Again')
    }
  }
  return (
    <>
      <form
        autoComplete="off"
        onSubmit={handleSubmit}
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
            value={formData.body}
            onChange={handleChange}
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
            value={formData.author}
            onChange={handleChange}
          />
        </div>
        <p>&nbsp;{error}</p>
        <button
          className="text-white font-semibold text-lg bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-lg px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          type="submit"
        >
          Submit
        </button>
      </form>
    </>
  )
}
