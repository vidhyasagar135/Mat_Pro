import React from "react";
import AboutUsImage from "../assets/Aboutus.png";
import TpDesign from "../assets/tpdesign.png";
import ci from "../assets/ContactNow.png";
import ss from "../assets/ss.png";
import at from "../assets/Aboutthis.png"; 
import at2 from "../assets/Aboutthis2.png";
import at3 from "../assets/bp.png"; // mobile contact image

const AboutUS = () => {
  return (
    <>
      {/* ================= ABOUT US SECTION ================= */}
      <section className="relative w-full bg-[#761B0F] overflow-hidden">

        {/* ---------- DESKTOP / TABLET ---------- */}
        <div className="hidden md:flex min-h-screen items-center justify-center">

          <img
            src={TpDesign}
            alt="Top Left Design"
            className="absolute top-0 left-0 w-72 opacity-60 pointer-events-none"
          />

          <img
            src={TpDesign}
            alt="Bottom Right Design"
            className="absolute bottom-0 right-0 w-72 opacity-60 rotate-180 pointer-events-none"
          />

          <div className="relative z-10 flex items-center justify-center w-full px-6">
            <img
              src={AboutUsImage}
              alt="About Us"
              className="w-[90%] md:w-[85%] lg:w-[80%] h-auto object-contain"
            />
          </div>
        </div>

        {/* ---------- MOBILE ONLY ---------- */}
        <div className="md:hidden relative z-10 px-4 py-8 space-y-6">
          <img src={at} alt="About Mobile 1" className="w-[92%] mx-auto block" />
          <img src={at2} alt="About Mobile 2" className="w-[92%] mx-auto block" />
        </div>
      </section>

      {/* ================= CONTACT NOW SECTION ================= */}
      <section className="relative w-full bg-[#FFE4C4] overflow-hidden">

        {/* ---------- DESKTOP / TABLET ---------- */}
        <div className="hidden md:flex min-h-screen items-center justify-center">

          <img
            src={TpDesign}
            alt="Top Right Design"
            className="absolute top-0 right-0 w-80 opacity-80 pointer-events-none"
          />

          <img
            src={TpDesign}
            alt="Bottom Left Design"
            className="absolute bottom-0 left-0 w-80 opacity-80 rotate-180 pointer-events-none"
          />

          <div className="relative z-10 flex items-center justify-center w-full px-6">
            <img
              src={ci}
              alt="Contact Now Desktop"
              className="w-[85%] md:w-[75%] lg:w-[70%] h-auto object-contain"
            />
          </div>
        </div>

        {/* ---------- MOBILE ONLY ---------- */}
        <div className="md:hidden relative z-10 px-4 py-8 flex justify-center">
          <img
            src={at3}
            alt="Contact Mobile"
            className="w-[92%] mx-auto block"
          />
        </div>
      </section>

      {/* ================= SUCCESS STORIES SECTION ================= */}
      <section className="relative w-full bg-[#761B0F] overflow-hidden flex items-center justify-center py-12">

        <img
          src={TpDesign}
          alt="Top Left Design"
          className="pointer-events-none absolute -top-24 -left-24 w-[420px] opacity-40"
        />

        <img
          src={TpDesign}
          alt="Bottom Right Design"
          className="pointer-events-none absolute -bottom-24 -right-24 w-[420px] opacity-40 rotate-180"
        />

        <div className="relative z-10 flex items-center justify-center w-full px-6">
          <img
            src={ss}
            alt="Our Success Stories"
            className="w-full max-w-6xl h-auto object-contain"
          />
        </div>
      </section>
    </>
  );
};

export default AboutUS;
