import React from 'react'
import Subscribe from './Subscribe';
import Add from './Add';

function HomePage() {
  const movieData = [
    { movie: "https://img10.hotstar.com/image/upload/f_auto,h_148/sources/r1/cms/prod/2548/1612548-t-3dea9a3bb57d", newRelease: true, year: 2016, season: 1, language: 7, rating: "U/A 16+", title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse enim debitis, necessitatibus beatae aperiam vero commodi minima ad at iusto. Culpa ullam excepturi id!", genre: "Action | Thriller | Tragedy | Power Struggle", subscribe: true, add: true},
    { movie: "https://img10.hotstar.com/image/upload/f_auto,h_148/sources/r1/cms/prod/2548/1612548-t-3dea9a3bb57d", newRelease: true, year: 2016, season: 1, language: 7, rating: "U/A 16+", title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse enim debitis, necessitatibus beatae aperiam vero commodi minima ad at iusto. Culpa ullam excepturi id!", genre: "Action | Thriller | Tragedy | Power Struggle", subscribe: true, add: true},
    { movie: "https://img10.hotstar.com/image/upload/f_auto,h_148/sources/r1/cms/prod/2548/1612548-t-3dea9a3bb57d", newRelease: true, year: 2016, season: 1, language: 7, rating: "U/A 16+", title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse enim debitis, necessitatibus beatae aperiam vero commodi minima ad at iusto. Culpa ullam excepturi id!", genre: "Action | Thriller | Tragedy | Power Struggle", subscribe: true, add: true},
    { movie: "https://img10.hotstar.com/image/upload/f_auto,h_148/sources/r1/cms/prod/2548/1612548-t-3dea9a3bb57d", newRelease: true, year: 2016, season: 1, language: 7, rating: "U/A 16+", title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse enim debitis, necessitatibus beatae aperiam vero commodi minima ad at iusto. Culpa ullam excepturi id!", genre: "Action | Thriller | Tragedy | Power Struggle", subscribe: true, add: true},
    { movie: "https://img10.hotstar.com/image/upload/f_auto,h_148/sources/r1/cms/prod/2548/1612548-t-3dea9a3bb57d", newRelease: true, year: 2016, season: 1, language: 7, rating: "U/A 16+", title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse enim debitis, necessitatibus beatae aperiam vero commodi minima ad at iusto. Culpa ullam excepturi id!", genre: "Action | Thriller | Tragedy | Power Struggle", subscribe: true, add: true},
  ]
  return (
    <div>
      <div className="pt-16 pl-10 relative w-[100vw] h-[100vh]">
        <video
          width="100%"
          height="100%"
          className="-z-10 object-contain absolute top-[-6vh] left-[-9vw]"
          src="./../../public/TazzaKhabar.mp4"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Background Video"
          autoPlay
          muted
          loop
        ></video>

        <div className="flex flex-col gap-4 h-[80%]">
          <img className="w-40" src={movieData[0].movie} alt="" />
          <h1>{movieData[0].newRelease && "NewRelease"}</h1>
          <div className="flex gap-2 font-semibold">
            <h1>{movieData[0].year}</h1>
            <h1>{movieData[0].season} Seasons</h1>
            <h1>{movieData[0].language} Languages</h1>
            <h1>{movieData[0].rating}</h1>
          </div>
          <h5 className="w-[30rem] text-slate-300">{movieData[0].title}</h5>
          <h1 className="font-semibold">{movieData[0].genre}</h1>
          <div className="flex gap-[20rem]">
            <div className='flex gap-5 mt-2'>
              <Subscribe />
              <Add />
            </div>
            <div className="flex mt-5 gap-3">
              {movieData.map((movie, index) => {
                return (
                  <div className="w-10 h-5 ">
                    <img src={movie.movie} alt="" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
