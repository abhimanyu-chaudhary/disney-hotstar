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
        <img className='w-full h-full' src="https://image.tmdb.org/t/p/original/nP6RliHjxsz4irTKsxe8FRhKZYl.jpg" alt="movie-poster" />
        
      ))}
    </div>
  )
}

export default TrendingMovie;
