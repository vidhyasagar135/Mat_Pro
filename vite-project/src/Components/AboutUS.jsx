import React from "react";
import AboutUsImage from "../assets/Aboutus.png";
import TpDesign from "../assets/tpdesign.png";
import ci from "../assets/ContactNow.png";
import ss from "../assets/ss.png";

const AboutUS = () => {
  return (
    <>
      {/* ================= ABOUT US SECTION ================= */}
      <section className="relative w-full min-h-screen bg-[#761B0F] overflow-hidden flex items-center justify-center">
        
        {/* Top Left Design */}
        <img
          src={TpDesign}
          alt="Top Left Design"
          className="absolute top-0 left-0 w-72 opacity-60 pointer-events-none"
        />

        {/* Bottom Right Design */}
        <img
          src={TpDesign}
          alt="Bottom Right Design"
          className="absolute bottom-0 right-0 w-72 opacity-60 rotate-180 pointer-events-none"
        />

        {/* About Image (ZOOMED IN MORE) */}
        <div className="relative z-10 flex items-center justify-center w-full h-full px-6">
          <img
            src={AboutUsImage}
            alt="About Us"
            className="w-[90%] md:w-[85%] lg:w-[80%] h-auto object-contain"
          />
        </div>
      </section>

      {/* ================= CONTACT NOW SECTION ================= */}
      <section className="relative w-full min-h-screen bg-[#FFE4C4] overflow-hidden flex items-center justify-center">
        
        {/* Top Right Design */}
        <img
          src={TpDesign}
          alt="Top Right Design"
          className="absolute top-0 right-0 w-80 opacity-80 pointer-events-none"
        />

        {/* Bottom Left Design */}
        <img
          src={TpDesign}
          alt="Bottom Left Design"
          className="absolute bottom-0 left-0 w-80 opacity-80 rotate-180 pointer-events-none"
        />

        {/* Contact Image (ZOOMED IN MORE) */}
        <div className="relative z-10 flex items-center justify-center w-full h-full px-6">
          <img
            src={ci}
            alt="Contact Now"
            className="w-[85%] md:w-[75%] lg:w-[70%] h-auto object-contain"
          />
        </div>
      </section>

      {/* ================= SUCCESS STORIES SECTION (REDUCED HEIGHT & PERFECT FIT) ================= */}
{/* ================= SUCCESS STORIES SECTION (PERFECT DESIGN FIT) ================= */}
<section className="relative w-full bg-[#761B0F] overflow-hidden flex items-center justify-center py-12">
  
  {/* Top Left Design (pushed out, subtle like reference) */}
  <img
    src={TpDesign}
    alt="Top Left Design"
    className="pointer-events-none absolute -top-24 -left-24 w-[420px] opacity-40"
  />

  {/* Bottom Right Design (mirrored & pushed out) */}
  <img
    src={TpDesign}
    alt="Bottom Right Design"
    className="pointer-events-none absolute -bottom-24 -right-24 w-[420px] opacity-40 rotate-180"
  />

  {/* Success Stories Image – PERFECT FIT */}
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



// import React from "react";
// import TpDesign from "../assets/tpdesign.png";
// import ci from "../assets/ci.png"; // Contact image

// const AboutU = () => {
//   return (
//     <section className="relative min-h-screen bg-[#f6e1d3] overflow-hidden flex items-center justify-center">
//       {/* Top Right Design */}
//       <img
//         src={TpDesign}
//         alt="Top Right Design"
//         className="absolute top-0 right-0 w-72 md:w-80 lg:w-96 opacity-80 pointer-events-none z-0"
//       />

//       {/* Bottom Left Design */}
//       <img
//         src={TpDesign}
//         alt="Bottom Left Design"
//         className="absolute bottom-0 left-0 w-64 md:w-80 lg:w-96 opacity-80 rotate-180 pointer-events-none z-0"
//       />

//       {/* Contact Now Image (CENTERED) */}
//       <div className="relative z-10 flex justify-center">
//         <img
//           src={ci}
//           alt="Contact Now"
//           className="w-[60%] md:w-[55%] lg:w-[70%] h-auto max-w-full"
//         />
//       </div>
//     </section>
//   );
// };

// export default ContactSection;
