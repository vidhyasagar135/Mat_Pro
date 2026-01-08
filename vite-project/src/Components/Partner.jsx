import React, { useState, useRef } from "react";
import pu from "../assets/pu.png";
import FormBorder from "../assets/FormBorder.png";
import tpright from "../assets/tpdesign.png";
import bleft from "../assets/btleft.png";
import bgright from "../assets/Decor2-Yellow.png";

const Partner = () => {
  const [showPopup, setShowPopup] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ================= TOP IMAGE SECTION ================= */}
      <section className="relative w-full h-[90vh] bg-[#761B0F] overflow-hidden flex flex-col items-center justify-center px-8 md:px-16 lg:px-24">
        
        {/* BOTTOM RIGHT DECOR (TOP SECTION ONLY) */}
        <img
          src={bgright}
          alt="Bottom Right Decor"
          className="hidden md:block absolute bottom-0 right-1 w-124 opacity-90 pointer-events-none"
        />

        <img
          src={pu}
          alt="Partner Section"
          className="w-[80%] h-auto object-contain max-w-full mb-8"
        />

        <button
          onClick={scrollToForm}
          className="bg-[#E08A24] hover:bg-[#d17b1f] text-[#4A1C0A] font-semibold text-sm px-8 py-3 rounded-full transition tracking-wide"
        >
          BECOME A PARTNER
        </button>
      </section>

      {/* ================= PARTNER FORM SECTION ================= */}
      <section
        ref={formRef}
        className="relative w-full py-28 md:py-32 lg:py-40 px-4 md:px-8 lg:px-16 bg-[#F6E2D3] overflow-hidden"
      >
        {/* Section Decors */}
        <img
          src={tpright}
          className="hidden md:block absolute top-0 right-5 w-120 opacity-90 pointer-events-none"
        />
        <img
          src={bleft}
          className="hidden md:block absolute bottom-0 left-18.5 w-117 opacity-90 pointer-events-none"
        />

        {/* FORM CONTAINER */}
        <div className="relative max-w-3xl mx-auto">
          {/* ===== FORM BORDERS (CLOSE TO FORM) ===== */}
          <img
            src={FormBorder}
            className="hidden md:block absolute -top-6 -left-6 w-20 opacity-80"
          />
          <img
            src={FormBorder}
            className="hidden md:block absolute -top-6 -right-6 w-20 rotate-90 opacity-80"
          />
          <img
            src={FormBorder}
            className="hidden md:block absolute -bottom-6 -left-6 w-20 -rotate-90 opacity-80"
          />
          <img
            src={FormBorder}
            className="hidden md:block absolute -bottom-6 -right-6 w-20 rotate-180 opacity-80"
          />

          <p className="text-center text-[#8B2E1C] text-sm font-medium mb-1">
            Join Hands to Grow With Purpose and Preserve Sacred Traditions
          </p>

          <h2 className="text-center text-3xl font-serif font-bold text-[#7A1F14] mb-4">
            Join Telugu Matchmakers Today
          </h2>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-5 md:scale-80 md:origin-center"
          >
            <div className="md:col-span-2">
              <label className="text-base font-semibold text-[#6A1C12]">
                Name
              </label>
              <input
                required
                className="mt-2 w-full px-6 py-3.5 rounded-full border text-lg"
              />
            </div>

            <div>
              <label className="text-base font-semibold text-[#6A1C12]">
                Phone
              </label>
              <input
                type="tel"
                required
                className="mt-2 w-full px-6 py-3.5 rounded-full border text-lg"
              />
            </div>

            <div>
              <label className="text-base font-semibold text-[#6A1C12]">
                Profiles
              </label>
              <select
                required
                defaultValue=""
                className="mt-2 w-full px-6 py-3.5 rounded-full border text-lg"
              >
                <option value="" disabled>
                  Select profiles range
                </option>
                <option>1 – 50</option>
                <option>50 – 100</option>
                <option>100+</option>
              </select>
            </div>

            <div>
              <label className="text-base font-semibold text-[#6A1C12]">
                Gender
              </label>
              <select
                required
                defaultValue=""
                className="mt-2 w-full px-6 py-3.5 rounded-full border text-lg"
              >
                <option value="" disabled>
                  Select Gender
                </option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>

            <div>
              <label className="text-base font-semibold text-[#6A1C12]">
                City
              </label>
              <input
                required
                className="mt-2 w-full px-6 py-3.5 rounded-full border text-lg"
              />
            </div>

            <div className="md:col-span-2 mt-7">
              <button
                type="submit"
                className="w-full bg-[#E08A24] hover:bg-[#d17b1f]
                           text-white text-xl font-semibold
                           py-4 rounded-full"
              >
                SCHEDULE A CALL
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* ================= SUCCESS POPUP ================= */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-[#FCE5D4] rounded-[28px] px-10 py-8 w-[90%] max-w-md text-center shadow-2xl">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white text-xl">
                ✓
              </div>
            </div>

            <h3 className="text-2xl font-serif font-semibold text-[#7a2a14] mb-3">
              Successfully Submitted
            </h3>

            <p className="text-[#7a2a14] text-sm mb-6">
              Welcome to Telugu Matchmakers family.
              <br />
              Our team will contact you shortly.
            </p>

            <button
              onClick={() => setShowPopup(false)}
              className="w-full bg-[#D8831F] text-white font-semibold py-3 rounded-2xl"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Partner;
