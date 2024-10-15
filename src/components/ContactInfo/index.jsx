import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactInfo = () => {
  return (
    <div
      className="contact-address"
      itemScope
      itemType="https://schema.org/Organization"
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
          <span itemProp="postalCode">75008, </span>
          <span itemProp="addressLocality">Paris</span>
        </p>
        <a
          href="https://wa.me/+33642663300"
          target="_blank"
          rel="noopener noreferrer"
          className="wa-me"
        >
          <FontAwesomeIcon icon={faWhatsapp} />
          06.42.66.33.00
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
