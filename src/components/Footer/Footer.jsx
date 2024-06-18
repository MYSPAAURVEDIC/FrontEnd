// Footer.js
import React from 'react';
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
        <p>
          <a href="/terms">Terms of Service</a> | <a href="/privacy">Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
