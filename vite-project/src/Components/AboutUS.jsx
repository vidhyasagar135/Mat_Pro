import React from "react";
import AboutUsImage from "../assets/Aboutus.png";
import TpDesign from "../assets/tpdesign.png";
import ci from "../assets/ContactNow.png";
import ss from "../assets/ss.png";
import at from "../assets/Aboutthis.png";
import at2 from "../assets/Aboutthis2.png";
import at3 from "../assets/bp.png";
import mv_heading_ss from "../assets/mv_ss.png";
import mv_ss from "../assets/mv_review.png";
import decors from "../assets/Decor1-Yellow.png";
import decors2 from "../assets/Decor2-Yellow.png";

const AboutUS = () => {
  return (
    <>
      {/* ================= ABOUT US SECTION ================= */}
      <section className="relative w-full bg-[#761B0F] overflow-hidden">
        {/* DESKTOP / TABLET */}
        <div className="hidden md:flex h-[80vh] items-center justify-center relative">
          <img
            src={TpDesign}
            alt="Top Left Design"
            className="pointer-events-none absolute -top-24 -left-24 w-[420px] opacity-80 z-0"
          />
          <img
            src={TpDesign}
            alt="Bottom Right Design"
            className="pointer-events-none absolute -bottom-24 -right-24 w-[420px] opacity-80 rotate-180 z-0"
          />
          <div className="relative z-10 flex items-center justify-center w-full px-6">
            <img
              src={AboutUsImage}
              alt="About Us"
              className="w-[90%] md:w-[85%] lg:w-[80%] h-auto object-contain"
            />
          </div>
        </div>

        {/* MOBILE ONLY */}
        <div className="md:hidden relative z-10 px-6 py-8 space-y-4 overflow-hidden">
          <img
            src={decors}
            alt="Decor Top Right"
            className="absolute top-0 right-0 w-[180px] pointer-events-none z-0"
          />

          <img
            src={decors2}
            alt="Decor Bottom Left"
            className="absolute -bottom-5 left-0 w-[200px] pointer-events-none z-0"
          />

          <img
            src={at}
            alt="About Mobile 1"
            className="w-[92%] mx-auto block relative z-10"
          />
          <img
            src={at2}
            alt="About Mobile 2"
            className="w-[92%] mx-auto block relative z-10"
          />
        </div>
      </section>

      {/* ================= CONTACT NOW SECTION ================= */}
      <section className="relative w-full bg-[#FFE4C4] overflow-hidden">
        {/* DESKTOP / TABLET */}
        <div className="hidden md:flex h-[80vh] items-center justify-center relative">
          <img
            src={TpDesign}
            alt="Top Left Design"
            className="pointer-events-none absolute -top-24 -left-24 w-[420px] opacity-80 z-0"
          />
          <img
            src={TpDesign}
            alt="Bottom Right Design"
            className="pointer-events-none absolute -bottom-24 -right-24 w-[420px] opacity-80 rotate-180 z-0"
          />
          <div className="relative z-10 flex items-center justify-center w-full px-6">
            <img
              src={ci}
              alt="Contact Now Desktop"
              className="w-[85%] md:w-[75%] lg:w-[70%] h-auto object-contain"
            />
          </div>
        </div>

        {/* MOBILE ONLY (UPDATED HERE ✅) */}
        <div className="md:hidden relative z-10 px-4 py-8 flex justify-center overflow-hidden">
          {/* TOP LEFT DECOR */}
          <img
            src={decors}
            alt="Decor Top Left"
            className="absolute top-[0%] left-[0%] w-[200px] pointer-events-none z-0"
          />

          <img
            src={decors2}
            alt="Decor Bottom Right"
            className="absolute bottom-[0%] right-[0%] w-[200px] pointer-events-none z-0"
          />

          <img
            src={at3}
            alt="Contact Mobile"
            className="w-[92%] mx-auto block relative z-10"
          />
        </div>
      </section>

      {/* ================= SUCCESS STORIES SECTION ================= */}
      <section className="relative w-full bg-[#761B0F] overflow-hidden">
        {/* DESKTOP / TABLET */}
        <div className="hidden md:flex items-center justify-center h-[70vh] relative">
          <img
            src={TpDesign}
            alt="Top Left Design"
            className="pointer-events-none absolute top-2 left-2 w-[450px] opacity-90 z-30"
          />
          <img
            src={TpDesign}
            alt="Bottom Right Design"
            className="pointer-events-none absolute bottom-0 right-0 w-[450px] opacity-90 rotate-180 z-30"
          />
          <div className="relative z-10 flex items-center justify-center w-full px-6">
            <img
              src={ss}
              alt="Our Success Stories"
              className="w-[90%] md:w-[100%] lg:w-[110%] h-auto object-contain"
            />
          </div>
        </div>

        {/* MOBILE ONLY */}
        <div className="md:hidden relative px-3 py-10 overflow-hidden">
          <img
            src={decors}
            alt="Decor Top Right"
            className="absolute top-0 right-0 w-[200px] pointer-events-none"
          />

          <img
            src={decors2}
            alt="Decor Bottom Left"
            className="absolute bottom-0 left-0 w-[200px] pointer-events-none"
          />

          <img
            src={mv_heading_ss}
            alt="Success Stories Heading"
            className="w-[90%] mx-auto block relative z-10"
          />

          <img
            src={mv_ss}
            alt="Success Stories Reviews"
            className="w-[95%] mx-auto block mt-8 relative z-10"
          />
        </div>
      </section>
    </>
  );
};

export default AboutUS;
