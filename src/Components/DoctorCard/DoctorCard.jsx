import React, { useState, useEffect } from 'react';
import './DoctorCard.css';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

const DoctorCard = ({ name, specialty, experience, ratings, profilePic }) => {
  const [showModal, setShowModal] = useState(false);
  const [appointmentBooked, setAppointmentBooked] = useState(false);
  const [appointmentDetails, setAppointmentDetails] = useState(null);

  useEffect(() => {
    const savedAppointment = localStorage.getItem(`appointment_${name}`);
    if (savedAppointment) {
      setAppointmentBooked(true);
      setAppointmentDetails(JSON.parse(savedAppointment));
    }
  }, [name]);

  const handleBooking = () => {
    setShowModal(true);
  };

  const handleCancelBooking = () => {
    localStorage.removeItem(`appointment_${name}`);
    setAppointmentBooked(false);
    setAppointmentDetails(null);
  };

  const handleFormSubmit = (details) => {
    localStorage.setItem(`appointment_${name}`, JSON.stringify(details));
    setAppointmentBooked(true);
    setAppointmentDetails(details);
    setShowModal(false);
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
        {appointmentBooked ? (
          <div className="booked-info">
            <p className="booked-text">
              Appointment booked for {appointmentDetails?.date} at {appointmentDetails?.time}
            </p>
            <button className="cancel-appointment-btn" onClick={handleCancelBooking}>
              Cancel Appointment
            </button>
          </div>
        ) : (
          <button className="book-appointment-btn" onClick={handleBooking}>
            <div>Book Appointment</div>
            <div>No Booking Fee</div>
          </button>
        )}

        {showModal && (
          <div className="modal-overlay">
            <div className="modal-content">
              <AppointmentForm 
                doctorName={name} 
                doctorSpeciality={specialty} 
                onSubmit={handleFormSubmit} 
              />
              <button className="close-modal-btn" onClick={() => setShowModal(false)}>Cancel</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorCard;