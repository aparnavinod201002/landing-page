import React from 'react'
import './Destinations.css'
import img1   from '../assets/img1.png'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.png'

const destinations = [
  {
    img:   img1,
    name:  'Rome, Italy',
    price: '$5,42k',
    days:  '10 Days Trip',
  },
  {
    img:   img2,
    name:  'London, UK',
    price: '$4.2k',
    days:  '12 Days Trip',
  },
  {
    img:   img3,
    name:  'Full Europe',
    price: '$15k',
    days:  '28 Days Trip',
  },
]

function Destinations() {
  return (
    <section className="destinations">

      <p className="dest-tag">Top Selling</p>
      <h2 className="dest-title">Top Destinations</h2>

      <div className="dest-grid">
        {destinations.map((d) => (
          <div key={d.name} className="dest-card">

            {/* image */}
            <div className="dest-img-wrap">
              <img src={d.img} alt={d.name} className="dest-img" />
            </div>

            {/* info */}
            <div className="dest-info">
              <div className="dest-row">
                <span className="dest-name">{d.name}</span>
                <span className="dest-price">{d.price}</span>
              </div>
              <div className="dest-days">
                {/* paper plane arrow icon */}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13"
                    stroke="#F1A501"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>{d.days}</span>
              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  )
}

export default Destinations