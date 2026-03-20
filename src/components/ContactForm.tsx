"use client";
import { useState } from "react";
import "./contact-form/contact-form.scss";
import { PostAPI, SendEmailAPI } from "@/api/api";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    reason: "",
    message: "",
  });
  const [status, setStatus] = useState("Send");

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      await SendEmailAPI(formData);
      const response = await PostAPI("/contacts", formData);
      if (response.status === 200 || response.status === 201) {
        setStatus("Sent");
      } else {
        setStatus("Error, Please contact me via other platforms");
      }
    } catch (error) {
      console.error(error);
      setStatus("Error, Please contact me via other platforms");
    }
  };

  return (
    <div className="contact-container">
      <form className="contact-form" onSubmit={handleSubmit}>
        <h1>Contact Me</h1>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <select
          title="purpose of contact"
          id="reason"
          name="reason"
          onChange={handleChange}
          value={formData.reason}
          required
        >
          <option value="" disabled>
            Select a reason
          </option>
          <option value="code">Code</option>
          <option value="model">Model</option>
          <option value="design">Design</option>
          <option value="media">Media</option>
          <option value="other">Other</option>
        </select>
        <textarea
          name="message"
          rows={4}
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">{status}</button>
      </form>
    </div>
  );
}
