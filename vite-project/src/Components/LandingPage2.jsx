import LpImage from "../assets/LpImage.png";
import TpDesign from "../assets/tpdesign.png";
import webbt from "../assets/btleft.png";
import br from "../assets/Decor2-Yellow.png";
import llp1 from "../assets/lp2_1.png";
import llp2 from "../assets/lp2_2.png";
import llp3 from "../assets/lp2_3.png";
import llp4 from "../assets/lp2_4.png";
import llp5 from "../assets/lp2_5.png";

const LandingPage2 = () => {
  return (
    <>
      {/* ================= DESKTOP / WEB VIEW ================= */}
      <div className="relative h-[70vh] bg-[#FFE4C4] overflow-hidden hidden md:flex items-center justify-center">

        {/* Top Design */}
        <img
          src={TpDesign}
          alt="Top Right Design"
          className="absolute top-0 right-2 w-[520px] z-20 pointer-events-none"
        />

        {/* Bottom Design */}
        <img
          src={webbt}
          alt="Bottom Left Design"
          className="absolute bottom-0 left-0 w-[550px] z-20 pointer-events-none"
        />

        {/* IMAGE + NUMBERING WRAPPER */}
        <div className="relative w-[60%] lg:w-[55%] -mt-28 z-10">

          {/* Main Image */}
          <img
            src={LpImage}
            alt="Landing Content"
            className="w-full h-auto block"
          />

          {/* NUMBERING — WEB ONLY */}
          <div className="hidden md:flex absolute top-15 left-1/2 -translate-x-1/2 gap-40 z-30">


            <div className="w-11 h-11 bg-yellow-400 text-black rounded-full flex items-center justify-center font-bold text-lg shadow-md">
              1
            </div>

            <div className="w-11 h-11 bg-yellow-400 text-black rounded-full flex items-center justify-center font-bold text-lg shadow-md">
              2
            </div>

            <div className="w-11 h-11 bg-yellow-400 text-black rounded-full flex items-center justify-center font-bold text-lg shadow-md">
              3
            </div>

            <div className="w-11 h-11 bg-yellow-400 text-black rounded-full flex items-center justify-center font-bold text-lg shadow-md">
              4
            </div>

          </div>
        </div>
      </div>

      {/* ================= MOBILE VIEW ================= */}
      <div className="relative md:hidden bg-[#FFE4C4] w-full px-4 pt-6 pb-24 space-y-6 overflow-hidden">

        {/* Mobile Top Design */}
        <img
          src={TpDesign}
          alt="Top Left Design"
          className="absolute top-0 left-1 w-[160px] pointer-events-none"
        />

        {/* Mobile Bottom Design */}
        <img
          src={br}
          alt="Decor Bottom Right"
          className="absolute -bottom-2 right-0 w-[180px] pointer-events-none"
        />

        {/* Mobile Content */}
        <img src={llp1} alt="Section 1" className="w-[92%] mx-auto block relative z-10" />
        <img src={llp2} alt="Section 2" className="w-[92%] mx-auto block relative z-10" />
        <img src={llp3} alt="Section 3" className="w-[92%] mx-auto block relative z-10" />
        <img src={llp4} alt="Section 4" className="w-[92%] mx-auto block relative z-10" />
        <img src={llp5} alt="Section 5" className="w-[92%] mx-auto block relative z-10" />

      </div>
    </>
  );
};

export default LandingPage2;
