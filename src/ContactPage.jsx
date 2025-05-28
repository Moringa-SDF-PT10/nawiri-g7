// src/ContactPage.jsx
import nawiri_contact from "./assets/nawiri_contact.jpg";
import React, { useState, useEffect } from "react";
import "./App.css";

function ContactPage() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    document.title = "Contact Us";
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent: " + message);
    setMessage("");
  };

  return (
    <div className="split-container">
      <div className="left-pane">
        <h1>Contact Us</h1>
        <p>If you have any enquiries, please contact us here.</p>
        <form onSubmit={handleSubmit} className="contact-form">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message"
            rows="5"
            cols="30"
            required
          />
          <br />
          <button type="submit" className="primary-button">Send Message</button>
        </form>
      </div>
      <div className="right-pane">
        <img src={nawiri_contact} alt="Nariri School" className="full-image" />
      </div>
    </div>
  );
}

export default ContactPage;
