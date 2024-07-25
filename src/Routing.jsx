import React from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";

import { FaRegUserCircle } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { GoHome } from "react-icons/go";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { BiMovie } from "react-icons/bi";
import { IoTennisballOutline } from "react-icons/io5";
import { TbCategory } from "react-icons/tb";
import { MdKeyboardArrowRight } from "react-icons/md";

import MyPage from "./components/MyPage";
import Explore from "./components/Explore";
import HomePage from "./components/homepage/HomePage";
import Tv from "./components/Tv";
import Movies from "./components/Movies";
import Sports from "./components/Sports";
import Categories from "./components/Categories";

function Routing() {
  const data = [
    { icon: <FaRegUserCircle />, name: "My Space", link: "/mypage" },
    { icon: <FiSearch />, name: "Search", link: "/explore" },
    { icon: <GoHome />, name: "Home", link: "/" },
    { icon: <PiTelevisionSimpleBold />, name: "TV", link: "/shows" },
    { icon: <BiMovie />, name: "Movies", link: "/movies" },
    { icon: <IoTennisballOutline />, name: "Sports", link: "/sports" },
    { icon: <TbCategory />, name: "Categories", link: "/categories" },
  ];

  const location = useLocation();
  return (
    <div className="flex">
        {/* bg-gradient-to-l from-zinc-50 to-transparent */}
        <div className="bg-gradient-to-l from-transparent to-slate-900 absolute w-[100vw] h-[100vh] "></div>
        <div className=" w-[15vw] z-10">
            <div className="w-28 h-screen pt-8 pl-0 flex flex-col items-center bg-transparent">
                <img
                    className="w-14"
                    src="https://img.hotstar.com/image/upload/v1656431456/web-images/logo-d-plus.svg"
                    alt=""
                />
                <button className="flex items-center px-1 py-[1px]  bg-[#ffcc754a] text-[#ffe490] rounded-full mt-5 text-sm justify-center">
                    <span className="text-xs px-1 py-1"> Subscribe </span>
                    <MdKeyboardArrowRight className="mt-[2px]" />
                </button>

                <div className="relative group cursor-pointer w-full h-[70vh] px-10">  
                    {data.map((elem, index) => {
                        const isActive = location.pathname === elem.link;
                        return (
                        <Link className="block" to={elem.link} key={index}>
                            <div className={`flex items-center gap-2 mt-9 text-zinc-400 hover:text-white hover:text-[22px] ${isActive && "text-zinc-200"}`}>
                                <span className="text-[18px]">{elem.icon}</span>
                                <h1 className="absolute left-[70px] w-40 opacity-0 group-hover:opacity-100 font-semibold text-[18px] transition ease-in duration-300">
                                    {elem.name}
                                </h1>
                            </div>
                        </Link>
                        );
                    })}
                </div>
            </div>
        </div>
        <div className="text-white ml-[-7rem]">
            <Routes className="">
                <Route path="/mypage" element={<MyPage />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/shows" element={<Tv />} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/sports" element={<Sports />} />
                <Route path="/categories" element={<Categories />} />
            </Routes>
        </div> 
    </div>
  );
}

export default Routing;
