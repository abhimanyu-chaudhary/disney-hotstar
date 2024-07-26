import React, { useEffect, useState } from 'react'
import ApiHandler from './../../api/ApiHandler'

function TrendingMovie() {
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        getTrendingMovies();
    })


    const getTrendingMovies = () => {
        ApiHandler.getTrendingMovies.then(res => {
            setMovie(res.data.results);
        })
    }
  return (
    <div>
      {movie.map((movie, index) => (
        <div>
            
        </div>
      ))}
    </div>
  )
}

export default TrendingMovie;
