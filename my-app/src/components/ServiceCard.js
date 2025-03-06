import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ServiceCard.css"; // Import CSS

const ServiceCard = ({ service }) => {
  const navigate = useNavigate(); // Hook for navigation

  const handleBooking = () => {
    navigate(`/book/${service.name}`); // Redirect to booking form
  };

  return (
    <div className="service-card">
      <img src={service.image} alt={service.name} className="service-img" />
      <h3>{service.name}</h3>
      <p>{service.description}</p>
      <button onClick={handleBooking} className="book-btn">Book Now</button>
    </div>
  );
};

export default ServiceCard;

