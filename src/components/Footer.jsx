// src/components/Footer.jsx
import React, { useEffect, useState } from "react";
import "../styles/Footer.css";

export default function Footer() {
  const [dateTime, setDateTime] = useState(new Date());
  const [location, setLocation] = useState("Detecting...");

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Ask for location (will trigger browser prompt if not saved)
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          const { latitude, longitude } = pos.coords;
          try {
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
            );
            const data = await response.json();
            setLocation(
              `${data.address.city || data.address.town || data.address.village || "Unknown"}, ${data.address.country}`
            );
          } catch (error) {
            setLocation("Location unavailable");
          }
        },
        () => setLocation("Location denied")
      );
    } else {
      setLocation("Geolocation not supported");
    }
  }, []);

  // Format date + time
  const formattedDate = dateTime.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  const formattedTime = dateTime.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <footer className="footer">
      {/* LEFT SIDE */}
      <div className="footer-left">
        <p>© {new Date().getFullYear()} Lawal Abiola. All Rights Reserved.</p>
        <div className="social-links">
          <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noreferrer">Twitter</a>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="footer-right fade-in">
        <span>{formattedDate}</span>
        <span>{formattedTime}</span>
        <span className="location">{location}</span>
      </div>
    </footer>
  );
}

