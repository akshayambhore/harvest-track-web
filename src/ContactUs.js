import React from 'react';

const ContactUs = () => {
  return (
    <div className="page-container">
      <h1>Contact Us</h1>
      <p>We are here to help you with any issues regarding Harvest Track.</p>

      <section>
        <h2>Support Channels</h2>
        <p><strong>Email:</strong> support@harvesttrack.com</p>
        <p><strong>Phone:</strong> +91 98765 43210</p>
        <p><strong>Address:</strong> [Your Physical Address Here]</p>
      </section>

      <section>
        <h2>Send us a message</h2>
        <form style={{maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '10px'}}>
            <div>
                <label>Name:</label><br/>
                <input type="text" name="name" required style={{width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--surface-color)', color: 'var(--text-color)', marginTop: '5px'}} />
            </div>
            <div>
                <label>Email:</label><br/>
                <input type="email" name="email" required style={{width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--surface-color)', color: 'var(--text-color)', marginTop: '5px'}} />
            </div>
            <div>
                <label>Message:</label><br/>
                <textarea name="message" required style={{width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--surface-color)', color: 'var(--text-color)', minHeight: '120px', marginTop: '5px'}}></textarea>
            </div>
            <button type="submit" className="btn btn-primary" style={{marginTop: '10px'}}>Submit</button>
        </form>
      </section>
    </div>
  );
};

export default ContactUs;