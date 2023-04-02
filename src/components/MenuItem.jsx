import Link from "next/link";
import React from "react";

const MenuItem = ({ item, index }) => {
  return (
    <Link href={item.url}>
      <div
        key={index}
        className="bg-amber-600 p-3 rounded-xl text-l font-semibold"
      >
        <p>{item.name}</p>
      </div>
    </Link>
  );
};

export default MenuItem;
