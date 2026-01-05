import Image1 from "../assets/Image1.png";
import Image1Frame from "../assets/Image1Frame.png";

const LandingPage = () => {
  const scrollToContact = () => {
    document
      .getElementById("contact-us")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#761B0F] flex items-center justify-center">

      <div className="relative w-[90%] max-w-6xl">

        {/* Frame Border */}
        <img
          src={Image1Frame}
          alt="Frame"
          className="absolute inset-0 w-full h-full object-contain pointer-events-none"
        />

        {/* Content */}
        <div className="relative z-10 p-10">
          <img
            src={Image1}
            alt="Landing Content"
            className="w-full h-auto rounded-md"
          />

          {/* BUTTON */}
          <button
            onClick={scrollToContact}
            className="
              absolute 
              bottom-[18%] 
              left-[10%]
              bg-[#F3B44C]
              text-[#761B0F]
              font-semibold
              px-6
              py-3
              rounded-full
              hover:scale-105
              transition
            "
          >
            FIND YOUR LIFE PARTNER
          </button>
        </div>

      </div>
    </div>
  );
};

export default LandingPage;
