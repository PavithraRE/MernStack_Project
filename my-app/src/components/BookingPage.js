import React from "react"; 
import { useNavigate } from "react-router-dom";
import "../styles/BookingPage.css"; 

const BookingPage = () => {
  const navigate = useNavigate();

  const services = [
    { name: "Salon", image: "https://images.pexels.com/photos/3993133/pexels-photo-3993133.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { name: "Event", image: "https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { name: "Tutoring", image: "https://images.pexels.com/photos/3184641/pexels-photo-3184641.jpeg?auto=compress&cs=tinysrgb&w=600" },
 
    { name: "Spa", image: "https://images.pexels.com/photos/5240820/pexels-photo-5240820.jpeg?auto=compress&cs=tinysrgb&w=600"},
    { name: "Fitness", image: "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { name: "Car Repair", image: "https://images.pexels.com/photos/4489749/pexels-photo-4489749.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { name: "Photography", image: "https://images.pexels.com/photos/274973/pexels-photo-274973.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { name: "Hospital", image: "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=600" },
  ];

  const handleBooking = (service) => {
    navigate(`/shops/${service}`);  
  };

  return (
    <div className="booking-page">
      <h2>Select a Service</h2>
      <div className="service-list">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <img src={service.image} alt={service.name} />
            <h3>{service.name} Appointment</h3>
            <button onClick={() => handleBooking(service.name)}>Choose Vendor</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingPage;
