import { useState, useEffect } from 'react'
import { useController } from '../../Controller'

import reviewClasses from './reviewClasses'

export default function Review({ review, user }) {
  const { deleteReview, updateReview, getAllReviews } = useController()

  const [editing, setEditing] = useState(false)
  const [formData, setFormData] = useState({
    body: review.body,
    author: review.author,
  })
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  function handleChange(evt) {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleDelete = async () => {
    await deleteReview(review._id)
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    setIsLoading(true)
    try {
      await updateReview(review._id, formData, user)
    } catch {
      setError('Editing Failed - Try Again')
    }
    setEditing(false)
  }

  useEffect(() => {
    async function fetchReviews() {
      await getAllReviews()
      setIsLoading(false)
    }
    fetchReviews()
  }, [isLoading])

  return (
    <>
      <div className={reviewClasses.container}>
        <div className="flex justify-between gap-4">
          {user._id === review.user && (
            <p
              className={reviewClasses.edit}
              onClick={() => {
                setEditing(!editing)
              }}
            >
              Edit
            </p>
          )}
          {user._id === review.user && (
            <span className={reviewClasses.delete} onClick={handleDelete}>
              &#10005;
            </span>
          )}
        </div>
        {editing ? (
          <form onSubmit={handleSubmit} className={reviewClasses.form}>
            <div className={reviewClasses.section}>
              <label className={reviewClasses.label} htmlFor="body">
                Edit Review
              </label>
              <textarea
                className={reviewClasses.input}
                rows="5"
                cols="100"
                name="body"
                placeholder={review.body}
                value={formData.body}
                onChange={handleChange}
              />
            </div>
            <div className={reviewClasses.section}>
              <label className={reviewClasses.label} htmlFor="author">
                Author
              </label>
              <input
                type="text"
                name="author"
                className={reviewClasses.input}
                placeholder={review.author}
                value={formData.author}
                onChange={handleChange}
              />
            </div>
            <p>&nbsp;{error}</p>
            <button className={reviewClasses.button} type="submit">
              Submit Changes
            </button>
          </form>
        ) : (
          <div className="flex flex-col">
            <p className="text-lg">{review.body}</p>
            <p className="self-end italic">{review.author}</p>
          </div>
        )}
      </div>
    </>
  )
}
