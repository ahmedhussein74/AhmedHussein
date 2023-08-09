import React from "react";
import "../style/Contact.css";

const Contact = () => {
  return (
    <section
      id="contact"
      className="contact h-screen flex flex-col items-center pt-40"
    >
      <div className="profile rounded-full mb-4"></div>
      <h1 className="text-white text-2xl">Ahmed Hussein</h1>
      <h2 className="text-white text-lg">Web Developer</h2>
      <div className="icons flex pt-2">
        <a href="https://www.facebook.com/AhmedHusein22/">
          <img src="/src/images/facebook.png" />
        </a>
        <a href="https://www.linkedin.com/in/ahmed-hussein-23b95b1b8">
          <img src="/src/images/linkedin.png" />
        </a>
        <a href="https://wa.me/qr/6VYZYWSEUQMEC1">
          <img src="/src/images/whatsapp.png" />
        </a>
        <a href="https://github.com/ahmedhussein74">
          <img src="/src/images/github.png" />
        </a>
        <a href="mailto:ahmedhusseinofficial22@gmail.com">
          <img src="/src/images/gmail.png" />
        </a>
      </div>
    </section>
  );
};

export default Contact;
