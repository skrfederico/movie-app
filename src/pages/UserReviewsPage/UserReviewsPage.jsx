import { useEffect } from 'react'
import { useController } from '../../Controller'
import ListReview from '../../components/ListReview/ListReview'

import userReviewPageClasses from './userReviewPageClasses'

export default function UserReviewPage({ user }) {
  const { getAllReviews, reviews } = useController()

  useEffect(() => {
    getAllReviews()
  }, [])

  return (
    <div className={userReviewPageClasses.container}>
      <div className="flex flex-col sm:w-3/4 md:w-3/4 mx-auto">
        <div className={userReviewPageClasses.reviewsContainer}>
          <h2 className="text-2xl font-semibold mb-4">Your Reviews</h2>
          <div className={userReviewPageClasses.reviewListContainer}>
            {reviews && reviews.length > 0 && (
              <>
                {reviews.map((review, i) => {
                  if (review.user === user._id)
                    return <ListReview key={i} review={review} user={user} />
                })}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
