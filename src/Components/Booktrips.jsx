import React from 'react'
import './BookTrips.css'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.png'

const steps = [
  {
    icon: '⊡',
    bg: '#F1A501',
    title: 'Choose Destination',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.',
  },
  {
    icon: '⛵',
    bg: '#F15A29',
    title: 'Make Payment',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.',
  },
  {
    icon: '🚕',
    bg: '#006380',
    title: 'Reach Airport on Selected Date',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.',
  },
]

function BookTrip() {
  return (
    <section className="booktrip">

      {/* LEFT */}
      <div className="booktrip-left">
        <p className="booktrip-tag">Easy and Fast</p>
        <h2 className="booktrip-title">
          Book Your Next Trip<br />
          In 3 Easy Steps
        </h2>

        <div className="steps">
          {steps.map((s, i) => (
            <div key={i} className="step">
              <div
                className="step-icon"
                style={{ background: s.bg }}
              >
                <span>{s.icon}</span>
              </div>
              <div className="step-text">
                <h4 className="step-title">{s.title}</h4>
                <p className="step-desc">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT — card UI */}
      <div className="booktrip-right">

        {/* main trip card */}
        <div className="trip-card">
          <div className="trip-img-wrap">
            <img src={img4} alt="Greece" className="trip-img" />
          </div>
          <div className="trip-info">
            <h3 className="trip-name">Trip To Greece</h3>
            <p className="trip-meta">14–29 June &nbsp;|&nbsp; by Robbin jo</p>
            <div className="trip-icons">
              <div className="trip-icon-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C8 2 4 5.5 4 10c0 6 8 12 8 12s8-6 8-12c0-4.5-4-8-8-8z"
                    stroke="#5E6282" strokeWidth="2" fill="none"/>
                  <circle cx="12" cy="10" r="3" stroke="#5E6282" strokeWidth="2"/>
                </svg>
              </div>
              <div className="trip-icon-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="3" width="18" height="18" rx="2"
                    stroke="#5E6282" strokeWidth="2"/>
                  <path d="M3 9h18M9 21V9" stroke="#5E6282" strokeWidth="2"/>
                </svg>
              </div>
              <div className="trip-icon-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13"
                    stroke="#5E6282" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div className="trip-people">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
                  stroke="#5E6282" strokeWidth="2"/>
                <circle cx="9" cy="7" r="4" stroke="#5E6282" strokeWidth="2"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
                  stroke="#5E6282" strokeWidth="2"/>
              </svg>
              <span>24 people going</span>
              <svg className="heart" width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                  stroke="#F1A501" strokeWidth="2" fill="none"/>
              </svg>
            </div>
          </div>
        </div>

        {/* floating ongoing card */}
        <div className="ongoing-card">
          <img src={img5} alt="Rome" className="ongoing-img" />
          <div className="ongoing-info">
            <p className="ongoing-label">Ongoing</p>
            <p className="ongoing-name">Trip to rome</p>
            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>
            <p className="progress-text">
              <span className="pct">40%</span> completed
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default BookTrip