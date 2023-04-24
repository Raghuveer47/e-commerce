import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-section'>
        <h3>About Us</h3>
        <p>We are a company that sells various products online. We strive to provide the best customer service and quality products at affordable prices.</p>
      </div>
      <div className='footer-section'>
        <h3>Product Categories</h3>
        <ul className='footer-list'>
          <li><Link to='/category1'>Category 1</Link></li>
          <li><Link to='/category2'>Category 2</Link></li>
          <li><Link to='/category3'>Category 3</Link></li>
          <li><Link to='/category4'>Category 4</Link></li>
        </ul>
      </div>
      <div className='footer-section'>
        <h3>Follow Us</h3>
        <div className='social-icons'>
          <a href='#'><FaFacebookF /></a>
          <a href='#'><FaTwitter /></a>
          <a href='#'><FaInstagram /></a>
          <a href='#'><FaLinkedinIn /></a>
        </div>
      </div>
      <div className='footer-section'>
        <h3>Contact Us</h3>
        <ul className='footer-list'>
          <li>Email: example@example.com</li>
          <li>Phone: (123) 456-7890</li>
          <li>Address: 123 Main St, Anytown USA</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
