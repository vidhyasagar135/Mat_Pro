import React, { useState } from "react";
import cu from "../assets/Contactus.png";
import decors from "../assets/Decor1-Yellow.png";
import decors2 from "../assets/Decor2-Yellow.png";

const ContactUs = () => {
  const [submitted, setSubmitted] = useState(false);
  const [caste, setCaste] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!caste) {
      setError("Please select your caste");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  return (
    <section id="contact-us" className="relative w-full min-h-screen overflow-hidden">
      {/* Background */}
      <img src={cu} alt="Contact Us Background" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/40" />

      {/* ================= WEB DECORS ================= */}
      {/* TOP RIGHT */}
      <img
        src={decors}
        alt="Decor Top Right"
        className="hidden md:block pointer-events-none absolute top-[0%] right-[0%] w-[35%] max-w-144.25 opacity-90 z-0"
      />

      {/* BOTTOM LEFT */}
      <img
        src={decors2}
        alt="Decor Bottom Left"
        className="hidden md:block pointer-events-none absolute bottom-[0%] left-[5%] w-[35%] max-w-120 opacity-90 z-0"
      />

      {/* ================= MOBILE DECORS ================= */}
      <img
        src={decors}
        alt="Decor Top Left"
        className="absolute md:hidden top-[0%] left-[0%] w-50 pointer-events-none z-0"
      />

      <img
        src={decors2}
        alt="Decor Bottom Right"
        className="absolute md:hidden bottom-[0%] right-[0%] w-50 pointer-events-none z-0"
      />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        {!submitted && (
          <div className="w-full max-w-md rounded-3xl bg-[#fde8dc] p-8 shadow-2xl">
            {/* Heading */}
            <div className="text-center mb-6">
              <p className="text-[#7a2a14] text-lg font-serif">
                Ready to find your soulmate?
              </p>
              <h2 className="text-4xl font-serif font-semibold text-[#7a2a14] mt-2">
                Contact Us
              </h2>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm text-[#7a2a14] mb-1 font-serif">Name</label>
                <input required placeholder="Enter Your Name" className="w-full rounded-xl border px-4 py-3 focus:outline-none" />
              </div>

              <div>
                <label className="block text-sm text-[#7a2a14] mb-1 font-serif">Phone</label>
                <input
                  type="tel"
                  required
                  maxLength="10"
                  pattern="[6-9]{1}[0-9]{9}"
                  placeholder="Enter 10-digit mobile number"
                  onInput={(e) => (e.target.value = e.target.value.replace(/[^0-9]/g, ""))}
                  className="w-full rounded-xl border px-4 py-3 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm text-[#7a2a14] mb-1 font-serif">Caste</label>
                <select
                  value={caste}
                  onChange={(e) => setCaste(e.target.value)}
                  className={`w-full rounded-xl px-4 py-3 border ${error ? "border-red-500" : "border-[#e3c2b3]"}`}
                >
                  <option value="" disabled>Select Your Caste</option>
                  <option value="kapu">Kapu Naidu</option>
                  <option value="reddy">Reddy</option>
                  <option value="kamma">Kamma</option>
                </select>
                {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
              </div>

              <button type="submit" className="mt-4 w-full rounded-xl bg-[#d8841f] py-3 font-serif font-semibold text-[#7a2a14]">
                CONTACT NOW
              </button>
            </form>
          </div>
        )}

        {submitted && (
          <div className="w-full max-w-md rounded-3xl bg-[#fde8dc] p-10 shadow-2xl text-center">
            <h3 className="text-2xl font-serif font-semibold text-[#7a2a14] mb-3">
              Successfully Submitted
            </h3>
            <p className="text-[#7a2a14] mb-6">
              Thank you for enrolling.
              <br />Our team will contact you shortly.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setCaste("");
              }}
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