import React from "react";
import { Link } from "react-router-dom";

import { FaRegUserCircle } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { GoHome } from "react-icons/go";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { BiMovie } from "react-icons/bi";
import { IoTennisballOutline } from "react-icons/io5";
import { TbCategory } from "react-icons/tb";

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
    <div>
      {data.map((elem, index) => {
        return (
          <div className="flex items-center gap-2">
            {elem.icon}
            <Link to={elem.link} key={index}>
              <h1>{elem.name}</h1>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Routing;
