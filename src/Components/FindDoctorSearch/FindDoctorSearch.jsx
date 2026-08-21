import React, { useState } from 'react';
import './FindDoctorSearch.css';

const FindDoctorSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [doctorSpecialities, setDoctorSpecialities] = useState([
    'Cardiologist',
    'Dermatologist',
    'Pediatrician',
    'Neurologist',
    'General Practitioner'
  ]);
  const [isListVisible, setIsListVisible] = useState(false);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFocus = () => {
    setIsListVisible(true);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setIsListVisible(false);
    }, 200);
  };

  return (
    <div className="find-doctor-container">
      <h2>Find a Doctor</h2>
      <div className="search-bar-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search by specialty (e.g. Cardiologist)"
          value={searchQuery}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {isListVisible && (
          <ul className="speciality-list">
            {doctorSpecialities
              .filter((speciality) =>
                speciality.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((speciality, index) => (
                <li
                  key={index}
                  className="speciality-item"
                  onClick={() => setSearchQuery(speciality)}
                >
                  {speciality}
                </li>
              ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default FindDoctorSearch;