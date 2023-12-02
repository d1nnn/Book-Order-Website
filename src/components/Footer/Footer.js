import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <ul>
        <h5 className="test">Useful Links</h5>
        <li>About Us</li>
        <li>BaBook Offices</li>
        <li>BaBook Professional</li>
        <li>Privacy Policy</li>
        <li>Terms & Conditions</li>
        <li>Cookie Policy</li>
      </ul>
      <ul>
        <h5>Customer Service</h5>
        <li>Contact Us</li>
        <li>Delivery</li>
        <li>Returns & Cancellations</li>
      </ul>
      <ul>
        <h5>Follow us</h5>
        <li>FB</li>
        <li>Insta</li>
        <li>Twitter</li>
        <li>Youtube</li>
      </ul>
    </div>
  );
};

export default Footer;
