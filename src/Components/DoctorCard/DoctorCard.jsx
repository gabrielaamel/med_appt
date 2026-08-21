import React, { useState } from 'react';
import './DoctorCard.css';

const DoctorCard = ({ name, specialty, experience, ratings, profilePic }) => {
  const [showModal, setShowModal] = useState(false);

  const handleBooking = () => {
    setShowModal(true);
  };

  return (
    <div className="doctor-card-container">
      <div className="doctor-card-details-container">
        <div className="doctor-card-profile-image-container">
          <img src={profilePic || "https://via.placeholder.com/100"} alt={name} className="doctor-card-profile-image" />
        </div>
        <div className="doctor-card-details">
          <h3 className="doctor-card-name">{name}</h3>
          <p className="doctor-card-speciality">{specialty}</p>
          <p className="doctor-card-experience">{experience} years experience</p>
          <p className="doctor-card-ratings">Ratings: {ratings} ⭐</p>
        </div>
      </div>

      <div className="doctor-card-options-container">
        <button className="book-appointment-btn" onClick={handleBooking}>
          <div>Book Appointment</div>
          <div>No Booking Fee</div>
        </button>
      </div>
    </div>
  );
};

export default DoctorCard;