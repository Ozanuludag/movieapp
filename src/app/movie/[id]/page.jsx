"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const getMovie = async (id) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=049f1952807a11133d01f49f43af0d10`
  );

  return await res.json();
};

const Page = ({ params }) => {
  const id = params.id;

  // movieDetail'i state olarak tanımla
  const [movieDetail, setMovieDetail] = useState(null);

  // useEffect hook'u ile verileri yükle
  useEffect(() => {
    // async fonksiyonu iç içe tanımla
    async function fetchMovie() {
      const movie = await getMovie(id);
      setMovieDetail(movie); // state'i güncelle
    }
    // fonksiyonu çağır
    fetchMovie();
  }, [id]);

  return (
    <div className="border border-yellow-50">
      {movieDetail && ( // movieDetail varsa Image bileşenini göster
        <div className="">
          <Image
            width={500}
            height={500}
            src={`https://image.tmdb.org/t/p/w500/${
              movieDetail?.poster_path || movieDetail?.backdrop_path
            }`}
            alt={movieDetail?.title}
          />
          <div className="border border-yellow-600 absolute">
            <div className="text-4xl font-bold my-3">{movieDetail?.title}</div>
            <div className="">{movieDetail?.overview}</div>
            <div className=" my-3">
              {movieDetail?.release_date}- {movieDetail?.vote_average}
            </div>
            <div className="my-2 border w-32 cursor-pointer overflow-hidden transition transform hover:scale-110 bg-slate-400 rounded-sm">
              Trail
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
