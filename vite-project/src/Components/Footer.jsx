
import React from "react";
import FooterImage from "../assets/FooterImage.png";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import tleftdesign from "../assets/tfdes.png";
import bottomrightdesign from "../assets/brdes.png";

const Footer = () => {

  const scrollToContact = () => {
    const section = document.getElementById("contact-us");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="w-full font-serif overflow-hidden">

      {/* ================= WEB VERSION ================= */}
      <div className="hidden md:block relative w-full h-[80vh]">

        {/* TOP LEFT DESIGN */}
        <img
          src={tleftdesign}
          alt="Top Left Design"
          className="pointer-events-none absolute top-0 left-0 w-[450px] opacity-90 z-30"
        />

        {/* BOTTOM RIGHT DESIGN (NO ROTATION) */}
        <img
          src={bottomrightdesign}
          alt="Bottom Right Design"
          className="pointer-events-none absolute bottom-0 right-0 w-[450px] opacity-90 z-30"
        />

        {/* LIGHT TOP */}
        <div className="absolute top-0 w-full h-[64%] bg-[#f6e1d3]" />

        {/* DARK BOTTOM */}
        <div className="absolute bottom-0 w-full h-[36%] bg-[#761B0F]" />

        {/* FOOTER IMAGE (OVERLAPPING CENTER) */}
        <div className="absolute inset-0 flex justify-center items-center z-10">
          <img
            src={FooterImage}
            alt="Footer"
            className="w-[85%] max-w-6xl"
          />
        </div>

        {/* CONNECT US */}
        <div className="absolute bottom-20 left-32 z-20 text-white">
          <p className="mb-5 text-2xl font-semibold">
            Connect us on
          </p>

          <div className="flex gap-6 text-2xl">
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedinIn />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* COPYRIGHT */}
        <p className="absolute bottom-4 w-full text-center text-xs text-white opacity-80 z-20">
          All copyrights reserved by telugumatchmakers.
        </p>
      </div>

      {/* ================= MOBILE VERSION (UNCHANGED) ================= */}
      <div className="md:hidden">

        {/* LIGHT SECTION */}
        <div className="bg-[#f6e1d3] pt-10 pb-13">
          <div className="flex justify-center px-4">
            <img
              src={FooterImage}
              alt="Footer"
              className="relative left-[0%] top-[90%] w-[100%] h-auto"

            />
          </div>
        </div>

        {/* DARK SECTION */}
        <div className="bg-[#761B0F] text-white pt-16 pb-8 -mt-24">

          <div className="flex flex-col items-center mb-8">
            <p className="mb-5 text-lg font-semibold">
              Connect us on
            </p>

            <div className="flex gap-5 text-xl">
              <FaInstagram />
              <FaFacebookF />
              <FaLinkedinIn />
              <FaYoutube />
            </div>
          </div>

          {/* CTA BUTTONS */}
          <div className="flex flex-col items-center gap-4 px-6 mb-6">
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

          <p className="text-center text-xs opacity-80">
            All copyrights reserved by telugumatchmakers.
          </p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;

// import React from "react";
// import FooterImage from "../assets/FooterImage.png";
// import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
// import tleftdesign from "../assets/tfdes.png";
// import bottomrightdesign from "../assets/brdes.png";

// const Footer = () => {

//   const scrollToContact = () => {
//     const section = document.getElementById("contact-us");
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth", block: "start" });
//     }
//   };

//   return (
//     <footer className="w-full font-serif overflow-hidden">

//       {/* ================= WEB VERSION ================= */}
//       <div className="hidden md:block relative w-full h-[80vh]">

//         <img
//           src={tleftdesign}
//           alt="Top Left Design"
//           className="pointer-events-none absolute top-0 left-0 w-[450px] opacity-90 z-30"
//         />

//         <img
//           src={bottomrightdesign}
//           alt="Bottom Right Design"
//           className="pointer-events-none absolute bottom-0 right-0 w-[450px] opacity-90 z-30"
//         />

//         <div className="absolute top-0 w-full h-[64%] bg-[#f6e1d3]" />
//         <div className="absolute bottom-0 w-full h-[36%] bg-[#761B0F]" />

//         <div className="absolute inset-0 flex justify-center items-center z-10">
//           <img src={FooterImage} alt="Footer" className="w-[85%] max-w-6xl" />
//         </div>

//         <div className="absolute bottom-20 left-32 z-20 text-white">
//           <p className="mb-5 text-2xl font-semibold">Connect us on</p>
//           <div className="flex gap-6 text-2xl">
//             <FaInstagram />
//             <FaFacebookF />
//             <FaLinkedinIn />
//             <FaYoutube />
//           </div>
//         </div>

//         <p className="absolute bottom-4 w-full text-center text-xs text-white opacity-80 z-20">
//           All copyrights reserved by telugumatchmakers.
//         </p>
//       </div>

//       {/* ================= MOBILE VERSION (ABSOLUTE – SAME AS WEB) ================= */}
//       <div className="md:hidden relative w-full h-[85vh] overflow-hidden">


//         {/* LIGHT TOP */}
//         <div className="absolute top-0 w-full h-[70%] bg-[#f6e1d3]" />

//         {/* DARK BOTTOM */}
//         <div className="absolute bottom-0 w-full h-[45%] bg-[#761B0F]" />

//         {/* CENTER IMAGE */}
//         <div className="absolute inset-0 flex justify-center items-center z-25 px-4">
//           <img
//             src={FooterImage}
//             alt="Footer"
//             className="w-full max-w-sm"
//           />
//         </div>

//         {/* SOCIAL */}
//         <div className="absolute bottom-28 w-full z-20 text-white text-center">
//           <p className="mb-4 text-lg font-semibold">
//             Connect us on
//           </p>

//           <div className="flex justify-center gap-5 text-xl">
//             <FaInstagram />
//             <FaFacebookF />
//             <FaLinkedinIn />
//             <FaYoutube />
//           </div>
//         </div>

//         {/* CTA BUTTONS */}
//         <div className="absolute bottom-40 w-full z-20 px-6 flex flex-col items-center gap-4">
//           <button
//             onClick={scrollToContact}
//             className="w-full max-w-sm bg-[#d8892b] text-black py-3 rounded-full font-semibold"
//           >
//             FIND YOUR LIFE PARTNER
//           </button>

//           <button
//             onClick={scrollToContact}
//             className="w-full max-w-sm border border-[#d8892b] text-[#d8892b] py-3 rounded-full font-semibold"
//           >
//             PARTNER WITH US
//           </button>
//         </div>

//         {/* COPYRIGHT */}
//         <p className="absolute bottom-4 w-full text-center text-xs text-white opacity-80 z-20">
//           All copyrights reserved by telugumatchmakers.
//         </p>
//       </div>

//     </footer>
//   );
// };

// export default Footer;
