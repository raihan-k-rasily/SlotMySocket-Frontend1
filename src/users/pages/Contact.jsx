import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../../components/Footer';
import './Contact.css'; // Import custom CSS

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert(`Message sent!\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-page">
      <Header />

      <main className="contact-main">
        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-subtitle">
          Have a question or feedback? Reach out to us and we’ll get back to you as soon as possible.
        </p>

        <div className="contact-container">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="contact-form">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              required
              rows="5"
            ></textarea>

            <button type="submit">Send Message</button>
          </form>

          {/* Contact Info */}
          <div className="contact-info">
            <div className="info-block">
              <h2>Our Office</h2>
              <p>123 Electric Ave, City, Country</p>
              <p>Email: support@slotmysocket.com</p>
              <p>Phone: +123 456 7890</p>
            </div>
            <div className="info-block">
              <h2>Follow Us</h2>
              <div className="social-links">
                <a href="#">Twitter</a>
                <a href="#">Facebook</a>
                <a href="#">Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Contact;
