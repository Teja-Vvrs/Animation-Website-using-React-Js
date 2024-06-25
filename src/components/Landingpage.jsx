import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
function Landingpage() {
  return (
    <div data-scroll data-scroll-speed="-.1" className=" w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-40 px-20">
        {["WE create", "eye opening", "presentations"].map((item, index) => {
          return (
            <div className="masker">
              <div className="w-fit flex items-center">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "8vw" }}
                    transistion={{ ease: [0.76, 0, 0.24, 1], duration: 0.8 }}
                    className="w-[8vw] h-[5.9vw] rounded relative -top-[0.1vw] mr-[1vw] bg-green-500"
                  ></motion.div>
                )}
                <h1
                  key={index}
                  className=" uppercase text-[7vw] leading-[8vw]  font-extrabold font-mono"
                >
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>

      <div className="border-t-[1px] mt-32 border-zinc-800 flex justify-between items-center px-20 py-5">
        {["For public and private compaines", "From the pitch to IPO"].map(
          (item, index) => {
            return (
              <p
                className="text-white font-mono font-light  tracking-tighter leading-none text-md"
                key={index}
              >
                {item}
              </p>
            );
          }
        )}

        <div className="start flex items-center gap-5">
          <div className="border-[1px] border-zinc-500 py-2 px-4 rounded-full font-light font-mono text-md">
            START THE PROJECT
          </div>
          <div className="rounded-full w-10 h-10 border-[1px] border-zinc-500 flex items-center justify-center">
            <span className=" rotate-45">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landingpage;
