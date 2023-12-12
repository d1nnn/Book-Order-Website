import React from "react";
import "./Footer.css";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faYoutube,
  faGithub,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

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
        <FontAwesomeIcon icon={faFacebook} className="fb p-1"></FontAwesomeIcon>
        <FontAwesomeIcon
          icon={faInstagram}
          className="insta p-1"
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          icon={faTwitter}
          className="twitter p-1"
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          icon={faGithub}
          className="github p-1"
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          icon={faYoutube}
          className="youtube p-1"
        ></FontAwesomeIcon>
      </ul>
    </div>
  );
};

export default Footer;
