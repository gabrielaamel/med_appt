import React, { useState } from "react";
import "./AppointmentForm.css";

const AppointmentFormIC = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (onSubmit) {
      onSubmit({ name, phoneNumber });
    }

    alert(`Appointment submitted for ${name}!`);
  };

  return (
    <div className="appointment-form-container">
      <h3>Patient Information</h3>

      <form onSubmit={handleFormSubmit} className="appointment-form">
        <div className="form-group">
          <label>Patient Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Enter your name"
          />
        </div>

        <div className="form-group">
          <label>Phone Number:</label>
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
            placeholder="Enter your phone number"
          />
        </div>

        <button type="submit" className="submit-appointment-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AppointmentFormIC;
