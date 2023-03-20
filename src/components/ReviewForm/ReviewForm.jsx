import { useState } from 'react'
import { useController } from '../../Controller'

import reviewFormClasses from './reviewFormClasses'

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
        className={reviewFormClasses.form}
      >
        <div className={reviewFormClasses.section}>
          <label className={reviewFormClasses.label} htmlFor="body">
            Create Review
          </label>
          <textarea
            className={reviewFormClasses.input}
            rows="5"
            cols="100"
            name="body"
            value={formData.body}
            onChange={handleChange}
          />
        </div>
        <div className={reviewFormClasses.section}>
          <label className={reviewFormClasses.label} htmlFor="author">
            Author
          </label>
          <input
            type="text"
            className={reviewFormClasses.input}
            name="author"
            value={formData.author}
            onChange={handleChange}
          />
        </div>
        <p className={reviewFormClasses.error}>{error}</p>
        <button className={reviewFormClasses.button} type="submit">
          Submit
        </button>
      </form>
    </>
  )
}
