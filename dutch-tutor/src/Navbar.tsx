import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";

export default function Navbar() {
  return (
    <nav className=" flex justify-between p-10 shadow-lg">
      <div className=" text-4xl">Dutch Tutor</div>
      <BsFillMoonStarsFill className="text-4xl"/>
    </nav>
  );
}
