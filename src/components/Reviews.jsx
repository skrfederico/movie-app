import React, { useState, useEffect } from "react";

function Reviews(props) {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState("");
  const [editReviewIndex, setEditReviewIndex] = useState(null);
  const [editReviewText, setEditReviewText] = useState("");
  const [currentUser, setCurrentUser] = useState("user123"); //set the current user

  function handleAddReview(event) {
    event.preventDefault();
    const newReviewObj = {
      text: newReview,
      likes: 0,
      dislikes: 0,
      user: currentUser,
    }; //add user property to new review
    setReviews([...reviews, newReviewObj]);
    setNewReview("");
  }

  function handleEditReview(index) {
    if (reviews[index].user === currentUser)
      //check if current user is the creator of the review
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

  function handleDeleteReview(index) {
    if (reviews[index].user === currentUser) {
      //check if current user is the creator of the review
      const updatedReviews = [...reviews];
      updatedReviews.splice(index, 1);
      setReviews(updatedReviews);
    }
  }

  const handleBeforeUnload = (event) => {
    event.preventDefault();
    event.returnValue = "";
  };

  useEffect(() => {
    window.addEventListener("beforeunload", handleBeforeUnload);

    const storedReviews = JSON.parse(localStorage.getItem("reviews"));
    if (storedReviews) {
      setReviews(storedReviews);
    }
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(reviews));
  }, [reviews]);

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
                <button onClick={() => handleDeleteReview(index)}>
                  Delete
                </button>
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
