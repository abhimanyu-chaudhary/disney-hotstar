import React from "react";

function ThumbnailList({thumbnail, onThumbnailClick}) {
  
  return(
    <div className="flex cursor-pointer mt-4">
        {thumbnail.map((thumbnail, index) => (
            <div key={index} className="min-w-20 hover:scale-125 hover:transition-all hover:ease-in-out" onClick={() => onThumbnailClick(thumbnail)}> 
                <img src={thumbnail.thumbnail} alt="movie-thumbnail" />
            </div>
        ))}
    </div>
  );
}

export default ThumbnailList;
