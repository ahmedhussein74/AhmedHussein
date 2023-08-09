import React from "react";
import "../style/Contact.css";
import facebook from "../images/facebook.png";
import linkedin from "../images/linkedin.png";
import whatsapp from "../images/whatsapp.png";
import github from "../images/github.png";
import gmail from "../images/gmail.png";

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
          <img src={facebook} />
        </a>
        <a href="https://www.linkedin.com/in/ahmed-hussein-23b95b1b8">
          <img src={linkedin} />
        </a>
        <a href="https://wa.me/qr/6VYZYWSEUQMEC1">
          <img src={whatsapp} />
        </a>
        <a href="https://github.com/ahmedhussein74">
          <img src={github} />
        </a>
        <a href="mailto:ahmedhusseinofficial22@gmail.com">
          <img src={gmail} />
        </a>
      </div>
    </section>
  );
};

export default Contact;
