import LpImage from "../assets/LpImage.png";
import TpDesign from "../assets/tpdesign.png";

const LandingPage2 = () => {
  return (
    <>
      

      {/* Main Section */}
      <div className="relative min-h-screen bg-[#FFE4C4] overflow-hidden flex items-center justify-center">
        
        {/* Top Right Design */}
        <img
          src={TpDesign}
          alt="Top Right Design"
          className="absolute top-0 right-0 w-72 md:w-80 lg:w-96 opacity-80 pointer-events-none"
        />

        {/* Bottom Left Design */}
        <img
          src={TpDesign}
          alt="Bottom Left Design"
          className="absolute bottom-0 left-0 w-64 md:w-80 lg:w-96 opacity-80 rotate-180 pointer-events-none"
        />

        {/* Center Content */}
        <div className="relative z-10 flex justify-center">
          <img
            src={LpImage}
            alt="Landing Content"
            className="w-[70%] md:w-[60%] lg:w-[55%] h-auto"
          />
        </div>

      </div>

     
    </>
  );
};

export default LandingPage2;
