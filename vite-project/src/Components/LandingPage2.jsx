import LpImage from "../assets/LpImage.png";
import TpDesign from "../assets/tpdesign.png";
import br from "../assets/Decor2-Yellow.png";
import tf from "../assets/tpdesign.png";
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
        <img
          src={TpDesign}
          alt="Top Right Design"
          className="absolute top-0 right-0 w-72 lg:w-96 opacity-80 pointer-events-none"
        />

        <img
          src={TpDesign}
          alt="Bottom Left Design"
          className="absolute bottom-0 left-0 w-72 lg:w-96 opacity-80 rotate-180 pointer-events-none"
        />

        <img
          src={LpImage}
          alt="Landing Content"
          className="w-[60%] lg:w-[55%] h-auto block relative z-10 -mt-28"
        />
      </div>

      {/* ================= MOBILE VIEW ================= */}
      <div className="relative md:hidden bg-[#FFE4C4] w-full px-4 pt-6 pb-24 space-y-6 overflow-hidden">
        {/* Mobile Top-Left Design */}
        <img
          src={TpDesign}
          alt="Top Left Design"
          className="
            absolute
            top-[0%]
            left-[1%]
            w-[160px]
            opacity-100
            pointer-events-none
          "
        />

        {/* Mobile Bottom-Right Design (PERFECT POSITION) */}
        <img
          src={br}
          alt="Decor Bottom Right"
          className="
            absolute
            -bottom-[1.5%]
            -right-[0%]
            w-[180px]
            opacity-100
            pointer-events-none
            z-0
          "
        />

        {/* Mobile Content */}
        <img
          src={llp1}
          alt="Section 1"
          className="w-[92%] mx-auto block relative z-10"
        />
        <img
          src={llp2}
          alt="Section 2"
          className="w-[92%] mx-auto block relative z-10"
        />
        <img
          src={llp3}
          alt="Section 3"
          className="w-[92%] mx-auto block relative z-10"
        />
        <img
          src={llp4}
          alt="Section 4"
          className="w-[92%] mx-auto block relative z-10"
        />
        <img
          src={llp5}
          alt="Section 5"
          className="w-[92%] mx-auto block relative z-10"
        />
      </div>
    </>
  );
};

export default LandingPage2;
