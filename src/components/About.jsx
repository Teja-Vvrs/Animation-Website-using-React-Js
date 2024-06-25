import React from "react";

function About() {
  return (
    <div  className="w-full bg-orange-500 p-20 rounded-tl-3xl rounded-tr-3xl text-stone-950">
      <h1 className="font-sans text-[3.3vw] leading-[3.5vw] tracking-tight">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>

      <div className="w-full flex gap-5 border-orange-900 border-t-[1px] mt-[4vw] pt-10">

      <div className="w-1/2">
        <h1 className="text-[4vw] font-sans">Our approach :</h1>
        <button className="bg-zinc-800 text-white text-base rounded-full px-10 py-5 mt-10  uppercase flex items-center gap-5">read more
            <div className=" w-2 h-2 bg-white rounded-full"></div>
        </button>
      </div>
 
        <div className="w-1/2 h-[70vh] rounded-3xl bg-yellow-500">

        </div>

      </div>
    </div>
  );
}

export default About;
