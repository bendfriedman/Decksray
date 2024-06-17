import "./SubscriptionForm.scss";
import { useState } from "react";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const SubscriptionForm = () => {
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
          setStateMessage("Thank you for subscribing! :)");
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
    <div className="subscription-container">
      <div className="blur-wrapper">
        <h2>Subscribe to Our Newsletter!</h2>
        <form className="subscription-form" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
          />

          <button type="submit" value="Send" disabled={isSubmitting}>
            Subscribe
          </button>
          <p>{stateMessage ? stateMessage : ""}</p>
        </form>
      </div>
    </div>
  );
};
