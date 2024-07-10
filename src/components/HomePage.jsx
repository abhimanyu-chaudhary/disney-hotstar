import React from 'react'

function HomePage() {
  const movieData = [
    { movie: "https://img10.hotstar.com/image/upload/f_auto,h_148/sources/r1/cms/prod/2548/1612548-t-3dea9a3bb57d", newRelease: true, year: 2016, season: 1, language: 7, rating: "U/A 16+", title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse enim debitis, necessitatibus beatae aperiam vero commodi minima ad at iusto. Culpa ullam excepturi id!", genre: "Action | Thriller | Tragedy | Power Struggle", subscribe: true, add: true}
  ]
  return (
    <div>
      <div className='mt-14 text-slate-300'>
        <video muted autoPlay className='w-96 h-96' src="https://www.youtube.com/watch?v=97ozjepH31Y"></video>
        <div className='flex flex-col gap-3'>
          <img className='w-40' src={movieData[0].movie} alt="" />
          <h1>{movieData[0].newRelease && "NewRelease"}</h1>
          <div className='flex gap-2 font-semibold'>
            <h1>{movieData[0].year}</h1>
            <h1>{movieData[0].season} Seasons</h1>
            <h1>{movieData[0].language} Languages</h1>
            <h1>{movieData[0].rating}</h1>
          </div>
          <h5 className='w-[30rem]'>{movieData[0].title}</h5>
          <h1 className='font-semibold'>{movieData[0].genre}</h1>
        </div>
        <div>
        </div>
      </div>
    </div>
  )
}

export default HomePage;
