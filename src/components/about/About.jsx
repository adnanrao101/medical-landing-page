import React from "react";
import "./About.css";
import pic1 from "./pic1.png";
import pic2 from "./pic2.png";
import pic3 from "./pic3.png";
import pic4 from "./pic4.png";

function About() {
  return (
    <section className="about">

      {/* Left Section */}
      <div className="about-left">
        <img src={pic1} alt="doctor"/>
      </div>

      {/* Right Section */}
      <div className="about-right">
      <h4 className="about-subtitle">ABOUT US</h4>
      <h2 className="about-title">Ready to Transform Your Smile?</h2>
      <p className="about-text">
        At City Dental Care in Edinburgh, we use the best services and technology 
        in a friendly environment to enhance patient’s lives. We are a team of dentists 
        with more than 20 years of experience and aim to ensure that every patient 
        receives a comfortable dental experience, ranging from a simple examination 
        to cosmetic surgery.
      </p>

        <div className="info-box">
          <div className="div-img">
            <img src={pic2} alt="" />
          </div>

          <div className="div-hp">
          <h3>Trusted Dental Experts in Edinburgh</h3>
          <p>
            Our expert team uses advanced tools to provide you and your family
            with top-quality dental care in Edinburgh.
          </p>

          </div>
        </div>

        <div className="info-box">

          <div className="div-img">
          <img id="img3" src={pic3} alt="" />
          </div>
          <div className="div-hp">
          <h3>Comprehensive and Affordable Dental Solutions</h3>
          <p>
            We offer dental treatments for all clients, which may include
            general checkups, cleanings, and complex cosmetic dentistry.
          </p>

          </div>
        </div>

        <div className="info-box">

          <div className="div-img">
          <img id="img4" src={pic4} alt="" />
          </div>
          <div className="div-hp">
          <h3>Caring for the Personalised Smile of Each Patient</h3>
          <p>
            From simple Invisalign treatments to an extreme smile makeover, the
            procedures that are followed depend on your requirements.
          </p>

          </div>
        </div>

        {/* Buttons */}
        <div className="buttons">
          <button className="btn book-btn">
            PAIN-FREE DENTISTRY – BOOK NOW!
          </button>
          <button className="btn phone-btn">📞 0131 228 2442</button>
        </div>
      </div>

      {/* Floating Appointment Button */}
      {/* <button className="floating-btn">GET APPOINTMENT</button> */}

    </section>
  );
}

export default About;
