<<<<<<< HEAD
import "./Contact.css";
import { FaInstagram, FaWhatsapp, FaTiktok, FaFacebook, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // X (Twitter)

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Contact Me</h2>
      <p className="contact-text">
        Let’s connect! Whether it’s for a project, a collaboration, or just to share ideas,
        feel free to reach out on any of the platforms below:
      </p>

      <div className="contact-info">
        <p>
          <FaEnvelope className="icon email" /> <strong>Email:</strong> yourname@example.com
        </p>
        <p>
          <FaWhatsapp className="icon whatsapp" /> <strong>WhatsApp:</strong> +254 700 000 000
        </p>
        <p>
          <FaInstagram className="icon instagram" /> <strong>Instagram:</strong> @yourhandle
        </p>
        <p>
          <FaTiktok className="icon tiktok" /> <strong>TikTok:</strong> @yourhandle
        </p>
        <p>
          <FaXTwitter className="icon twitter" /> <strong>X (Twitter):</strong> @yourhandle
        </p>
        <p>
          <FaFacebook className="icon facebook" /> <strong>Facebook:</strong> /yourprofile
        </p>
      </div>

      <p className="contact-cta">📩 Let’s build something amazing together!</p>
=======

import React from "react";

function Contact() {
  return (
    
    <section id="contact" style={{ padding: "50px", backgroundColor: "#eee" }}>
      <h2>Contact Me</h2>
      <p>Email: yourname@example.com</p>
      <p>LinkedIn: linkedin.com/in/yourprofile</p>
>>>>>>> 4fefc02a5ad291523f1fb0d55c41557d2649bf89
    </section>
  );
}

export default Contact;
<<<<<<< HEAD

=======
>>>>>>> 4fefc02a5ad291523f1fb0d55c41557d2649bf89
