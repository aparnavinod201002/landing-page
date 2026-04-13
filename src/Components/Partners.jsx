import React from "react";
import "./partners.css";
import img7 from "../assets/img7.png";
import img8 from "../assets/img8.png";
import img9 from "../assets/img9.png";
import img10 from "../assets/img10.png";
import img11 from "../assets/img11.png";
function Partners() {
  return (
  <div className="partners">
  <div className="partner-item"><img src={img7} alt="Axon" /></div>
  <div className="partner-item"><img src={img8} alt="Jetstar" /></div>

  <div className="partner-item highlight">
    <img src={img9} alt="Expedia" />
  </div>

  <div className="partner-item"><img src={img10} alt="Qantas" /></div>
  <div className="partner-item"><img src={img11} alt="Alitalia" /></div>
</div>
  );
}

export default Partners;