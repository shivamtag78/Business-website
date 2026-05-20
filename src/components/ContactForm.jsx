import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    area: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    // The URL of your Google Apps Script Web App
    // Replace this string with the URL you get after deploying the script
    const scriptUrl = 'https://script.google.com/macros/s/AKfycbzZxUKKWzbjU_y5B22gwnm_0qA1YUs-AXzCM6TpqtVVWww9hGYbNhkiIrSD4CSlcWw5/exec';

    try {
      const form = new FormData();
      form.append('name', formData.name);
      form.append('phone', formData.phone);
      form.append('location', formData.location);
      form.append('area', formData.area);
      form.append('timestamp', new Date().toISOString());

      const response = await fetch(scriptUrl, {
        method: 'POST',
        // mode: 'no-cors' is often required for Google Apps Script to prevent CORS errors
        mode: 'no-cors',
        body: form,
      });

      // Because of 'no-cors', response.ok will be false and status will be 0 even on success.
      // We assume success if it didn't throw an error.
      setSubmitMessage('Thank you! Your quote request has been submitted. We will contact you shortly.');
      setFormData({ name: '', phone: '', location: '', area: '' });

    } catch (error) {
      console.error('Error!', error.message);
      setSubmitMessage('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="contact-wrapper">
          <div className="contact-info">
            <h2>Ready to Build?</h2>
            <p>Get a precise estimate for your next structural project in Lucknow. Fill out the form, and our experts will assess your requirements.</p>
            <div className="info-cards">
              <div className="info-card">
                <span className="icon">📞</span>
                <div>
                  <h4>Call Suneel </h4>
                  <p><a href="tel:+919936259816" style={{ color: 'inherit', textDecoration: 'none' }}>+91 9936259816</a></p>
                </div>
              </div>
              <div className="info-card">
                <span className="icon">📧</span>
                <div>
                  <h4>Email Us</h4>
                  <p><a href="mailto:suashaenterprise1@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>suashaenterprise1@gmail.com</a></p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <h3>Request a Quote</h3>
            <form onSubmit={handleSubmit} className="quote-form">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Enter your name" disabled={isSubmitting} />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required placeholder="+91" disabled={isSubmitting} />
              </div>
              <div className="form-group">
                <label htmlFor="location">Site Location (e.g., Gomti Nagar) *</label>
                <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} required placeholder="Where is your site?" disabled={isSubmitting} />
              </div>
              <div className="form-group">
                <label htmlFor="area">Estimated Area (sq. ft.) *</label>
                <input type="number" id="area" name="area" value={formData.area} onChange={handleChange} required placeholder="e.g. 1500" disabled={isSubmitting} />
              </div>

              {submitMessage && (
                <div className={`submit-message ${submitMessage.includes('wrong') ? 'error' : 'success'}`} style={{ marginBottom: '15px', color: submitMessage.includes('wrong') ? 'red' : 'green', fontWeight: '500' }}>
                  {submitMessage}
                </div>
              )}

              <button type="submit" className="btn-primary form-submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Get Estimate'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
