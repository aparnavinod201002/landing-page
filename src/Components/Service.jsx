import React from 'react'
import './Service.css'

const services = [
  {
    name: 'Calculated Weather',
    desc: 'Built Wicket longer admire do barton vanity itself do in it.',
    bg: '#FFF9EE',
  },
  {
    name: 'Best Flights',
    desc: 'Engrossed listening. Park gate sell they west hard for the.',
    bg: '#F0F7FF',
    active: true,
  },
  {
    name: 'Local Events',
    desc: 'Barton vanity itself do in it. Preferd to men it engrossed listening.',
    bg: '#F5F5F5',
  },
  {
    name: 'Customization',
    desc: 'We deliver outsourced aviation services for military customers.',
    bg: '#FFF5F0',
  },
]

function Services() {
  return (
    <section className="services">

      {/* dots decoration */}
      <div className="dots-deco">
        {Array(20).fill(null).map((_, i) => (
          <div
            key={i}
            className={`dot ${i === 0 ? 'dot-red' : i === 6 ? 'dot-orange' : ''}`}
          />
        ))}
      </div>

      <p className="section-tag">Category</p>
      <h2 className="section-title">We Offer Best Services</h2>

      <div className="services-grid">
        {services.map((s) => (
          <div
            key={s.name}
            className={`service-card ${s.active ? 'active' : ''}`}
          >
            <div className="icon-box" style={{ background: s.bg }}>
              {/* <img src={s.img} alt={s.name} className="service-img" /> */}
            </div>

            <h3 className="service-name">{s.name}</h3>
            <p className="service-desc">{s.desc}</p>
          </div>
        ))}
      </div>

    </section>
  )
}

export default Services