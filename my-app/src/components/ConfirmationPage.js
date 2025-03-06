import React, { useState } from "react"; 
import { useLocation, useNavigate } from "react-router-dom";

const ConfirmationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { vendor, name, email, date, time } = location.state || {};

  const confirmStyle = {
    height: "100vh",
    width: "100%",
    background: "url('https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2') no-repeat center center fixed",
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  };

  const containerStyle = {
    maxWidth: "500px",
    margin: "50px auto",
    padding: "2rem",
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    fontFamily: "Arial, sans-serif"
  };

  const headerStyle = {
    color: "#3498db", 
    marginBottom: "1rem",
    fontSize: "1.8rem"
  };

  const textStyle = {
    color: "#333",
    fontSize: "1rem",
    marginBottom: "0.75rem"
  };

  const boldStyle = {
    fontWeight: 600
  };

  const buttonStyle = {
    marginTop: "1.5rem",
    padding: "0.75rem 1.5rem",
    fontSize: "1rem",
    color: "#fff",
    backgroundColor: "#3498db", 
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    marginRight: "10px"
  };

  const cancelButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#e74c3c" 
  };

  const [isHover, setIsHover] = useState(false);
  const handleMouseEnter = () => setIsHover(true);
  const handleMouseLeave = () => setIsHover(false);

  const hoverButtonStyle = {
    ...buttonStyle,
    backgroundColor: isHover ? "#2980b9" : buttonStyle.backgroundColor 
  };

  return (
    <div style={confirmStyle}>
      <div style={containerStyle}>
        <h2 style={headerStyle}>Booking Confirmed!</h2>
        <p style={textStyle}>
          <strong style={boldStyle}>Name:</strong> {name}
        </p>
        <p style={textStyle}>
          <strong style={boldStyle}>Email:</strong> {email}
        </p>
        <p style={textStyle}>
          <strong style={boldStyle}>Service:</strong> {vendor}
        </p>
        <p style={textStyle}>
          <strong style={boldStyle}>Date:</strong> {date}
        </p>
        <p style={textStyle}>
          <strong style={boldStyle}>Time:</strong> {time}
        </p>
        <button
          style={hoverButtonStyle}
          onClick={() => navigate("/")}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Go to Home
        </button>
        <button
          style={cancelButtonStyle}
          onClick={() => navigate("/cancel-appointment", { state: { vendor, name, email, date, time } })}
        >
          Cancel Appointment
        </button>
      </div>
    </div>
  );
};

export default ConfirmationPage;
