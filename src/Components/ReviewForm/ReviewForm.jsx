import React, { useState } from 'react';
import './ReviewForm.css';

const ReviewForm = () => {
  const [showForm, setShowForm] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState(null);
  const [showWarning, setShowWarning] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    review: '',
    rating: 0
  });

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.review && formData.rating > 0) {
      setShowWarning(false);
      setSubmittedMessage(formData);
      setShowForm(false);
    } else {
      setShowWarning(true);
    }
  };

  return (
    <div className="review-form-container">
      <h2>Reviews</h2>
      {!submittedMessage ? (
        !showForm ? (
          <button className="feedback-btn" onClick={handleButtonClick}>
            Click Here
          </button>
        ) : (
          <form onSubmit={handleSubmit} className="review-form">
            <h3>Give Your Feedback</h3>
            {showWarning && <p className="warning">Please fill out all fields and select a rating.</p>}
            
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
              />
            </div>

            <div className="form-group">
              <label htmlFor="review">Review:</label>
              <textarea 
                id="review" 
                name="review" 
                value={formData.review} 
                onChange={handleChange} 
              />
            </div>

            <div className="form-group">
              <label htmlFor="rating">Rating (1-5):</label>
              <input 
                type="number" 
                id="rating" 
                name="rating" 
                min="1" 
                max="5" 
                value={formData.rating} 
                onChange={handleChange} 
              />
            </div>

            <button type="submit" className="submit-btn">Submit</button>
          </form>
        )
      ) : (
        <div className="submitted-display">
          <h3>Submitted Review:</h3>
          <p><strong>Name:</strong> {submittedMessage.name}</p>
          <p><strong>Review:</strong> {submittedMessage.review}</p>
          <p><strong>Rating:</strong> {submittedMessage.rating} / 5</p>
        </div>
      )}
    </div>
  );
};

export default ReviewForm;