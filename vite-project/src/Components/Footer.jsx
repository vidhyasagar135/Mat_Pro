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
    <footer className="w-full font-serif overflow-hidden">

      {/* ================= WEB VERSION ================= */}
      <div className="hidden md:block relative w-full h-[80vh]">

       <img src={tleftdesign} alt="Top Left Design" className="pointer-events-none absolute top-[0%] left-[5.1%] w-[35%] max-w-[465px] opacity-100 drop-shadow-2xl z-30" />



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
        <div className="absolute bottom-20 left-32 z-20 text-white">
          <p className="mb-5 text-2xl font-semibold">Connect us on</p>
          <div className="flex gap-6 text-2xl">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
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
          className="absolute top-[0.1%] right-[0.5%] w-[200px] pointer-events-none z-0"
        />

        {/* LIGHT SECTION */}
        <div className="bg-[#f6e1d3] pt-10 pb-20">
          <div className="flex justify-center px-4">
            <img src={FooterImage} alt="Footer" className="w-full h-auto" />
          </div>
        </div>

        {/* DARK SECTION */}
        <div className="text-white pt-14 pb-10 -mt-30 bg-gradient-to-b from-[#7a1c10] via-[#64130d] to-[#380700]">

          {/* SOCIAL ICONS (MOBILE) */}
          <div className="flex flex-col items-center mb-4">
            <p className="mb-4 text-lg font-semibold">Connect us on</p>

            <div className="flex gap-4">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <div className="w-11 h-11 flex items-center justify-center bg-white rounded-full text-[#761B0F]">
                  <FaInstagram />
                </div>
              </a>

              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <div className="w-11 h-11 flex items-center justify-center bg-white rounded-full text-[#761B0F]">
                  <FaFacebookF />
                </div>
              </a>

              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <div className="w-11 h-11 flex items-center justify-center bg-white rounded-full text-[#761B0F]">
                  <FaLinkedinIn />
                </div>
              </a>

              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                <div className="w-11 h-11 flex items-center justify-center bg-white rounded-full text-[#761B0F]">
                  <FaYoutube />
                </div>
              </a>
            </div>
          </div>

          {/* COPYRIGHT */}
          <p className="text-center text-xs opacity-80 mb-6">
            All copyrights reserved by Telugumatchmakers.com
          </p>

          {/* CTA BUTTONS */}
          <div className="flex flex-col items-center gap-4 px-6">
            <button
              onClick={scrollToContact}
              className="w-full max-w-sm bg-[#d8892b] text-[#5a1a0c] py-4 rounded-lg font-semibold tracking-wide"
            >
              FIND YOUR LIFE PARTNER
            </button>

            <button
              onClick={scrollToContact}
              className="w-full max-w-sm bg-[#380700] border-2 border-[#d8892b] text-[#d8892b] py-4 rounded-lg font-semibold tracking-wide"
            >
              PARTNER WITH US
            </button>
          </div>
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
// import tpright from "../assets/tpdesign.png";
// const Footer = () => {

//   const scrollToContact = () => {
//     const section = document.getElementById("contact-us");
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth", block: "start" });
//     }
//   };

//   return (
//     <footer className="w-full font-serif overflow-hidden">

//       {/* ================= WEB VERSION (UNCHANGED) ================= */}
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

//       {/* ================= MOBILE VERSION (UPDATED) ================= */}
//       <div className="md:hidden">

//         {/* LIGHT SECTION */}
//         <div className="bg-[#f6e1d3] pt-10 pb-20">
//           <div className="flex justify-center px-4">
//             <img
//               src={FooterImage}
//               alt="Footer"
//               className="w-full h-auto"
//             />
//           </div>
//         </div>

//         {/* DARK SECTION */}
//         <div
//           className="
//             text-white pt-14 pb-10 -mt-30
//             bg-gradient-to-b
//             from-[#7a1c10]
//             via-[#64130d]
//             to-[#380700]
//           "
//         >

//           {/* CONNECT US */}
//           <div className="flex flex-col items-center mb-4">
//             <p className="mb-4 text-lg font-semibold">
//               Connect us on
//             </p>

//             <div className="flex gap-4">
//               {[FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube].map(
//                 (Icon, i) => (
//                   <div
//                     key={i}
//                     className="w-11 h-11 flex items-center justify-center bg-white rounded-full text-[#761B0F]"
//                   >
//                     <Icon />
//                   </div>
//                 )
//               )}
//             </div>
//           </div>

//           {/* BLUE DIVIDER LINE */}
//           {/* <div className="w-full h-[2px] bg-[#1fa3ff] opacity-80 my-4" /> */}

//           {/* COPYRIGHT */}
//           <p className="text-center text-xs opacity-80 mb-6">
//             All copyrights reserved by Telugumatchmakers.com
//           </p>

//           {/* CTA BUTTONS */}
//           <div className="flex flex-col items-center gap-4 px-6">
//             <button
//               onClick={scrollToContact}
//               className="w-full max-w-sm bg-[#d8892b] text-[#5a1a0c] py-4 rounded-lg font-semibold tracking-wide"
//             >
//               FIND YOUR LIFE PARTNER
//             </button>

//             <button
//               onClick={scrollToContact}
//               className="w-full max-w-sm bg-[#380700] border-2 border-[#d8892b] text-[#d8892b] py-4 rounded-lg font-semibold tracking-wide"
//             >
//               PARTNER WITH US
//             </button>
//           </div>

//         </div>
//       </div>

//     </footer>
//   );
// };

// export default Footer;


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
