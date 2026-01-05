import React from "react";
import { useNavigate } from "react-router-dom";
import NavLogo from "../assets/Nav.png";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="w-full bg-[#761B0F] px-6 py-4 flex items-center justify-between">
      
      {/* Left */}
      <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate("/")}>
        <img src={NavLogo} alt="Logo" className="w-10 h-10 object-contain" />
        <h1 className="text-white text-2xl font-serif font-semibold">
          Telugu <br /> Matchmakers
        </h1>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => navigate("/partner")}
          className="border-2 border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-[#6b3a0a] transition font-semibold"
        >
          PARTNER WITH US
        </button>

        <button
          onClick={() => navigate("/")}
          className="border-2 border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-[#6b3a0a] transition font-semibold"
        >
          FIND YOUR LIFE PARTNER
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
