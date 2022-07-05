import React from 'react'
import "./FooterStyle.css"


function FooterNew() {
  return (
    <footer>
      <div className="footer-content">
        <h3>BookMyShow</h3>
        <p>BookMyShow offers showtimes, movie tickets, reviews, trailers, concert tickets and events near Mumbai . Also features promotional offers, coupons and mobile.The company is currently India's largest entertainment ticketing platform. BookMyShow started out in 1999 as a software re-seller for movie theaters and converted into a platform catering to cloud-based ticket booking of events, movies, sports, and plays.</p>
      </div>
      <div className="footerbottom">
        <p>copyright &copy; <a href="www.bookmyshow.com" style={{ textDecoration: 'none' }}><span style={{ color: 'white' }} >BookMyShow by Satpal</span></a></p>
      </div>
    </footer>
  )
}

export default FooterNew;
