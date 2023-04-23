import Movies from "@/components/Movies";
import React from "react";

const Page = async ({ params }) => {
  const keyword = params.keyword;
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=049f1952807a11133d01f49f43af0d10&query=${keyword}`
  );
  const data = await res.json();

  return (
    <div>
      {!data?.results ? (
        <div>Aranılan şey bulunamadı !!!</div>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {data?.results?.map((dt, i) => (
            <Movies dt={dt} i={i} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Page;
