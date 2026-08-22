import React, { useState, useEffect } from "react";

const GiveReviews = () => {
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const savedReview = localStorage.getItem("user_review");
    if (savedReview) {
      setSubmitted(true);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const reviewData = { name, review, rating };
    localStorage.setItem("user_review", JSON.stringify(reviewData));

    setSubmitted(true);
  };

  return (
    <div className="review-form-container">
      <h2>Give a Review</h2>

      {submitted ? (
        <p style={{ color: "green", fontWeight: "bold" }}>
          You have already submitted a review.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="review-form">
          <div className="form-group">
            <label>Your Name:</label>
            <input
              type="text"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Your Review:</label>
            <textarea
              value={review}
              required
              onChange={(e) => setReview(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Rating:</label>
            <select
              value={rating}
              required
              onChange={(e) => setRating(e.target.value)}
            >
              <option value="">Select rating</option>
              <option value="1">⭐</option>
              <option value="2">⭐⭐</option>
              <option value="3">⭐⭐⭐</option>
              <option value="4">⭐⭐⭐⭐</option>
              <option value="5">⭐⭐⭐⭐⭐</option>
            </select>
          </div>

          <button type="submit" disabled={submitted}>
            Submit Review
          </button>
        </form>
      )}
    </div>
  );
};

export default GiveReviews;
