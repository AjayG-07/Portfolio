import React, { useState } from 'react';
import { FaEnvelope, FaUser, FaRegCommentDots, FaMapMarkerAlt, FaPhoneAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', subject: '', message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message submitted!");
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section className="contact-footer-section contact">
      <div className="contact-container">
        <h2>Contact <span>Me</span></h2>

        <div className="contact-grid">
          <div className="contact-box">
            <FaMapMarkerAlt className="box-icon" />
            <h3>Location</h3>
            <p>Thane, India</p>
          </div>

          <div className="contact-box">
            <FaPhoneAlt className="box-icon" />
            <h3>Phone</h3>
            <p>+91 8591207996</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="input-group">
            <FaUser className="icon" />
            <input type="text" name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} />
          </div>

          <div className="input-group">
            <FaEnvelope className="icon" />
            <input type="email" name="email" placeholder="Your Email" required value={formData.email} onChange={handleChange} />
          </div>

          <div className="input-group">
            <FaRegCommentDots className="icon" />
            <input type="text" name="subject" placeholder="Subject" required value={formData.subject} onChange={handleChange} />
          </div>

          <textarea name="message" rows="5" placeholder="Your Message" required value={formData.message} onChange={handleChange}></textarea>

          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
      <br />

      <footer className="footer">
        <div className="footer-content">
          <h2>Let's Connect</h2>
          <p>Feel free to reach out via social platforms or email.</p>
          <div className="social-icons">
            <a href="https://github.com/AjayG-07/" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/ajaygaikwad07/" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="mailto:ajaygaikwad2556@gmail.com">
              <FaEnvelope />
            </a>
          </div>
          <p className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Ajay Gaikwad. All rights reserved. <br />
            MADE IN INDIA 🇮🇳
          </p>

        </div>
      </footer>
    </section>
  );
};

export default Contact;
