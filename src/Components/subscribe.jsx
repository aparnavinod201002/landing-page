import React from "react";
import "./subscribe.css";

function Subscribe() {
  return (
    <section className="subscribe-section">
      
      {/* LOGOS */}
      <div className="logos">
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Expedia_Logo.svg" alt="" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/5/57/Qantas_Airways_logo_2016.svg" alt="" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Alitalia_logo.svg" alt="" />
      </div>

      {/* SUBSCRIBE BOX */}
      <div className="subscribe-box">
        <h2>
          Subscribe to get information, latest news and other
          interesting offers about Jadoo
        </h2>

        <div className="input-area">
          <input type="email" placeholder="Your email" />
          <button>Subscribe</button>
        </div>

        <div className="send-icon">✈</div>
      </div>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-left">
          <h2>Jadoo.</h2>
          <p>
            Book your trip in minute, get full Control for much longer.
          </p>
        </div>

        <div className="footer-links">
          <div>
            <h4>Company</h4>
            <p>About</p>
            <p>Careers</p>
            <p>Mobile</p>
          </div>

          <div>
            <h4>Contact</h4>
            <p>Help/FAQ</p>
            <p>Press</p>
            <p>Affiliates</p>
          </div>

          <div>
            <h4>More</h4>
            <p>Airlinefees</p>
            <p>Airline</p>
            <p>Low fare tips</p>
          </div>
        </div>

        <div className="footer-right">
          <div className="socials">
            <span><i class="fa-brands fa-facebook-f"></i></span>
            <span><i class="fa-brands fa-instagram"></i></span>
            <span><i class="fa-brands fa-twitter"></i></span>
          </div>

          <p>Discover our app</p>

          <div className="apps">
            <button>Google Play</button>
            <button>App Store</button>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default Subscribe;