import Link from "next/link";
import React from "react";
import { BiSearch } from "react-icons/bi";
import MenuItem from "./MenuItem";
import ThemeComp from "./ThemeComp";
const Header = () => {
  const menu = [
    {
      name: "About",
      url: "/about",
    },
    {
      name: "Sign in",
      url: "/signin",
    },
  ];
  return (
    <div className="flex items-center gap-7 h-20 ml-3 mr-3">
      <Link href={"/"}>
        <div className="bg-amber-600 rounded-lg p-3 text-2xl font-bold">
          MovieApp
        </div>
      </Link>
      <div className="flex flex-1 items-center gap-2 border p-3 rounded-lg">
        <input
          className="outline-none flex-1 bg-transparent"
          type={"text"}
          placeholder="Arama yapınız"
        />
        <BiSearch size={25} />
      </div>
      <ThemeComp />
      {menu.map((m, i) => (
        <MenuItem item={m} index={i} />
      ))}
    </div>
  );
};

export default Header;
