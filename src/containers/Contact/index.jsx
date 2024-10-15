import ContactForm from "../../components/ContactForm";
import ContactInfo from "../../components/ContactInfo";

const Contact = () => {
  return (
    <section className="contact-container" id="contact">
      <h2 className="contact-title">Contactez-moi</h2>
      <div className="contact-content">
        <ContactForm />
        <ContactInfo />
      </div>
    </section>
  );
};

export default Contact;
