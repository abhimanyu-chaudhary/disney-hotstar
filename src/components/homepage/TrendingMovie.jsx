import React, { useEffect, useState } from 'react'
import ApiHandler from './../../api/ApiHandler'

function TrendingMovie() {
    const url = "https://image.tmdb.org/t/p/original"
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        getTrendingMovies();
    })

    const getTrendingMovies = () => {
        ApiHandler.getTrendingMovies.then(res => {
            setMovie(res.data.results);
            console.log(res.data.results);
        })
    }

  return (
    <div className='flex'>
      {movie.map((movie, index) => (
        <img className='w-40' src={url + movie.poster_path} alt="movie-poster" />
        
      ))}
    </div>
  )
}

export default TrendingMovie;
