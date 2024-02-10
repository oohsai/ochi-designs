import { motion } from "framer-motion";
import { FaArrowUpLong } from "react-icons/fa6";

const Landing = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className="w-full h-screen bg-zinc-900 pt-2"
    >
      <div className="textstructure mt-52 px-20">
        {["We Create", "Eye-Opening", "Presentations"].map((item, index) => {
          return (
            <div className="masker">
              <div className="w-fit flex">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 2 }}
                    className="mr-[1vw] w-[9vw] rounded-md h-[5.7vw] -top-[1.2vw] relative"
                  >
                    {" "}
                    <img
                      className="w-full rounded-lg bg-cover bg-center pt-4"
                      src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"
                    />
                  </motion.div>
                )}
                <h1 className="uppercase text-[9vw] h-full leading-[7.5vw] font-semibold font-['Founders_Grotesk_X-Condensed'] font-medium">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20">
        {[
          "For Public and Private Companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p className="text-md font-light tracking-none leading-none">
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-5">
          <div className="flex items-center gap-3 px-5 py-2 border-[2px] border-zinc-500 font-light text-sm uppercase rounded-full cursor-pointer">
            {" "}
            Start The Project{" "}
          </div>
          <div className="w-10 h-10 flex items-center justify-center border-[2px] border-zinc-500 rounded-full">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Landing;
