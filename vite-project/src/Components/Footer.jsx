import React from "react";
import FooterImage from "../assets/FooterImage.png";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import tleftdesign from "../assets/tfdes.png";
import bottomrightdesign from "../assets/brdes.png";
import tpright from "../assets/tpdesign.png";

const Footer = () => {
  const scrollToContact = () => {
    const section = document.getElementById("contact-us");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <footer className="w-full font-serif overflow-hidden">
        {/* ================= WEB VERSION ================= */}
        <div className="hidden md:block relative w-full h-[80vh]">
          <img
            src={tleftdesign}
            alt="Top Left Design"
            className="pointer-events-none absolute top-[0%] left-[5.1%] w-[35%] max-w-[510px] opacity-100 drop-shadow-2xl z-30"
          />

          <img
            src={bottomrightdesign}
            alt="Bottom Right Design"
            className="pointer-events-none absolute bottom-0 right-0 w-[450px] opacity-90 z-30"
          />

          <div className="absolute top-0 w-full h-[64%] bg-[#f6e1d3]" />
          <div className="absolute bottom-0 w-full h-[36%] bg-[#761B0F]" />

          <div className="absolute inset-0 flex justify-center items-center z-10">
            <img src={FooterImage} alt="Footer" className="w-[85%] max-w-6xl" />
          </div>

          {/* SOCIAL ICONS (DESKTOP) */}
          <div className="absolute bottom-32 left-32 z-20 text-white">
            <p className="mb-5 text-2xl font-semibold">Connect us on</p>
            <div className="flex gap-6 text-2xl">
              <FaInstagram />
              <FaFacebookF />
              <FaLinkedinIn />
              <FaYoutube />
            </div>
          </div>

          <p className="absolute bottom-4 w-full text-center text-xs text-white opacity-80 z-20">
            All copyrights reserved by telugumatchmakers.
          </p>
        </div>

        {/* ================= MOBILE VERSION ================= */}
        <div className="md:hidden relative">
          {/* MOBILE TOP-RIGHT DESIGN */}
          <img
            src={tpright}
            alt="Top Right Design"
            className="absolute top-0 right-1 w-[187px] pointer-events-none z-0"
          />

          {/* LIGHT SECTION */}
          <div className="bg-[#f6e1d3] pt-10 pb-17"> 
            <div className="flex justify-center px-4"> 
              <img src={FooterImage} alt="Footer" className="w-full h-auto" />
            </div> 
          </div>


          {/* DARK SECTION – HEIGHT INCREASED */}
          <div className="text-white pt-20 pb-44 -mt-30 bg-gradient-to-b from-[#7a1c10] via-[#64130d] to-[#380700]">
            {/* CONNECT */}
            <div className="flex flex-col items-center mb-8">
              <p className="mb-5 text-xl font-semibold">Connect us on</p>

              <div className="flex gap-5">
                <div className="w-14 h-14 flex items-center justify-center bg-white rounded-full text-[#761B0F] shadow-lg">
                  <FaInstagram />
                </div>
                <div className="w-14 h-14 flex items-center justify-center bg-white rounded-full text-[#761B0F] shadow-lg">
                  <FaFacebookF />
                </div>
                <div className="w-14 h-14 flex items-center justify-center bg-white rounded-full text-[#761B0F] shadow-lg">
                  <FaLinkedinIn />
                </div>
                <div className="w-14 h-14 flex items-center justify-center bg-white rounded-full text-[#761B0F] shadow-lg">
                  <FaYoutube />
                </div>
              </div>
            </div>

            {/* COPYRIGHT */}
            <p className="text-center text-xs opacity-80">
              All copyrights reserved by Telugumatchmakers.com
            </p>
          </div>
        </div>
      </footer>

      {/* ================= MOBILE FLOATING CTA (UNCHANGED SIZE) ================= */}
      <div className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-[999] px-6 w-full">
        <div className="flex flex-col items-center gap-4">
          <button
            onClick={scrollToContact}
            className="w-full max-w-sm bg-[#d8892b] text-[#5a1a0c] py-4 rounded-lg font-semibold tracking-wide shadow-2xl"
          >
            FIND YOUR LIFE PARTNER
          </button>

          <button
            onClick={scrollToContact}
            className="w-full max-w-sm bg-[#380700] border-2 border-[#d8892b] text-[#d8892b] py-4 rounded-lg font-semibold tracking-wide shadow-2xl"
          >
            PARTNER WITH US
          </button>
        </div>
      </div>
    </>
  );
};

export default Footer;
