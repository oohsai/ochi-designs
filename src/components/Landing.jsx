import { FaArrowUpLong } from "react-icons/fa6";

const Landing = () => {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-2">
      <div className="textsctructure mt-52 px-20">
        {["We Create", "Eye-Opening", "Presentations"].map((item, index) => {
          return (
            <div className="masker">
              <div className="w-fit flex">
                {index === 1 && (
                  <div className="mr-[1vw] w-[8vw] rounded-md h-[5.7vw] -top-[1.2vw] relative bg-green-500"></div>
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
          <div className="flex items-center gap-3 px-5 py-2 border-[2px] border-zinc-500 font-light text-sm uppercase rounded-full">
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
