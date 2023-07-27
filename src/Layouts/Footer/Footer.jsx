// Footer.js
import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h2>Work Hours</h2>
          <p>Monday - Friday: 8:00 AM - 8:00 PM</p>
          <p>Saturday: 9:00 AM - 5:00 PM</p>
          <p>Sunday: Closed</p>
        </div>
        <div className="footer-section">
          <h2>Contact Us</h2>
          <p>Email: info@fitnessapp.com</p>
          <p>Phone: +1 (123) 456-7890</p>
          <p>Address: 123 Fitness Street, City, Country</p>
        </div>
        <div className="footer-section">
          <h2>Follow Us</h2>
          <div className="social-links">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Fitness App. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
