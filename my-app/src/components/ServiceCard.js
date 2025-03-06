import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ServiceCard.css"; 

const ServiceCard = ({ service }) => {
  const navigate = useNavigate(); 

  const handleBooking = () => {
    navigate(`/book/${service.name}`); 
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

