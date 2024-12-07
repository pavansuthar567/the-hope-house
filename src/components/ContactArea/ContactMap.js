import React from "react";

const ContactMap = () => {
  return (
    <div className="contact-map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14308.187810788959!2d72.9689861839122!3d26.292577858058163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418e799adf1091%3A0x54d38e81f9532137!2sShantinath%20Nagar%20Rd%2C%20Kabir%20Nagar%2C%20Jodhpur%2C%20Rajasthan%20342001!5e0!3m2!1sen!2sin!4v1733509281979!5m2!1sen!2sin"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        // aria-hidden={false}
        // tabIndex={0}
      ></iframe>
    </div>
  );
};

export default ContactMap;
