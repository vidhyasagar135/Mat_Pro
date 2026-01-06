
import React from "react";
import AboutUsImage from "../assets/Aboutus.png";
import TpDesign from "../assets/tpdesign.png";
import bldesign from "../assets/btleft.png";
import ci from "../assets/ContactNow.png";
import ss from "../assets/ss.png";
import at from "../assets/Aboutthis.png";
import at2 from "../assets/Aboutthis2.png";
import at3 from "../assets/bp.png";
import mv_heading_ss from "../assets/mv_ss.png";
import mv_ss from "../assets/mv_review.png";
import decors from "../assets/Decor1-Yellow.png";
import decors2 from "../assets/Decor2-Yellow.png";
import news from "../assets/newss.png";
const AboutUS = () => {
  return (
    <>
      {/* ================= ABOUT US SECTION ================= */}
      <section className="relative w-full bg-[#761B0F] overflow-hidden">
        {/* DESKTOP / TABLET */}
        <div className="hidden md:flex h-[80vh] items-center justify-center relative">
          {/* TOP LEFT */} 
          <img
            src={decors}
            alt="Top Left Decor"
            className="pointer-events-none absolute top-[0%] left-[0%] w-[40%] max-w-[565px] opacity-90 z-0"
          />

          {/* BOTTOM RIGHT */}
          <img
            src={decors2}
            alt="Bottom Right Decor"
            className="pointer-events-none absolute bottom-[0%] right-[0%] w-[38%] max-w-[565px] opacity-90 z-0"
          />

          <div className="relative z-10 flex items-center justify-center w-full px-6">
            <img
              src={AboutUsImage}
              alt="About Us"
              className="w-[90%] md:w-[85%] lg:w-[80%] h-auto object-contain"
            />
          </div>
        </div>

        {/* MOBILE */}
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
          <img src={at} alt="About Mobile 1" className="w-[92%] mx-auto block relative z-10" />
          <img src={at2} alt="About Mobile 2" className="w-[92%] mx-auto block relative z-10" />
        </div>
      </section>

      {/* ================= CONTACT NOW SECTION ================= */}
      <section className="relative w-full bg-[#FFE4C4] overflow-hidden">
        {/* DESKTOP / TABLET */}
        <div className="hidden md:flex h-[80vh] items-center justify-center relative">
          {/* TOP RIGHT */}
           <img
            src={TpDesign}
            alt="Top Right Design"
            className="pointer-events-none absolute top-[0.1%] right-[0.75%] w-[40%] max-w-[555px] opacity-90 z-0"
          />

          {/* BOTTOM LEFT */}
          <img
            src={bldesign}
            alt="Bottom Left Design"
            className="pointer-events-none absolute bottom-[0%] left-[0%] w-[38%] max-w-[555px] opacity-90 z-0"
          /> 

          <div className="relative z-10 flex items-center justify-center w-full px-6">
            <img
              src={ci}
              alt="Contact Now Desktop"
              className="w-[85%] md:w-[75%] lg:w-[70%] h-auto object-contain"
            />
          </div>
        </div>

        {/* MOBILE */}
        <div className="md:hidden relative z-10 px-4 py-8 flex justify-center overflow-hidden">
          <img
            src={decors}
            alt="Decor Top Left"
            className="absolute top-0 left-0 w-[200px] pointer-events-none z-0"
          />
          <img
            src={decors2}
            alt="Decor Bottom Right"
            className="absolute bottom-0 right-0 w-[200px] pointer-events-none z-0"
          />
          <img src={at3} alt="Contact Mobile" className="w-[92%] mx-auto block relative z-10" />
        </div>
      </section>

      {/* ================= SUCCESS STORIES SECTION ================= */}
      <section className="relative w-full bg-[#761B0F] overflow-hidden">
        {/* DESKTOP / TABLET */}
        <div className="hidden md:flex items-center justify-center h-[70vh] relative">
          <img
            src={decors}
            alt="Top Left Decor"
            className="pointer-events-none absolute top-0 left-0 w-[420px] lg:w-[572px] opacity-95 z-30"
          />
          <img
            src={decors2}
            alt="Bottom Right Decor"
            className="pointer-events-none absolute bottom-0 right-1 w-[420px] lg:w-[572px] opacity-95 z-30"
          />

          <div className="relative z-10 flex items-center justify-center w-full px-6">
            <img
              src={news}
              alt="Our Success Stories"
              className="w-[90%] md:w-[70%] lg:w-[50%] h-auto object-contain"
            />
          </div>
        </div>

        {/* MOBILE */}
        <div className="md:hidden relative px-3 py-10 overflow-hidden">
          <img src={decors} alt="Decor Top Right" className="absolute top-0 right-0 w-[200px] pointer-events-none" />
          <img src={decors2} alt="Decor Bottom Left" className="absolute bottom-0 left-0 w-[200px] pointer-events-none" />
          <img src={mv_heading_ss} alt="Success Stories Heading" className="w-[90%] mx-auto block relative z-10" />
          <img src={mv_ss} alt="Success Stories Reviews" className="w-[95%] mx-auto block mt-8 relative z-10" />
        </div>
      </section>
    </>
  );
};

export default AboutUS;
