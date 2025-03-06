import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css"; 

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* Banner Section */}
      <div className="banner">
        <img
          src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Welcome Banner"
          className="banner-img"
        />
        <div className="banner-text">
          <h1>Welcome to Our Booking System</h1>
          <p>Book appointments for salons, events, and hospitals with ease!</p>
        </div>
      </div>

      { }
      <div className="services">
        <button className="services-button" onClick={() => navigate("/booking")}>
          Our Services
        </button>
        <div className="service-list">
          {[
            { name: "Easy Booking", image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600" },
            { name: "Verified Vendors", image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600" },
            { name: "Flexible Scheduling", image: "https://images.pexels.com/photos/3184451/pexels-photo-3184451.jpeg?auto=compress&cs=tinysrgb&w=600" }
          ].map((service, index) => (
            <div 
              key={index} 
              className="service-card" 
              onClick={() => navigate("/booking")}
            >
              <img src={service.image} alt={service.name} />
              <p>{service.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
