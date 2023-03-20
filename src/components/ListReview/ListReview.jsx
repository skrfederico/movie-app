import { Link } from 'react-router-dom'
import { useController } from '../../Controller'

import listReviewClasses from './listReviewClasses'

export default function ListReview({ review, user }) {
  const { deleteReview } = useController()

  const handleDelete = async () => {
    await deleteReview(review._id)
  }

  return (
    <div className={listReviewClasses.container}>
      <div className={listReviewClasses.flexContainer}>
        <div className={listReviewClasses.flexColContainer}>
          <p class="text-lg mb-4">{review.body}</p>
          <p class="text-gray-500 text-right italic self-end">
            {review.author}
          </p>
        </div>
        <Link to={review.moviePageLink}>
          <img
            src={review.moviePoster}
            alt="Movie poster"
            className={listReviewClasses.image}
          />
        </Link>
        {user._id === review.user && (
          <div className="2xl:self-start self-end">
            <span className={listReviewClasses.delete} onClick={handleDelete}>
              &#10005;
            </span>
          </div>
        )}
      </div>
    </div>
  )
}
