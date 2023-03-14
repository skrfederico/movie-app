import React, { useState } from "react";

function Reviews(props) {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState("");
  const [editReviewIndex, setEditReviewIndex] = useState(null);
  const [editReviewText, setEditReviewText] = useState("");

  function handleAddReview(event) {
    event.preventDefault();
    const newReviewObj = { text: newReview, likes: 0, dislikes: 0 };
    setReviews([...reviews, newReviewObj]);
    setNewReview("");
  }

  function handleEditReview(index) {
    setEditReviewIndex(index);
    setEditReviewText(reviews[index].text);
  }

  function handleUpdateReview(event) {
    event.preventDefault();
    const updatedReviews = [...reviews];
    updatedReviews[editReviewIndex].text = editReviewText;
    setReviews(updatedReviews);
    setEditReviewIndex(null);
    setEditReviewText("");
  }

  function handleLikeReview(index) {
    const updatedReviews = [...reviews];
    updatedReviews[index].likes++;
    setReviews(updatedReviews);
  }

  function handleDislikeReview(index) {
    const updatedReviews = [...reviews];
    updatedReviews[index].dislikes++;
    setReviews(updatedReviews);
  }

  return (
    <div>
      <h2>Reviews</h2>
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>
            {editReviewIndex === index ? (
              <form onSubmit={handleUpdateReview}>
                <input
                  type="text"
                  value={editReviewText}
                  onChange={(event) => setEditReviewText(event.target.value)}
                />
                <button type="submit">Update</button>
              </form>
            ) : (
              <div>
                <span>{review.text}</span>
                <button onClick={() => handleEditReview(index)}>Edit</button>
              </div>
            )}
            <div>
              <button onClick={() => handleLikeReview(index)}>
                Thumbs Up ({review.likes})
              </button>
              <button onClick={() => handleDislikeReview(index)}>
                Thumbs Down ({review.dislikes})
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div>
        <form onSubmit={handleAddReview}>
          <label htmlFor="review">Add a review</label>
          <input
            type="text"
            id="review"
            value={newReview}
            onChange={(event) => setNewReview(event.target.value)}
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export { Reviews };
