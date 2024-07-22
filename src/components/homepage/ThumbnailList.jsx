import React, { useRef } from "react";
import './../../App.css'
import { useLocation } from "react-router-dom";

function ThumbnailList({ thumbnail, onThumbnailClick, activeThumbnail }) {

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollLeft -= 50;
  };

  const scrollRight = () => {
    scrollRef.current.scrollLeft += 50;
  };

  return (
    <div className="flex h-full">
      <button onClick={scrollLeft} className="p-5 mt-2 font-bold"> &lt; </button>
      <div ref={scrollRef} className="flex w-30 overflow-x-auto scrollbar-hide cursor-pointer pt-4 h-full" style={{width: "60vw"}}>
        {thumbnail.map((thumbnail, index) => (
          <div
            key={index}
            className={`min-w-20 hover:scale-125 hover:transition-all hover:ease-in-out h-full ${activeThumbnail === thumbnail ? "border-2 border-white" : ""}`}
            onClick={() => onThumbnailClick(thumbnail)}
          >
            <img src={thumbnail.thumbnail} alt="movie-thumbnail" />
          </div>
        ))}
      </div>
      <button className="p-5 mt-2 font-bold" onClick={scrollRight}> &gt; </button>
    </div>
  );
}

export default ThumbnailList;
