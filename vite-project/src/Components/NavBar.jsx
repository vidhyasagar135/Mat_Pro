import React from "react";
import { useNavigate } from "react-router-dom";
import NavLogo from "../assets/MainLogo.png";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <nav className="w-full bg-[#761B0F] px-10 py-4 flex items-center justify-between">
      
      {/* Left */}
      <div
        className="flex items-center cursor-pointer ml-6"
        onClick={() => navigate("/")}
      >
        <img
          src={NavLogo}
          alt="Logo"
          className="w-50 h-auto object-contain"
        />
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

export default NavBar;
