import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactInfo = () => {
  return (
    <address
      className="contact-address"
      itemScope
      itemType="https://schema.org/Organization"
      aria-label="Informations de contact"
    >
      <span itemProp="name">
        <strong>Charles BOURGAULT (E.I)</strong>
      </span>
      <div
        className="address"
        itemProp="address"
        itemScope
        itemType="https://schema.org/PostalAddress"
      >
        <span itemProp="streetAddress">10, rue du Colisée</span>
        <p>
          <span itemProp="postalCode">75008</span>
          <span aria-hidden="true">, </span>
          <span itemProp="addressLocality">Paris</span>
        </p>
        <a
          href="https://wa.me/+33642663300"
          target="_blank"
          rel="noopener noreferrer"
          className="wa-me"
          aria-label="Contactez-moi sur WhatsApp au 06.42.66.33.00"
        >
          <FontAwesomeIcon 
            icon={faWhatsapp} 
            aria-hidden="true"
            role="img"
          />
          <span>06.42.66.33.00</span>
        </a>
      </div>
    </address>
  );
};

export default ContactInfo;
