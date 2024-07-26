import React, { useState } from "react";
import Subscribe from "../Subscribe";
import Add from "../smallcomponents/Add";
import ThumbnailList from "./ThumbnailList";
import './../../App.css'
import { GoUnmute } from "react-icons/go";
import { GoMute } from "react-icons/go";
import TrendingMovie from "./TrendingMovie";


function HomePage() {
  const movieData = [
    {
      videoSrc: "./../../../public/TazzaKhabar.mp4",
      thumbnail:
        "https://img10.hotstar.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/6796/1721328016796-h",
      title:
        "https://img10.hotstar.com/image/upload/f_auto,h_148/sources/r1/cms/prod/6612/1721328506612-t",
      newRelease: true,
      year: 2023,
      season: "1 Season",
      language: "7 Languages",
      rating: "U/A 16+",
      subscribe: true,
      add: true,
      genre: "Action | Thriller | Tragedy | Power Struggle",
      description:
        "Lazy Nagendran has dreams of going to the Gulf and comes up with a plan to make money for the trip: marriage and dowry. But he does not stop at one...",
    },
    {
      videoSrc: "./../../../public/HeartBreak.mp4",
      thumbnail: "https://img10.hotstar.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/9992/1714373549992-h",
      title: "https://img10.hotstar.com/image/upload/f_auto,h_148/sources/r1/cms/prod/410/1711028050410-t",
      newRelease: true,
      year: 2016,
      season: "1 Season",
      language: "3 Languages",
      rating: "U/A 16+",
      description:
        "NEW EPISODES EVERY FRIDAY. RK Multispeciality Hospital is a beacon of hope and healing. Its doctors are resilient even when they have to deal with medic...",
      genre: "Action | Thriller | Tragedy | Power Struggle",
      subscribe: true,
      add: true,
    },
    {
      videoSrc: "./../../../public/KhiladiGirls.mp4",
      thumbnail:
        "https://img10.hotstar.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/5846/1719590015846-h",
      title:
        "https://img10.hotstar.com/image/upload/f_auto,h_148/sources/r1/cms/prod/4502/1719590064502-t",
      newRelease: true,
      year: 2024,
      season: 1,
      language: "Telugu",
      rating: "U/A 13+",
      description:
        "An innocent act of self-defence brings a reformed thief at loggerheads with the political leaders and a hilarious fight for justice begins.",
      genre: "Action | Thriller | Tragedy | Power Struggle",
      subscribe: true,
      add: true,
    },
    {
      videoSrc: "./../../../public/GovindaNaamMera.mp4",
      thumbnail:
        "https://img10.hotstar.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/2978/1432978-h-90572dd255c9",
      title:
        "https://img10.hotstar.com/image/upload/f_auto,h_148/sources/r1/cms/prod/2980/1432980-t-5d46b0e136a5",
      newRelease: false,
      year: 2022,
      season: "2h 11m",
      language: "Hindi",
      rating: "U/A 16+",
      description:
        "Wedged between a court case, a bad marriage and his girlfriend, Govinda Waghmare gets further entangled in       incidents complicating his already tangled world.",
      genre: "Action | Thriller | Tragedy | Power Struggle",
      subscribe: true,
      add: true,
    },
    {
      videoSrc: "./../../../public/South.mp4",
      thumbnail:
        "https://img10.hotstar.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/3124/1711159603124-h",
      title:
        "https://img10.hotstar.com/image/upload/f_auto,h_148/sources/r1/cms/prod/6501/1711159636501-t",
      newRelease: true,
      year: 2024,
      season: "2h 22m",
      language: "Tamil",
      rating: "U/A 13+",
      description:
        "Circumstances force Meena, a family-centric girl, to marry Muthu, a thug. Will this unfortunate marriage turn into love?",
      genre: "Action | Thriller | Tragedy | Power Struggle",
      subscribe: true,
      add: true,
    },
    {
      videoSrc: "./../../../public/BahuBali2.mp4",
      thumbnail:
        "https://img10.hotstar.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/old_images/MOVIE/6137/1770016137/1770016137-h",
      title:
        "https://img10.hotstar.com/image/upload/f_auto,h_148/sources/r1/cms/prod/8981/1418981-t-974aca723c9e",
      newRelease: false,
      year: 2017,
      season: "2h 40m",
      language: "Telugu",
      rating: "U/A 16+",
      description:
        "Why did Kattappa kill Amarendra Baahubali? Unveil the mystery and many more secrets that lie in the depths of the Mahishmati kingdom.",
      genre: "Action | Fantasy | Mystery | Conspiracy",
      subscribe: true,
      add: true,
    },
    {
      videoSrc: "./../../../public/SriDevi.mp4",
      thumbnail:
        "https://img10.hotstar.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/5445/1719500995445-h",
      title:
        "https://img10.hotstar.com/image/upload/f_auto,h_148/sources/r1/cms/prod/163/1719501040163-t",
      newRelease: true,
      year: 2024,
      season: 1,
      language: "Kannada",
      rating: "U/A 13+",
      description:
        "Witness the mesmerising journey of Parvathi Devi, who embraces myriad forms as the nurturer of all existence.",
      genre: "Mythology | Good Vs Evil | Myth & Legends | Immersive",
      subscribe: true,
      add: true,
    },
    {
      videoSrc: "./../../../public/MasterChef.mp4",
      thumbnail:
        "https://img10.hotstar.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/2039/1713892582039-h",
      title:
        "https://img10.hotstar.com/image/upload/f_auto,h_148/sources/r1/cms/prod/4387/1713892634387-t",
      newRelease: false,
      year: 2024,
      season: 2,
      language: "English",
      rating: "U/A 7+",
      description:
        "Top Australian chefs judge passionate home cooks who participate in competitive culinary challenges to develop their cooking skills and win the title.",
      genre: "Reality | Food | Culinary | Competition",
      subscribe: true,
      add: true,
    },
  ];

  const [selectedMovie, setSelectedMovie] = useState(movieData[0]);

  const handleThumbnailClick = (thumbnail) => {
    setSelectedMovie(thumbnail);
  };

  const [muted, setMuted] = useState(true);
  const muteHandler = () => {
    setMuted(!muted);
  }

  return (
    <div className="">
      <div className="pt-16 pl-44 relative w-[100vw] h-screen flex items-start">
        <video
          style={{height: ""}}
          width="100%"
          height="100%"
          className="-z-10 object-cover absolute top-[-5rem] left-0"
          src={selectedMovie.videoSrc}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Background Video"
          autoPlay
          muted={muted}
          loop
        ></video>

        <div className="flex items-end gap-32">
          <div className="flex flex-col gap-4 min-h-[80%]">
              <div className="h-32">
                <img className="w-48" src={selectedMovie.title} alt="movie-logo" />
              </div>
              <h1 className="font-bold text-green-400 min-h-10">{selectedMovie.newRelease ? "NewRelease" : "Trending Now"}</h1>
              <div className="flex gap-2 font-semibold">
                <h1>{selectedMovie.year}</h1>
                <h1>{selectedMovie.season}</h1>
                <h1>{selectedMovie.language}</h1>
                <h1>{selectedMovie.rating}</h1>
              </div>
              <h5 className="w-[30rem] h-[5rem] text-slate-300">
                {selectedMovie.description}
              </h5>
              <h1 className="font-semibold">{selectedMovie.genre}</h1>
              <div className="flex gap-5 mt-2">
                <Subscribe />
                <Add />
              </div>
          </div>
          <div className="">
            <div className="w-[35vw] flex flex-col">
              <span className="ml-[28rem] mb-10 text-lg cursor-pointer" onClick={muteHandler}>{muted ? <GoMute /> : <GoUnmute /> }</span>
              <ThumbnailList
                className=""
                thumbnail={movieData}
                onThumbnailClick={handleThumbnailClick}
                activeThumbnail={selectedMovie}
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <TrendingMovie />
      </div>
    </div>
  );
}

export default HomePage;
