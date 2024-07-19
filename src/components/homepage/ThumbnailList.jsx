import React, { useRef } from "react";
import './../../App.css'

function ThumbnailList({ thumbnail, onThumbnailClick }) {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollLeft += 50;
  };

  const scrollRight = () => {
    scrollRef.current.scrollRight -= 50;
  };

  return (
    <div className="flex">
      <button onClick={scrollLeft}> &lt; </button>
      <div ref={scrollRef} className="flex  overflow-x-auto scrollbar-hide cursor-pointer mt-4 h-auto" style={{width: "40vw"}}>
        {thumbnail.map((thumbnail, index) => (
          <div
            key={index}
            className="min-w-20 hover:scale-125 hover:transition-all hover:ease-in-out h-auto"
            onClick={() => onThumbnailClick(thumbnail)}
          >
            <img src={thumbnail.thumbnail} alt="movie-thumbnail" />
          </div>
        ))}
      </div>
      <button onClick={scrollRight}> &gt; </button>
    </div>
  );
}

export default ThumbnailList;
