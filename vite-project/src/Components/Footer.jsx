import React from "react";
import FooterImage from "../assets/FooterImage.png";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {

  const scrollToContact = () => {
    const section = document.getElementById("contact-us");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="w-full font-serif overflow-hidden">

      {/* LIGHT SECTION */}
      <div className="bg-[#f6e1d3] pt-10 pb-24 md:pb-40">
        <div className="flex justify-center px-4">
          <img
            src={FooterImage}
            alt="Footer"
            className="w-full max-w-md md:max-w-6xl"
          />
        </div>
      </div>

      {/* DARK SECTION */}
      <div className="bg-[#761B0F] text-white pt-16 md:pt-20 pb-8 -mt-24 md:-mt-32">

        {/* ===== CONNECT US ON ===== */}
        <div className="flex flex-col items-center md:items-start md:pl-32 mb-8">

          {/* 🔥 Increased Heading Size */}
          <p className="mb-5 text-lg md:text-2xl font-serif font-semibold">
            Connect us on
          </p>

          {/* 🔥 Increased Icon Size */}
          <div className="flex gap-5">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon text-xl md:text-2xl"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon text-xl md:text-2xl"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon text-xl md:text-2xl"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon text-xl md:text-2xl"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* CTA BUTTONS (MOBILE ONLY) */}
        <div className="md:hidden flex flex-col items-center gap-4 px-6 mb-6">
          <button
            onClick={scrollToContact}
            className="w-full max-w-sm bg-[#d8892b] text-black py-3 rounded-full font-semibold"
          >
            FIND YOUR LIFE PARTNER
          </button>

          <button
            onClick={scrollToContact}
            className="w-full max-w-sm border border-[#d8892b] text-[#d8892b] py-3 rounded-full font-semibold"
          >
            PARTNER WITH US
          </button>
        </div>

        {/* Copyright */}
        <p className="text-center text-xs opacity-80">
          All copyrights reserved by telugumatchmakers.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
