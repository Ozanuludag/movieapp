"use client";
import Link from "next/link";
import React from "react";
import { useSearchParams } from "next/navigation";
const Tabs = () => {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");

  const tabs = [
    {
      name: "en populer",
      url: "popular",
    },
    {
      name: "en son çıkanlar",
      url: "latest",
    },
    {
      name: "Yakında",
      url: "upcoming",
    },
  ];
  return (
    <div className="bg-gray-100 p-5 m-5 gap-7 dark:bg-gray-900 flex items-center justify-center">
      {tabs.map((tab, i) => (
        <Link
          className={`flex-1 p-1 mx-1 justify-center text-center rounded-lg font-bold cursor-pointer hover:opacity-75 transition-opacity ${
            tab.url === genre
              ? "underline underline-offset-8 text-amber-600"
              : ""
          }`}
          href={`/?genre=${tab.url}`}
        >
          {tab.name}
        </Link>
      ))}
    </div>
  );
};

export default Tabs;
