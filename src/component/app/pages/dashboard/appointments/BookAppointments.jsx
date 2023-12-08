import React, { useEffect, useState } from "react";
import "./DoctorTable.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function BookAppointments() {
  const [doctors, setDoctorData] = useState([]);
  const [filterName, setFilterName] = useState("");
  const [filterSpecialty, setFilterSpecialty] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const navigate = useNavigate();

  const fetchDoctorData = async () => {
    try {
      const response = await axios.get("http://localhost:8082/doctorData");
      setDoctorData(response.data);
    } catch (error) {
      console.error("Error fetching feedback data:", error);
    }
  };

  useEffect(() => {
    fetchDoctorData();
  }, []);

  const handleNameFilterChange = (e) => {
    setFilterName(e.target.value);
  };

  const handleSpecialtyFilterChange = (e) => {
    setFilterSpecialty(e.target.value);
  };

  const handleBookAppointment = (doctor) => {
    setSelectedDoctor(doctor);
    navigate(`/order?doctorName=${doctor.name}`);
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
              doctor.specialization.toLowerCase().includes(filterSpecialty.toLowerCase())
            )
            .map((doctor) => (
              <tr key={doctor.id}>
                <td>{doctor.name}</td>
                <td>{doctor.specialization}</td>
                <td>
                  <button onClick={() => handleBookAppointment(doctor)}>
                    Book Appointment
                  </button>
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
