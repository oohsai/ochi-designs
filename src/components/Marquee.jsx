import { motion } from "framer-motion";

function Marquee() {
  return (
    <div
      data-scroll
      data-scroll-speed=".1"
      className="w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#1C4D43]"
    >
      <div className="text border-t-2 border-b-2 border-zinc-300 flex  overflow-hidden whitespace-nowrap">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className="text-[22vw] leading-none font-founders font-semibold uppercase pt-7 -mb-[7vw] pr-10"
        >
          we are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className="text-[22vw] leading-none font-founders font-semibold uppercase pt-7 -mb-[7vw] pr-10"
        >
          we are ochi
        </motion.h1>
      </div>
    </div>
  );
}
export default Marquee;
