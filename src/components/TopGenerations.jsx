import React from "react";
import PhotoCard from "./PhotoCard";
import Category from "./Category";

const TopGenerations = async () => {
  const res = await fetch("https://pixgen-gules.vercel.app/data.json");
  const data = await res.json();
  const slicedData = data.slice(0, 8);
  return (
    <section>
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-10">
        <h1 className="font-semibold text-4xl text-center mt-10">
          Top generations
        </h1>

        <div className="grid md:grid-cols-4 grid-cols-1 gap-3">
          {slicedData.map((photo) => (
            <PhotoCard key={photo.id} photo={photo}></PhotoCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopGenerations;
