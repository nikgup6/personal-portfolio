// src/components/Contact.js
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number:'',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState(''); // To display success/error messages

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...'); // Set status while sending

    try {
      // Ensure this URL matches your backend.
      // If deployed, replace 'http://localhost:5000' with your backend's domain.
      const response = await fetch('https://personal-portfolio-2tio.onrender.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', number:'', subject: '', message: '' }); // Clear form
      } else {
        setStatus(`Failed to send message: ${result.message || 'Unknown error'}`);
        console.error('Backend error:', result.error);
      }
    } catch (error) {
      setStatus('Failed to send message. Please check your network connection.');
      console.error('Frontend fetch error:', error);
    }
  };

  return (
    <div className="container text-center">
      <h2>Get In Touch</h2>
      <p>I'd love to hear from you! Please fill out the form below.</p>
      <div className="contact-form-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="mobilenumber">Mobile Number</label>
            <input
              type="tel"
              id="number"
              name="number"
              value={formData.number}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Send Message</button>
          {status && <p className="status-message" style={{ marginTop: '1rem', color: status.includes('successfully') ? 'green' : 'red' }}>{status}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;