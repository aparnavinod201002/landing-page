import React, { useState } from 'react'
import traveller from '../assets/traveller.png'
import './Hero.css'

function Hero() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="hero-wrapper">

      {/* NAVBAR */}
      <nav className="navbar">

        <h1 className="logo">
          Jad
          <span className="logo-oo">
            <span className="logo-circle-outer">
              <span className="logo-circle-inner"></span>
            </span>
          </span>
          <span className="logo-oo">
            <span className="logo-circle-outer">
              <span className="logo-circle-inner"></span>
            </span>
          </span>
        </h1>

        {/* MENU ICON */}
        <div 
          className="menu-toggle"
          onClick={() => setMenuOpen(prev => !prev)}
        >
          ☰
        </div>

        {/* NAV LINKS */}
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li onClick={() => setMenuOpen(false)}>Destinations</li>
          <li onClick={() => setMenuOpen(false)}>Hotels</li>
          <li onClick={() => setMenuOpen(false)}>Flights</li>
          <li onClick={() => setMenuOpen(false)}>Bookings</li>
        </ul>

        <div className="nav-right">
          <button className="btn-login">Login</button>
          <button className="btn-signup">Sign up</button>
          <span className="lang">EN ▾</span>
        </div>

      </nav>

      {/* HERO */}
      <section className="hero">

        <div className="hero-left">
          <p className="tag">Best Destinations Around The World</p>

          <h2 className="hero-title">
            Travel, <span className="highlight">enjoy</span><br />
            and live a new<br />
            and full life
          </h2>

          <p className="hero-desc">
            Built Wicket longer admire do barton vanity itself do in it.
          </p>

          <div className="hero-btns">
            <button className="btn-find">Find out more</button>

            <div className="btn-play">
              <div className="play-circle">
                ▶
              </div>
              <span className="play-label">Play Demo</span>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="beige-circle"></div>
          <img src={traveller} alt="traveller" className="hero-image" />
        </div>

      </section>

    </div>
  )
}

export default Hero