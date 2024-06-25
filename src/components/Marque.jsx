import React from "react";
import { motion } from "framer-motion";
function Marque() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className="w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-yellow-500 ">
      <div className="flex border-t-2 border-b-2 border-zinc-300  overflow-hidden whitespace-nowrap uppercase">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 5 }}
          className="text-[17vw]  font-sans font-extrabold leading-none -mt-[1.5vw] -mb-[3vw] pr-20"
        >
          Enojy Kalki
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 5 }}
          className="text-[17vw] font-sans font-extrabold leading-none -mt-[1.5vw] pr-20"
        >
          Enojy Kalki
        </motion.h1>
      </div>
    </div>
  );
}

export default Marque;
