import React from "react";
import { useNavigate } from "react-router-dom";
import NavLogo from "../assets/MainLogo.png";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <nav className="w-full bg-[#761B0F] px-4 py-4">
      
      <div className="flex items-center justify-center md:justify-between">
        
        {/* Logo */}
        <div
          className="cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            src={NavLogo}
            alt="Telugu Matchmakers Logo"
            className="w-40 md:w-52 h-auto object-contain"
          />
        </div>

        {/* Buttons – Hidden on Mobile */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => navigate("/partner")}
            className="border-2 border-white text-white px-6 py-2 rounded-full
                       hover:bg-white hover:text-[#6b3a0a] transition font-semibold"
          >
            PARTNER WITH US
          </button>

          <button
            onClick={() => navigate("/")}
            className="border-2 border-white text-white px-6 py-2 rounded-full
                       hover:bg-white hover:text-[#6b3a0a] transition font-semibold"
          >
            FIND YOUR LIFE PARTNER
          </button>
        </div>

      </div>
    </nav>
  );
};

export default NavBar;
