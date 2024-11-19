import React, { useState, useEffect, useCallback } from "react";
import emailjs from "@emailjs/browser";

const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;
const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;

const FEEDBACK_DURATION = 2000;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [feedback, setFeedback] = useState({
    message: "",
    type: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    try {
      setIsSubmitting(true);
      const res = await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY);
      console.log(res.text);
      setFormData({ name: "", email: "", message: "" });
      setFeedback({ message: "Message envoyé !", type: "success" });
    } catch (err) {
      console.error("Erreur d'envoi:", err);
      setFeedback({
        message: "Une erreur s'est produite, veuillez réessayer",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (feedback.message) {
      const timer = setTimeout(
        () => setFeedback({ message: "", type: "" }),
        FEEDBACK_DURATION
      );
      return () => clearTimeout(timer);
    }
  }, [feedback.message]);

  return (
    <div className="form-container">
      <form onSubmit={sendEmail} className="form-content" noValidate>
        <label htmlFor="name">
          Nom
          <span aria-hidden="true" className="required">*</span>
        </label>
        <input
          type="text"
          id="name" 
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          autoComplete="name"
          aria-required="true"
          minLength="2"
          maxLength="50"
        />
        <label htmlFor="email">
          Email
          <span aria-hidden="true" className="required">*</span>
        </label>
        <input
          type="email"
          id="email" 
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          autoComplete="email"
          aria-required="true"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        />
        <label htmlFor="message">
          Message
          <span aria-hidden="true" className="required">*</span>
        </label>
        <textarea
          id="message" 
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          aria-required="true"
          minLength="10"
          maxLength="1000"
        />
        <button 
          type="submit" 
          className="submit-form-button"
          disabled={isSubmitting}
          aria-busy={isSubmitting}
        >
          {isSubmitting ? "Envoi en cours..." : "Envoyer"}
        </button>
      </form>
      {feedback.message && (
        <div 
          className={`formMessage ${feedback.type}`} 
          role="status"
          aria-live="polite"
        >
          {feedback.message}
        </div>
      )}
    </div>
  );
};

export default ContactForm;
