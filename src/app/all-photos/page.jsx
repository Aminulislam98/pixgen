import PhotoCard from "@/components/PhotoCard";
import React from "react";

const AllPhotosPage = async () => {
  const res = await fetch("https://pixgen-gules.vercel.app/data.json");
  const photos = await res.json();
  return (
    <section>
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-10">
        <h1 className="font-semibold text-4xl text-center mt-10">
          Top generations
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
          {photos.map((photo) => (
            <PhotoCard key={photo.id} photo={photo}></PhotoCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllPhotosPage;
