import Category from "@/components/Category";
import PhotoCard from "@/components/PhotoCard";
import React from "react";

const AllPhotosPage = async ({ searchParams }) => {
  const { category } = await searchParams;
  console.log(category);
  const res = await fetch("https://pixgen-gules.vercel.app/data.json");
  const photos = await res.json();

  const filteredPhotos = category
    ? photos.filter((photo) => photo.category === category)
    : photos;
  return (
    <section>
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-10">
        <h1 className="font-semibold text-4xl text-center mt-10">
          Top generations
        </h1>
        <Category></Category>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
          {filteredPhotos.map((photo) => (
            <PhotoCard key={photo.id} photo={photo}></PhotoCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllPhotosPage;
