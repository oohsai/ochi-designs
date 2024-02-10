import { motion, useAnimation } from "framer-motion";

export default function Featured() {
  const cards = [useAnimation(), useAnimation()];
  return (
    <div className="w-full py-20 bg-zinc-900">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
        <h1 className="text-8xl font-['Neue_Montreal'] tracking-tight">
          Featured Projects
        </h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-20 ">
          <motion.div
            onHoverStart={() => cards[0].start({ y: "0" })}
            onHoverEnd={() => cards[0].start({ y: "100%" })}
            className="cardcontainer relative w-1/2 h-[80vh]"
          >
            <div className="absolute flex text-[#CDEA68] overflow-hidden left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-8xl font-semibold">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </div>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png
"
              />
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => cards[1].start({ y: "0" })}
            onHoverEnd={() => cards[1].start({ y: "100%" })}
            className="cardcontainer relative w-1/2 h-[80vh] "
          >
            <div className="absolute flex overflow-hidden text-[#CDEA68] rigth-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-8xl font-semibold">
              {"VISE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </div>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
