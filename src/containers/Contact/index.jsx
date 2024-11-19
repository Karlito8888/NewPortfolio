import { memo } from 'react';
import ContactForm from "../../components/ContactForm";
import ContactInfo from "../../components/ContactInfo";

const Contact = () => {
  return (
    <section 
      className="contact-container" 
      id="contact"
      aria-labelledby="title-contact"
    >
      <h2 
        id="title-contact" 
        className="contact-title"
      >
        Contactez-moi
      </h2>
      <div 
        className="contact-content"
        role="group"
        aria-label="Formulaire et informations de contact"
      >
        <ContactForm />
        <ContactInfo />
      </div>
    </section>
  );
};

export default memo(Contact);
