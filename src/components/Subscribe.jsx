import React from "react";
import { FaPlay } from "react-icons/fa";
function Subscribe() {
  return (
    <>
      <div className="w-[21rem] h-14 bg-custom-white flex gap-3 items-center justify-center font-semibold rounded-lg">
        <span className="text-white">
          <FaPlay />
        </span>
        <h1>Subscribe to Watch</h1>
      </div>
    </>
  );
}

export default Subscribe;
