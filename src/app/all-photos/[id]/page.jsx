import Image from "next/image";
import { FaHeart, FaDownload, FaTag } from "react-icons/fa";

const PhotoDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch("https://pixgen-gules.vercel.app/data.json", {
    cache: "no-store",
  });
  const photos = await res.json();

  const photo = photos.find((p) => p.id === Number(id));

  if (!photo) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Photo not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 px-4 md:px-10 lg:px-20 py-10 flex items-center justify-center">
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
        {/* LEFT: IMAGE (FIXED SIZE + RATIO) */}
        <div className="w-full flex justify-center">
          <div className="w-full max-w-xl aspect-square relative rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
            <Image
              src={photo.imageUrl}
              alt={photo.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* RIGHT: DETAILS */}
        <div className="flex flex-col gap-6 max-w-xl mx-auto lg:mx-0">
          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-semibold leading-snug">
            {photo.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
            <span>{photo.category}</span>
            <span>•</span>
            <span>{photo.model}</span>
            <span>•</span>
            <span>{photo.resolution}</span>
            <span>•</span>
            <span>{new Date(photo.createdAt).toLocaleDateString()}</span>
          </div>

          {/* Stats */}
          <div className="flex gap-6 text-sm text-gray-500">
            <span className="flex items-center gap-2">
              <FaHeart className="text-red-500" />
              {photo.likes}
            </span>
            <span className="flex items-center gap-2">
              <FaDownload className="text-green-500" />
              {photo.downloads}
            </span>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200" />

          {/* Prompt */}
          <div>
            <h2 className="text-xs uppercase tracking-wider text-gray-400 mb-2">
              Prompt
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              {photo.prompt}
            </p>
          </div>

          {/* Tags */}
          <div>
            <h2 className="text-xs uppercase tracking-wider text-gray-400 mb-2">
              Tags
            </h2>
            <div className="flex flex-wrap gap-2">
              {photo.tags.map((tag, index) => (
                <span
                  key={index}
                  className="flex items-center gap-1 text-xs text-gray-600 border border-gray-300 px-3 py-1 rounded-full bg-gray-50"
                >
                  <FaTag className="text-[10px]" />
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-black text-white rounded-lg font-medium hover:opacity-90 transition cursor-not-allowed">
              <FaDownload />
              Download
            </button>

            <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border cursor-not-allowed border-gray-300 rounded-lg hover:bg-gray-100 transition">
              <FaHeart />
              Like
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsPage;
