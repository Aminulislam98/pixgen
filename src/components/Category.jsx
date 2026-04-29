import Link from "next/link";
import React from "react";

const Category = async () => {
  const res = await fetch("https://pixgen-gules.vercel.app/category.json");
  const categories = await res.json();
  console.log(categories);

  return (
    <div>
      <div className="flex flex-row gap-3">
        {categories.map((category) => (
          <Link
            href={`/all-photos?category=${category.name}`}
            key={category.id}
            className="cursor-pointer px-4 py-2 bg-gray-200 rounded-full text-sm font-medium "
          >
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
