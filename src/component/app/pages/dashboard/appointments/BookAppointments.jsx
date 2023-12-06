import React, { useState } from "react";
import "./DoctorTable.css";
import { Link, Navigate } from "react-router-dom";

function BookAppointments() {
  const [doctors, setDoctors] = useState([
    { id: 1, name: "Dr. Smith", specialty: "Cardiologist" },
    { id: 2, name: "Dr. Johnson", specialty: "Dermatologist" },
    { id: 3, name: "Dr. Brown", specialty: "Pediatrician" },
    { id: 4, name: "Dr. Raza", specialty: "Pulmonologist" },
    { id: 5, name: "Dr. Brat", specialty: "Pediatrician" },
    { id: 6, name: "Dr. Jack", specialty: "Dermatologist" },
    { id: 7, name: "Dr. Joe", specialty: "Pediatrician" },
    { id: 8, name: "Dr. William", specialty: "Pulmonologist" },
    { id: 9, name: "Dr. Boult", specialty: "Cardiologist" },
    { id: 10, name: "Dr. Southee", specialty: "Pulmonologist" },
    { id: 11, name: "Dr. Hernandaz", specialty: "Pediatrician" },
    { id: 12, name: "Dr. John", specialty: "Dermatologist" },
    { id: 13, name: "Dr. Kylie", specialty: "Pediatrician" },
    { id: 14, name: "Dr. Gupta", specialty: "Dermatologist" }
  ]);

  const [filterName, setFilterName] = useState("");
  const [filterSpecialty, setFilterSpecialty] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const handleNameFilterChange = (e) => {
    setFilterName(e.target.value);
  };

  const handleSpecialtyFilterChange = (e) => {
    setFilterSpecialty(e.target.value);
  };

  return (
    <div className="doctor-table-container">
      <h1>Search for Doctors</h1>
      <input
        type="text"
        placeholder="Search by name..."
        value={filterName}
        onChange={handleNameFilterChange}
      />
      <input
        type="text"
        placeholder="Search by specialty..."
        value={filterSpecialty}
        onChange={handleSpecialtyFilterChange}
      />
      <table className="doctor-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Specialty</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {doctors
            .filter((doctor) =>
              doctor.name.toLowerCase().includes(filterName.toLowerCase())
            )
            .filter((doctor) =>
              doctor.specialty.toLowerCase().includes(filterSpecialty.toLowerCase())
            )
            .map((doctor) => (
              <tr key={doctor.id}>
                <td>{doctor.name}</td>
                <td>{doctor.specialty}</td>
                <td>
                  <Link to='/order'><button>
                    Book Appointment
                  </button></Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {selectedDoctor && (
        <div className="booking-form">
          <h2>Book an Appointment with {selectedDoctor.name}</h2>
        </div>
      )}
    </div>
  );
}

export default BookAppointments;
