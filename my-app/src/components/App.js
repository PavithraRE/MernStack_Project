import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import Home from "./Home";
import BookingPage from "./BookingPage";
import ShopsPage from "./ShopsPage";
import BookingForm from "./BookingForm";
import ConfirmationPage from "./ConfirmationPage";
import CancelAppointment from "./CancelAppointment";  // Import Cancel Page
import LoginPage from "./LoginPage";
import Navbar from "./Navbar";
import ProtectedRoute from "./ProtectedRoute";
import "../styles/App.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Layout />
      </Router>
    </AuthProvider>
  );
}

const Layout = () => {
  const location = useLocation();
  const showNavbar = ["/", "/booking", "/shops"].some((path) => location.pathname.startsWith(path));

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/shops/:service" element={<ShopsPage />} />
        <Route path="/book/:service/:vendor" element={<ProtectedRoute><BookingForm /></ProtectedRoute>} />
        <Route path="/confirmation" element={<ProtectedRoute><ConfirmationPage /></ProtectedRoute>} />
        <Route path="/cancel-appointment" element={<ProtectedRoute><CancelAppointment /></ProtectedRoute>} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
};

export default App;


