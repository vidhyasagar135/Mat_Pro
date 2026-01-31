import Image1 from "../assets/Image1.png";
import Image1Frame from "../assets/Image1Frame.png";
import top1 from "../assets/t1.png";
import top2 from "../assets/t2.png";
import cimg from "../assets/c.png";

const LandingPage = () => {
  const scrollToContact = () => {
    document
      .getElementById("contact-us")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#761B0F] w-full overflow-hidden">

      {/* ================= DESKTOP / WEB VIEW ================= */}
      <div className="relative w-[90%] max-w-6xl mx-auto hidden md:block pt-4 pb-0">

        {/* Frame */}
        <img src={Image1Frame} alt="Frame" className="absolute top-7 left-0 w-full h-full object-contain scale-90 pointer-events-none"/>



        {/* Content */}
        <div className="relative z-10 p-10">
          
          {/* 🔥 IMAGE MOVED DOWN & RIGHT (WEB ONLY) */}
          <img
            src={Image1}
            alt="Landing Content"
            className="
              w-full 
              h-auto 
              rounded-md 
              block
              md:translate-x-9
              md:translate-y-10
            "
          />

          {/* Desktop Button */}
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

      {/* ================= MOBILE VIEW ================= */}
      <div className="md:hidden w-full px-6 pt-4 space-y-4">

        <img
          src={top1}
          alt="Only App for Traditional Marriages"
          className="mx-auto w-[90%] block"
        />

        <img
          src={top2}
          alt="Largest and Most Successful"
          className="mx-auto w-[85%] block"
        />

        <img
          src={cimg}
          alt="Couple"
          className="mx-auto w-full block"
        />
      </div>
    </div>
  );
};

export default LandingPage;
