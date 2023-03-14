import { useState } from "react";

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState("");

  function handleAddReviews() {
    setReviews([...reviews, newReview]);
    setNewReview("");
  }

  return (
    <div>
      <h2>Reviews</h2>
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>{review}</li>
        ))}
      </ul>
      <div>
        <form onSubmit={handleAddReview}>
          <label htmlFor="review">Add a review</label>
          <input type="text" id="review" required />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
export { Reviews };
