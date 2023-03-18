import { useEffect } from 'react'
import { useController } from '../Controller'
import Review from '../components/Review'

import { moviePageClasses } from '../appClasses'

export function UserReviewPage({ user }) {
  const { getAllReviews, reviews } = useController()

  useEffect(() => {
    getAllReviews()
  }, [])

  return (
    <div className="flex flex-col gap-12 px-8 mb-32 sm:px-16 md:px-32 lg:px-64 py-12 lg:py-8 items-center text-lg lg:my-16">
      <div className="flex flex-col sm:w-3/4 md:w-3/4 mx-auto">
        <div className={moviePageClasses.reviewsContainer}>
          <h2 className="text-2xl font-semibold mb-4">Your Reviews</h2>
          <div className={moviePageClasses.reviewListContainer}>
            {reviews && reviews.length > 0 && (
              <>
                {reviews.map((review, i) => {
                  if (review.user === user._id)
                    return <Review key={i} review={review} />
                })}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
