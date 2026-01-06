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
      <img
        src={cu}
        alt="Contact Us Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />

      {/* MOBILE DECORS */}
      <img
        src={decors}
        alt="Decor Top Left"
        className="
          absolute
          md:hidden
          top-[0%]
          left-[0%]
          w-[200px]
          pointer-events-none
          z-0
        "
      />

      <img
        src={decors2}
        alt="Decor Bottom Right"
        className="
          absolute
          md:hidden
          -bottom-[0%]
          -right-[0%]
          w-[200px]
          pointer-events-none
          z-0
        "
      />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        {/* ================= FORM ================= */}
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
              <div className="mt-3 flex justify-center gap-2">
                <span className="h-px w-10 bg-[#7a2a14]" />
                <span className="h-px w-10 bg-[#7a2a14]" />
              </div>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Name */}
              <div>
                <label className="block text-sm text-[#7a2a14] mb-1 font-serif">
                  Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter Your Name"
                  className="w-full rounded-xl border border-[#e3c2b3] px-4 py-3 focus:outline-none"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm text-[#7a2a14] mb-1 font-serif">
                  Phone
                </label>
                <input
                  type="tel"
                  required
                  maxLength="10"
                  pattern="[6-9]{1}[0-9]{9}"
                  placeholder="Enter 10-digit mobile number"
                  onInput={(e) =>
                    (e.target.value = e.target.value.replace(/[^0-9]/g, ""))
                  }
                  className="w-full rounded-xl border border-[#b45a3c] px-4 py-3 focus:outline-none"
                />
              </div>

              {/* Caste */}
              <div>
                <label className="block text-sm text-[#7a2a14] mb-1 font-serif">
                  Caste
                </label>
                <select
                  value={caste}
                  onChange={(e) => setCaste(e.target.value)}
                  className={`w-full rounded-xl px-4 py-3 bg-white focus:outline-none border ${
                    error ? "border-red-500" : "border-[#e3c2b3]"
                  }`}
                >
                  <option value="" disabled>
                    Select Your Caste
                  </option>
                  <option value="kapu">Kapu Naidu</option>
                  <option value="reddy">Reddy</option>
                  <option value="kamma">Kamma</option>
                </select>

                {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="mt-4 w-full rounded-xl bg-[#d8841f] py-3 font-serif font-semibold text-[#7a2a14] hover:opacity-90 transition"
              >
                CONTACT NOW
              </button>
            </form>
          </div>
        )}

        {/* ================= SUCCESS ================= */}
        {submitted && (
          <div className="w-full max-w-md rounded-3xl bg-[#fde8dc] p-10 shadow-2xl text-center">
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

            <h3 className="text-2xl font-serif font-semibold text-[#7a2a14] mb-3">
              Successfully Submitted
            </h3>

            <p className="text-[#7a2a14] mb-6">
              Thank you for enrolling to find a suitable soul.
              <br />
              Our team will contact you shortly.
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
