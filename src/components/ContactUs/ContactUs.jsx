import "./ContactUs.scss";
import { useState } from "react";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactUs = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result);
          setStateMessage("Message sent!");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000);
        },
        (error) => {
          console.log("FAILED!", error.text);
          setStateMessage("Something went wrong, please try again later");
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact-us">
      <div id="contact-us-header">
        <h2>Contact Us</h2>
        <h3>We'd love to hear from you.</h3>
      </div>

      <form id="contact-form" ref={form} onSubmit={sendEmail}>
        <div>
          <label>Name</label>
          <input type="text" name="from_name" required />
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="from_email" required />
        </div>
        <div>
          <label>Message</label>
          <textarea name="message" minLength="5" rows="15" cols="45" required />
        </div>
        <button type="submit" value="Send" disabled={isSubmitting}>
          Send
        </button>
        <p>{stateMessage ? stateMessage : ""}</p>
      </form>
    </section>
  );
};
