"use client";
import { useState } from "react";
import "./contact-form/contact-form.scss";
import { PostAPI } from "@/api/api";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    reason: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [feedbackMessage, setFeedbackMessage] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setFeedbackMessage("");

    try {
      const response = await PostAPI("/contacts", formData);
      if (response && (response.status === 200 || response.status === 201)) {
        setStatus("sent");
        setFeedbackMessage("Thank you! Your message has been sent successfully.");
        setFormData({ name: "", email: "", reason: "", message: "" });
      } else {
        setStatus("error");
        setFeedbackMessage("Unable to send right now. Please reach out via social links below.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
      setFeedbackMessage("Unable to connect to the server. Please reach out via email or social links below.");
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-form-header">
        <h1>Send a Message</h1>
        <p>Have a project idea, question, or opportunity? Let&apos;s connect.</p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="contact-name">Your Name</label>
          <input
            id="contact-name"
            type="text"
            name="name"
            placeholder="Your name or organization"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="contact-email">Your Email</label>
          <input
            id="contact-email"
            type="email"
            name="email"
            placeholder="name@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="contact-reason">Reason for Contact</label>
          <select
            id="contact-reason"
            name="reason"
            onChange={handleChange}
            value={formData.reason}
            required
          >
            <option value="" disabled>
              Select a category
            </option>
            <option value="code">Software Engineering &amp; Full-Stack Systems</option>
            <option value="startup">Product &amp; project collaboration</option>
            <option value="mc">Master of Ceremonies (MC) &amp; Live Stage Hosting</option>
            <option value="actor">Acting &amp; casting (marchtanu)</option>
            <option value="tiktok">TikTok &amp; Digital Content Creation (@marchtanu)</option>
            <option value="university">Mahidol University / Academic Inquiries</option>
            <option value="gym">Creative collaboration</option>
            <option value="other">Other Collaboration / General Inquiry</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="contact-message">Your Message</label>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            placeholder="Tell me about your project or inquiry..."
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        {feedbackMessage && (
          <div className={`status-banner ${status}`}>
            {feedbackMessage}
          </div>
        )}

        <button
          type="submit"
          className="submit-btn"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}
