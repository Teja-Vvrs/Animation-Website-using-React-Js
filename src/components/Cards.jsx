import React from "react";

function Cards() {
  return (
    <div className="w-full h-screen flex items-center gap-5 px-20 ">
      <div className="w-1/2 h-[50vh]">
        <div className="relative w-full h-full bg-yellow-400 rounded-xl flex items-center justify-center">
          <h1 className="text-6xl font-mono font-semibold text-black">KALKI</h1>
          <button className="absolute border-2 px-5 py-3 left-10 bottom-10 text-black border-black rounded-full">
            &copy;Nag Ashwin
          </button>
        </div>
      </div>

      <div className="w-1/2 h-[50vh] flex gap-5 ">
        <div className="relative w-1/2 h-full bg-red-700 rounded-xl flex items-center justify-center">
          <h1 className="text-5xl font-mono font-semibold text-zinc-950">
            Bhairava
          </h1>
          <button className="absolute border-2 px-4 py-2 left-6 bottom-10 text-black border-black rounded-full">
            &copy;Prabhas
          </button>
        </div>
        <div className="relative w-1/2 h-full bg-red-700 rounded-xl flex items-center justify-center">
          <h1 className="text-5xl font-mono font-semibold text-zinc-950">
            Ashwathama
          </h1>
          <button className="absolute border-2 px-4 py-2 left-6 bottom-10 text-black border-black rounded-full">
            &copy;Amitabh Bachchan
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
