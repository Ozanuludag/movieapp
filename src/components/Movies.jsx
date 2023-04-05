"use client";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

const Movies = ({ dt, i }) => {
    const router =useRouter();

  return (
    <div
      key={i}
      className="flex flex-1 flex-col items-center group justify-center max-w-xs mt-10"
      onClick={() => router.push(`/movie/${dt?.id}`)}
    >
      <div className="relative w-full rounded-sm overflow-hidden transition transform hover:scale-110">
        <Image
          width={500}
          height={400}
          src={`https://image.tmdb.org/t/p/w500/${
            dt?.poster_path || dt?.backdrop_path
          }`}
          alt={dt?.title}
        />
        <p className="absolute text-center bottom-0 left-0 right-0 text-lg font-bold bg-gray-800 text-white opacity-0 group-hover:opacity-100">
          {dt?.name || dt?.title}
        </p>
      </div>
    </div>
  );
};

export default Movies;
