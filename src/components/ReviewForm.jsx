import { useState } from 'react'
import { useController } from '../Controller'

export default function ReviewForm({ movie, user }) {
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
      await createReview(formData, movie.imdbID, user)
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
        className="flex flex-col mt-8 sm:w-3/4 md:w-3/4 mx-auto"
      >
        <div className="flex flex-col mb-4">
          <label className="font-semibold text-lg mb-2" htmlFor="body">
            Create Review
          </label>
          <textarea
            className="border p-2 bg-slate-800 border-slate-700"
            rows="5"
            cols="100"
            name="body"
            value={formData.body}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col mb-4">
          <label className="font-semibold text-lg mb-2" htmlFor="author">
            Author
          </label>
          <input
            type="text"
            className="border p-2 bg-slate-800 border-slate-700"
            name="author"
            value={formData.author}
            onChange={handleChange}
          />
        </div>
        <p className="text-red-500 text-center">{error}</p>
        <button
          className="text-white font-semibold text-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg px-5 py-2.5 text-center mr-3 md:mr-0"
          type="submit"
        >
          Submit
        </button>
      </form>
    </>
  )
}
