import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/CancelAppointment.css"; 

const CancelAppointment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { vendor, date, time } = location.state || {};

  useEffect(() => {
    console.log("Cancel Page Loaded");
    console.log("Received Data:", location.state);
  }, [location.state]);

  const [confirmationMessage, setConfirmationMessage] = useState("");

  const handleCancel = () => {
    setConfirmationMessage("✅Your appointment has been successfully canceled.");
    setTimeout(() => navigate("/"), 3000); 
  };

  return (
    <div className="cancel-container">
      <div className="cancel-box">
        <h2 className="cancel-title">Cancel Appointment</h2>
        {location.state ? (
          <>
            <p className="cancel-text">Are you sure you want to cancel your appointment?</p>
            <p className="cancel-detail"><strong>Service:</strong> {vendor}</p>
            <p className="cancel-detail"><strong>Date:</strong> {date}</p>
            <p className="cancel-detail"><strong>Time:</strong> {time}</p>

            <div className="cancel-buttons">
              <button className="cancel-btn cancel-yes" onClick={handleCancel}>
                Yes, Cancel
              </button>
              <button className="cancel-btn cancel-no" onClick={() => navigate("/")}>
                No, Go Back
              </button>
            </div>
          </>
        ) : (
          <p className="cancel-error">Error: No booking details found.</p>
        )}
        {confirmationMessage && <p className="cancel-message">{confirmationMessage}</p>}
      </div>
    </div>
  );
};

export default CancelAppointment;
