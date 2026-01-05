import React from "react";
import FooterImage from "../assets/FooterImage.png";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
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
      <div className="bg-[#761B0F] text-white pt-20 md:pt-24 pb-8 -mt-24 md:-mt-32">

        {/* Social Icons */}
        <div className="flex flex-col items-center">
          <div className="flex gap-4 mb-6">
            <a className="footer-icon" href="#"><FaInstagram /></a>
            <a className="footer-icon" href="#"><FaFacebookF /></a>
            <a className="footer-icon" href="#"><FaLinkedinIn /></a>
            <a className="footer-icon" href="#"><FaYoutube /></a>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col items-center gap-4 px-6 mb-6">
          <button className="w-full max-w-sm bg-[#d8892b] text-black py-3 rounded-full font-semibold">
            FIND YOUR LIFE PARTNER
          </button>

          <button className="w-full max-w-sm border border-[#d8892b] text-[#d8892b] py-3 rounded-full font-semibold">
            PARTNER WITH US
          </button>
        </div>

        {/* Copyright */}
        <p className="text-center text-xs opacity-80">
          All copyrights reserved by Telugumatchmakers.com
        </p>
      </div>
    </footer>
  );
};

export default Footer;
