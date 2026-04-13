import React, { useState, useEffect } from "react";
import "./Testimonials.css";
import img6 from "../assets/img6.png";

function Testimonials() {
  const [index, setIndex] = useState(0);

  const testimonials = [
    {
      name: "Mike Taylor",
      role: "Lahore, Pakistan",
      text: "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
      img: img6,
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonials">
      <div className="container">
        {/* LEFT SIDE */}
        <div className="left">
          <p className="subtitle">TESTIMONIALS</p>
          <h2>
            What People Say <br /> About Us.
          </h2>

          <div className="dots">
            {testimonials.map((_, i) => (
              <span
                key={i}
                className={i === index ? "active" : ""}
                onClick={() => setIndex(i)}
              ></span>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="right">
          <div className="card">
            <img
              src={testimonials[index].img}
              alt=""  style={{ width: "40px", height: "40px" }}
              className="avatar"
            />
            <p className="text">“{testimonials[index].text}”</p>
            <h4>{testimonials[index].name}</h4>
            <span>{testimonials[index].role}</span>
          </div>
        </div>
      </div>

      {/* LOGOS */}
      <div className="logos">
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Expedia_Logo.svg" alt="" />
      </div>
    </section>
  );
}

export default Testimonials;