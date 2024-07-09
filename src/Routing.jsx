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
    <div className="w-28 h-screen bg-orange-100">
    <img src="https://img.hotstar.com/image/upload/v1656431456/web-images/logo-d-plus.svg" alt="" />
    <button className="flex items-center m-0 p-0">
       <span> Subscribe </span> 
        <MdKeyboardArrowRight /> 
    </button>
      {data.map((elem, index) => {
        return (
          <div className="flex items-center gap-2">
            <span className="text-xl">{elem.icon}</span>
            <Link className="hover:block " to={elem.link} key={index}>
              <h1>{elem.name}</h1>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Routing;
