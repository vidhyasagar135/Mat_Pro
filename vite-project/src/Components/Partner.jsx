import React, { useState, useRef } from "react";
import pu from "../assets/pu.png";
import FormBorder from "../assets/FormBorder.png";

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
      {/* Top Image Section */}
      <section className="relative w-full h-[90vh] bg-[#761B0F] overflow-hidden flex flex-col items-center justify-center px-8 md:px-16 lg:px-24">
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

      {/* Partner Form Section */}
      <section
        ref={formRef}
        className="relative w-full py-20 px-4 md:px-8 lg:px-16 bg-[#F6E2D3] overflow-hidden"
      >
        {/* Decorative Borders */}
        <img src={FormBorder} className="absolute top-6 left-95 w-24 opacity-80" />
        <img src={FormBorder} className="absolute top-6 right-95 w-24 rotate-90 opacity-80" />
        <img src={FormBorder} className="absolute bottom-6 left-95 w-24 -rotate-90 opacity-80" />
        <img src={FormBorder} className="absolute bottom-6 right-95 w-24 rotate-180 opacity-80" />

        <div className="relative max-w-3xl mx-auto">
          <p className="text-center text-[#8B2E1C] text-sm font-medium mb-1">
            Join Hands to Grow With Purpose and Preserve Sacred Traditions
          </p>

          <h2 className="text-center text-3xl font-serif font-bold text-[#7A1F14] mb-4">
            Join Telugu Matchmakers Today
          </h2>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            <div className="md:col-span-2">
              <label className="text-xs font-medium text-[#6A1C12]">Name</label>
              <input required className="mt-1 w-full px-4 py-2.5 rounded-full border" />
            </div>

            <div>
              <label className="text-xs font-medium text-[#6A1C12]">Phone</label>
              <input type="tel" required className="mt-1 w-full px-4 py-2.5 rounded-full border" />
            </div>

            <div>
              <label className="text-xs font-medium text-[#6A1C12]">Profiles</label>
              <select required defaultValue="" className="mt-1 w-full px-4 py-2.5 rounded-full border">
                <option value="" disabled>Select profiles range</option>
                <option>1 – 50</option>
                <option>50 – 100</option>
                <option>100+</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-medium text-[#6A1C12]">Gender</label>
              <select required defaultValue="" className="mt-1 w-full px-4 py-2.5 rounded-full border">
                <option value="" disabled>Select Gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-medium text-[#6A1C12]">City</label>
              <input required className="mt-1 w-full px-4 py-2.5 rounded-full border" />
            </div>

            <div className="md:col-span-2 mt-5">
              <button
                type="submit"
                className="w-full bg-[#E08A24] hover:bg-[#d17b1f] text-white font-semibold py-3 rounded-full"
              >
                SCHEDULE A CALL
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* SUCCESS POPUP */}
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
