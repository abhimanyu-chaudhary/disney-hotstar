import React from "react";
import { Link } from "react-router-dom";

import { FaRegUserCircle } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { GoHome } from "react-icons/go";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { BiMovie } from "react-icons/bi";
import { IoTennisballOutline } from "react-icons/io5";
import { TbCategory } from "react-icons/tb";
import { MdKeyboardArrowRight } from "react-icons/md";

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
  return (
    <div className="w-28 h-screen pt-8 pl-0 flex flex-col items-center bg-slate-600">
      <img
        className="w-14"
        src="https://img.hotstar.com/image/upload/v1656431456/web-images/logo-d-plus.svg"
        alt=""
      />
      <button className="flex items-center px-1 py-[1px]  bg-[#ffcc754a] text-[#ffe490] rounded-full mt-5 text-sm justify-center">
        <span className=""> Subscribe </span>
        <MdKeyboardArrowRight className="mt-[2px]" />
      </button>

      <div className="relative group cursor-pointer w-full h-[70vh] px-10">  
        {data.map((elem, index) => {
            return (
            <Link className="block" to={elem.link} key={index}>
                <div className="flex items-center gap-2 mt-9">
                <span className="text-xl text-white ">{elem.icon}</span>
                <h1 className="text-white absolute left-[70px] w-40 hidden group-hover:inline-block font-bold text-xl transition transform duration-700">
                    {elem.name}
                </h1>
                </div>
            </Link>
            );
        })}
      </div>
    </div>
  );
}

export default Routing;
