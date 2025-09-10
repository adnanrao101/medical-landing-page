import React from "react";
import "./About.css";
import pic1 from "./pic1.png"

function About() {
  return (
    <section className="about">

      {/* Left Section */}
      <div className="about-left">
        <img src={pic1} alt="doctor"/>
      </div>

      {/* Right Section */}
      <div className="about-right">
        
      </div>

      {/* Floating Appointment Button */}
      <button className="floating-btn">GET APPOINTMENT</button>

    </section>
  );
}

export default About;
