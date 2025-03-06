
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/ShopsPage.css";

const shopData = {
  Salon: [
    { name: "Luxury Salon", image: "https://images.pexels.com/photos/3993133/pexels-photo-3993133.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { name: "Elite Hair Studio", image: "https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { name: "Glam Beauty Bar", image: "https://images.pexels.com/photos/3738355/pexels-photo-3738355.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { name: "Radiance Salon", image: "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { name: "Chic Hair Lounge", image: "https://images.pexels.com/photos/853427/pexels-photo-853427.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { name: "Style Studio", image: "https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=600" },

  ],
  Event: [
    { name: "Grand Celebrations", image: "https://images.pexels.com/photos/1766733/pexels-photo-1766733.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { name: "Elegant Events", image: "https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { name: "Party Pros", image: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=600" }
  ],
  Hospital: [
    { name: "City Hospital", image: "https://images.pexels.com/photos/2324837/pexels-photo-2324837.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { name: "Wellness Clinic", image: "https://images.pexels.com/photos/3845122/pexels-photo-3845122.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { name: "MediCare Center", image: "https://images.pexels.com/photos/7088482/pexels-photo-7088482.jpeg?auto=compress&cs=tinysrgb&w=600" }
  ],
  Spa: [
    { name: "Relax Spa", image: "https://images.pexels.com/photos/4056946/pexels-photo-4056946.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { name: "Zen Wellness", image: "https://images.pexels.com/photos/6621307/pexels-photo-6621307.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { name: "Blissful Escape", image: "https://images.pexels.com/photos/3822837/pexels-photo-3822837.jpeg?auto=compress&cs=tinysrgb&w=600" }
  ],
  Fitness: [
    { name: "Power Gym", image: "https://images.pexels.com/photos/3838388/pexels-photo-3838388.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { name: "FitZone", image: "https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { name: "Athletic Club", image: "https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg?auto=compress&cs=tinysrgb&w=600" }
  ],
  "Car Repair": [
    { name: "AutoFix", image: "https://images.pexels.com/photos/3807275/pexels-photo-3807275.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { name: "Speedy Repairs", image: "https://images.pexels.com/photos/4489749/pexels-photo-4489749.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { name: "CarCare Garage", image: "https://images.pexels.com/photos/3806245/pexels-photo-3806245.jpeg?auto=compress&cs=tinysrgb&w=600" }
  ],
  Photography: [
    { name: "Studio One", image: "https://images.pexels.com/photos/274973/pexels-photo-274973.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { name: "Creative Lens", image: "https://images.pexels.com/photos/3585013/pexels-photo-3585013.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { name: "Pixel Perfect", image: "https://images.pexels.com/photos/1447266/pexels-photo-1447266.jpeg?auto=compress&cs=tinysrgb&w=600" }
  ],
  Tutoring: [
    { name: "Smart Tutors", image: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { name: "Learn Hub", image: "https://images.pexels.com/photos/5212325/pexels-photo-5212325.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { name: "Knowledge Tree", image: "https://images.pexels.com/photos/5212342/pexels-photo-5212342.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { name: "Genius Academy", image: "https://images.pexels.com/photos/4144222/pexels-photo-4144222.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { name: "Bright Minds Tutoring", image: "https://images.pexels.com/photos/5212331/pexels-photo-5212331.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { name: "NextGen Learning", image: "https://images.pexels.com/photos/5212335/pexels-photo-5212335.jpeg?auto=compress&cs=tinysrgb&w=600" }
  ]
};

const ShopsPage = () => {
  const { service } = useParams();
  const navigate = useNavigate();
  const shops = shopData[service] || [];

  return (
    <div className="shops-page">
      <h2>Available {service} Shops</h2>
      <div className="shop-list">
        {shops.map((shop, index) => (
          <div key={index} className="shop-card" onClick={() => navigate(`/book/${service}/${shop.name}`)}>
            <img src={shop.image} alt={shop.name} />
            <h3>{shop.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopsPage;
