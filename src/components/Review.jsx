import { useState } from 'react'
import { useController } from '../Controller'

export default function Review({ review }) {
  const { deleteReview, updateReview } = useController()

  const [editing, setEditing] = useState(false)
  const [formData, setFormData] = useState({
    body: '',
    author: '',
  })

  const [error, setError] = useState('')

  function handleChange(evt) {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleDelete = async () => {
    await deleteReview(review._id)
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    try {
      console.log(review)
      await updateReview(review._id, formData)
    } catch {
      setError('Editing Failed - Try Again')
    }
    setEditing(false)
  }

  return (
    <>
      <div className="flex flex-col justify-between border rounded p-8 gap-4 mb-4 w-full">
        <div className="flex justify-between gap-4">
          <p
            className="cursor-pointer"
            onClick={() => {
              setEditing(!editing)
            }}
          >
            Edit
          </p>
          <span className="cursor-pointer" onClick={handleDelete}>
            &#10005;
          </span>
        </div>
        {editing ? (
          <form onSubmit={handleSubmit} className="flex flex-col mt-8">
            <div className="flex flex-col mb-4">
              <label className="font-semibold text-lg" htmlFor="body">
                Edit Review
              </label>
              <textarea
                className="border p-2"
                rows="5"
                cols="100"
                name="body"
                placeholder={review.body}
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
                name="author"
                className="border p-2"
                placeholder={review.author}
                value={formData.author}
                onChange={handleChange}
              />
            </div>
            <p>&nbsp;{error}</p>
            <button
              className="text-white font-semibold text-lg bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-lg px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              type="submit"
            >
              Submit Changes
            </button>
          </form>
        ) : (
          <div className="flex flex-col">
            <p>{review.body}</p>
            <p className="self-end">
              {review.author}
            </p>
          </div>
        )}
      </div>
    </>
  )
}
