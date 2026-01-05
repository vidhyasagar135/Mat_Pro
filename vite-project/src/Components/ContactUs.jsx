import React, { useState } from "react";
import cu from "../assets/Contactus.png";

const ContactUs = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact-us"
      className="relative w-full min-h-screen"
    >
      {/* Background Image */}
      <img
        src={cu}
        alt="Contact Us Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">

        {/* ================= FORM ================= */}
        {!submitted && (
          <div className="w-full max-w-md rounded-3xl bg-[#fde8dc] p-8 shadow-2xl">
            
            {/* Heading */}
            <div className="text-center mb-6">
              <div className="text-[#7a2a14] text-lg font-serif">
                Ready to find your soulmate?
              </div>

              <div className="text-4xl font-serif font-semibold text-[#7a2a14] mt-2">
                Contact Us
              </div>

              <div className="mt-3 flex items-center justify-center gap-2">
                <span className="h-px w-10 bg-[#7a2a14]" />
                <span className="h-px w-10 bg-[#7a2a14]" />
              </div>
            </div>

            {/* Form */}
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm text-[#7a2a14] mb-1 font-serif">
                  Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full rounded-xl border border-[#e3c2b3] px-4 py-3 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm text-[#7a2a14] mb-1 font-serif">
                  Phone
                </label>
                <input
                  type="text"
                  required
                  className="w-full rounded-xl border border-[#b45a3c] px-4 py-3 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm text-[#7a2a14] mb-1 font-serif">
                  Caste
                </label>
                <select className="w-full rounded-xl border border-[#e3c2b3] px-4 py-3 bg-white focus:outline-none">
                  <option>Select Your Caste</option>
                  <option>Kapu Naidu</option>
                  <option>Reddy</option>
                  <option>Kamma</option>
                </select>
              </div>

              <button
                type="submit"
                className="mt-4 w-full rounded-xl bg-[#d8841f] py-3 font-serif font-semibold text-[#7a2a14] hover:opacity-90 transition"
              >
                CONTACT NOW
              </button>
            </form>
          </div>
        )}

        {/* ================= SUCCESS POPUP ================= */}
        {submitted && (
          <div className="w-full max-w-md rounded-3xl bg-[#fde8dc] p-10 shadow-2xl text-center">
            
            {/* Check Icon */}
            <div className="flex justify-center mb-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500">
                <svg
                  className="h-7 w-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>

            <div className="text-2xl font-serif font-semibold text-[#7a2a14] mb-3">
              Successfully Submitted
            </div>

            <div className="text-[#7a2a14] mb-6">
              Thank you for enrolling to find a suitable soul.
              <br />
              Our team will contact you shortly.
            </div>

            <button
              onClick={() => setSubmitted(false)}
              className="w-full rounded-xl bg-[#d8841f] py-3 font-serif font-semibold text-[#7a2a14]"
            >
              OK
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default ContactUs;
