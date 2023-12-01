import React from 'react';
import './Footer.css'
const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>Our Netflix  brings you the best in entertainment. Explore a vast library of movies and TV shows.</p>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: info@yournetflixclone.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <ul className="social-icons">
            <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
          </ul>
        </div>
      </div>

      <div className="copyright">
        <p>&copy; 2023  Netflix. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
