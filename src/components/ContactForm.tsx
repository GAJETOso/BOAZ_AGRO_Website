"use client";

import { useState } from "react";
import { interestOptions } from "../data/contact";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label>First Name</label>
          <input type="text" placeholder="John" required />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input type="text" placeholder="Doe" required />
        </div>
      </div>
      <div className="form-group">
        <label>Email Address</label>
        <input type="email" placeholder="john@company.com" required />
      </div>
      <div className="form-group">
        <label>Organisation</label>
        <input type="text" placeholder="Company / Institution" />
      </div>
      <div className="form-group">
        <label>Area of Interest</label>
        <select defaultValue="">
          <option value="">Select a division...</option>
          {interestOptions.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label>Message</label>
        <textarea placeholder="Tell us about your project or enquiry..." />
      </div>
      <button
        type="submit"
        className="submit-btn"
        style={submitted ? { background: "var(--lime)" } : undefined}
      >
        {submitted ? "✓ Enquiry Sent!" : "Send Enquiry →"}
      </button>
    </form>
  );
}
