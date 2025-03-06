import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/BookingForm.css"; 

const BookingForm = () => {
  const { service, vendor } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    shopName: vendor,  
    location: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/confirmation", { state: { service, vendor, ...formData } });
  };

  return (
    <div className="booking-page">
      <div className="booking-container">
        <h2 style={{ color:"#007bff", textAlign: "center" }}>Book an Appointment with {vendor}</h2>

        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />

          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />

          <label>Date:</label>
          <input type="date" name="date" value={formData.date} onChange={handleChange} required />

          <label>Time:</label>
          <input type="time" name="time" value={formData.time} onChange={handleChange} required />

          <label>Shop Name:</label>
          <input type="text" name="shopName" value={formData.shopName} readOnly />

          <button type="submit">Confirm Booking</button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
