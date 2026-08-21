import React, { useState, useEffect } from 'react';
import './BookingConsultation.css'; // Si tienes estilos o puedes usar estilos generales
import FindDoctorSearch from './FindDoctorSearch/FindDoctorSearch';
import DoctorCard from './DoctorCard/DoctorCard';

const BookingConsultation = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredDoctors, setFilteredDoctors] = useState([]);

  // Lista de doctores de ejemplo
  const doctors = [
    { name: 'Dr. John Doe', specialty: 'Cardiologist', experience: 10, ratings: 4.8, profilePic: 'https://via.placeholder.com/100' },
    { name: 'Dr. Jane Smith', specialty: 'Dermatologist', experience: 8, ratings: 4.6, profilePic: 'https://via.placeholder.com/100' },
    { name: 'Dr. Robert Johnson', specialty: 'Pediatrician', experience: 12, ratings: 4.9, profilePic: 'https://via.placeholder.com/100' },
    { name: 'Dr. Emily Davis', specialty: 'Neurologist', experience: 6, ratings: 4.5, profilePic: 'https://via.placeholder.com/100' }
  ];

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredDoctors(doctors);
    } else {
      const filtered = doctors.filter(doc => 
        doc.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredDoctors(filtered);
    }
  }, [searchQuery]);

  return (
    <div className="booking-consultation-container" style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h2>Book Consultation</h2>
      <FindDoctorSearch onSearch={setSearchQuery} />
      
      <div className="doctors-list" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '20px', justifyContent: 'center' }}>
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doc, index) => (
            <DoctorCard 
              key={index} 
              name={doc.name} 
              specialty={doc.specialty} 
              experience={doc.experience} 
              ratings={doc.ratings} 
              profilePic={doc.profilePic} 
            />
          ))
        ) : (
          <p>No doctors found matching your criteria.</p>
        )}
      </div>
    </div>
  );
};

export default BookingConsultation;