import React from "react";
import FooterImage from "../assets/FooterImage.png";
import tl from "../assets/tfdes.png";
import br from "../assets/brdes.png";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative w-full h-[700px] overflow-hidden font-serif">
      
      {/* Top 60% Light Color */}
      <div className="absolute top-0 left-0 w-full h-[60%] bg-[#f6e1d3]" />

      {/* Bottom 40% Dark Color */}
      <div className="absolute bottom-0 left-0 w-full h-[40%] bg-[#761B0F]" />

      {/* Decorative Designs */}
      <img
        src={tl}
        alt="Top Left Design"
        className="pointer-events-none absolute -top-24 -left-24 w-[420px] opacity-60 z-10"
      />
      <img
        src={br}
        alt="Bottom Right Design"
        className="pointer-events-none absolute -bottom-24 -right-24 w-[420px] opacity-60 z-10"
      />

      {/* Center Footer Image */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <img
          src={FooterImage}
          alt="Footer"
          className="w-full max-w-6xl h-auto object-contain"
        />
      </div>

      {/* LEFT SIDE – Connect us on */}
      <div className="absolute bottom-[90px] left-[120px] z-30 text-white">
        <div className="mb-4 text-lg">Connect us on</div>

        <div className="flex items-center gap-4">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#761B0F] hover:scale-105 transition"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#761B0F] hover:scale-105 transition"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#761B0F] hover:scale-105 transition"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#761B0F] hover:scale-105 transition"
          >
            <FaYoutube />
          </a>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 text-sm text-white opacity-80">
        All copyrights reserved by telugumatchmakers.
      </div>
    </footer>
  );
};

export default Footer;
