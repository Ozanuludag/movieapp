"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import MenuItem from "./MenuItem";
import ThemeComp from "./ThemeComp";
const Header = () => {
  const [keyword, setKeyword] = useState("");
  const router = useRouter();
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

  const searchFunc = (e) => {
    if (e.key === "Enter" && keyword.length >= 3) {
      router.push(`/search/${keyword}`);
    }
  };
  return (
    <div className="flex items-center gap-7 h-20 ml-3 mr-3">
      <Link href={"/"}>
        <div className="bg-amber-600 rounded-lg p-3 text-2xl font-bold">
          MovieApp
        </div>
      </Link>
      <div className="flex flex-1 items-center gap-2 border p-3 rounded-lg">
        <input
          onKeyDown={searchFunc}
          onChange={(e) => setKeyword(e.target.value)}
          className="outline-none flex-1 bg-transparent"
          type={"text"}
          placeholder="Arama yapınız"
        />
        <button onClick={() => router.push(`/search/${keyword}`)}>
          {" "}
          <BiSearch size={25} />
        </button>
      </div>
      <ThemeComp />
      {menu.map((m, i) => (
        <MenuItem item={m} index={i} />
      ))}
    </div>
  );
};

export default Header;
