import React, { useEffect, useState } from 'react';
import './ProfileCard.css';

const ProfileCard = () => {
  const [userDetails, setUserDetails] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [updatedDetails, setUpdatedDetails] = useState({});

  useEffect(() => {
    const email = sessionStorage.getItem("email");
    if (email) {
      // Simulado o recuperando datos del usuario actual
      setUserDetails({
        name: sessionStorage.getItem("name") || "User",
        email: email,
        phone: sessionStorage.getItem("phone") || "1234567890",
      });
      setUpdatedDetails({
        name: sessionStorage.getItem("name") || "User",
        phone: sessionStorage.getItem("phone") || "1234567890",
      });
    }
  }, []);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleInputChange = (e) => {
    setUpdatedDetails({
      ...updatedDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserDetails({ ...userDetails, ...updatedDetails });
    sessionStorage.setItem("name", updatedDetails.name);
    sessionStorage.setItem("phone", updatedDetails.phone);
    setEditMode(false);
    alert("Profile updated successfully!");
  };

  return (
    <div className="profile-card">
      <h2>Welcome, {userDetails.name}</h2>
      {!editMode ? (
        <div className="profile-details">
          <p><strong>Email:</strong> {userDetails.email}</p>
          <p><strong>Phone:</strong> {userDetails.phone}</p>
          <button onClick={handleEdit} className="btn-edit">Edit Profile</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="profile-form">
          <label>
            Name:
            <input type="text" name="name" value={updatedDetails.name} onChange={handleInputChange} />
          </label>
          <label>
            Phone:
            <input type="text" name="phone" value={updatedDetails.phone} onChange={handleInputChange} />
          </label>
          <button type="submit" className="btn-save">Save</button>
        </form>
      )}
    </div>
  );
};

export default ProfileCard;