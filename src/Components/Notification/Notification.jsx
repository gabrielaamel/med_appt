import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './Notification.css';

const Notification = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [doctorData, setDoctorData] = useState(null);
  const [appointmentData, setAppointmentData] = useState(null);
  const [showNotification, setShowNotification] = useState(true);

  useEffect(() => {
    const storedUsername = sessionStorage.getItem('email');
    const storedDoctorData = JSON.parse(localStorage.getItem('doctorData'));
    const storedAppointmentData = JSON.parse(localStorage.getItem(storedDoctorData?.name));

    if (storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }
    if (storedDoctorData) {
      setDoctorData(storedDoctorData);
    }
    if (storedAppointmentData) {
      setAppointmentData(storedAppointmentData);
      setShowNotification(true);
    }
  }, []);

  const handleCancel = () => {
    localStorage.removeItem('doctorData');
    if (doctorData?.name) {
      localStorage.removeItem(doctorData.name);
    }
    setAppointmentData(null);
    setDoctorData(null);
    setShowNotification(false);
  };

  return (
    <div>
      <Navbar />
      {children}
      {isLoggedIn && appointmentData && showNotification && (
        <div className="appointment-card">
          <div className="appointment-card__content">
            <h3 className="appointment-card__title">Appointment Details</h3>
            <p className="appointment-card__message">
              <strong>Doctor:</strong> {doctorData?.name}
            </p>
            <p className="appointment-card__message">
              <strong>Speciality:</strong> {doctorData?.speciality}
            </p>
            <p className="appointment-card__message">
              <strong>Patient:</strong> {appointmentData?.name}
            </p>
            <p className="appointment-card__message">
              <strong>Date of Appointment:</strong> {appointmentData?.date}
            </p>
            <p className="appointment-card__message">
              <strong>Time Slot:</strong> {appointmentData?.slot}
            </p>
            <button onClick={handleCancel} className="cancel-appointment-btn">
              Cancel Appointment
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notification;