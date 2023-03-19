import { useEffect } from 'react'
import { useController } from '../Controller'
// import Review from '../components/Review'
import ListReview from '../components/ListReview'
import { moviePageClasses } from '../appClasses'

export function UserReviewPage({ user }) {
  const { getAllReviews, reviews } = useController()

  useEffect(() => {
    getAllReviews()
  }, [])

  return (
    <div className={moviePageClasses.container}>
      <div className="flex flex-col sm:w-3/4 md:w-3/4 mx-auto">
        <div className={moviePageClasses.reviewsContainer}>
          <h2 className="text-2xl font-semibold mb-4">Your Reviews</h2>
          <div className={moviePageClasses.reviewListContainer}>
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
