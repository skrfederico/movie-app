import { useController } from '../Controller'

export default function Review({ review }) {
  const { deleteReview } = useController()

  const handleDelete = async () => {
    await deleteReview(review._id)
  }

  return (
    <>
      <li>
        <p>
          {review.author} - {review.body}
        </p>
        <span className="cursor-pointer" onClick={handleDelete}>
          &#10005;
        </span>
      </li>
    </>
  )
}
