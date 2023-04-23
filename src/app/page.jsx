import Movies from "@/components/Movies";
import React from "react";

const Page = async ({ searchParams }) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/${
      searchParams.genre ? "movie/" + searchParams.genre : "trending/all/day"
    }?api_key=049f1952807a11133d01f49f43af0d10`,
    { next: { revalidate: 1000 } }
  );

  const data = await res.json();
  //console.log(data);
  return (
    <div className=" flex-3 container mx-auto p-4 justify-center">
      <h1 className="text-4xl font-bold mb-8">Filmler!</h1>
      <div className="grid grid-cols-3 gap-4">
        {data?.results?.map((dt, i) => (
          <Movies dt={dt} i={i} />
        ))}
      </div>
    </div>
  );
};

export default Page;
