import React from "react";
import Link from "next/link";
import movieCardsprops from "@/types/movies.card";

export const HomeMovieCard: React.FC<movieCardsprops> = ({ title, image, redirect_link }) => {
  const imageUrl = image
    ? `https://image.tmdb.org/t/p/w500${image}`
    : "/fallback.jpg";

  return (
    <div>
      <div className="w-56 rounded overflow-hidden shadow-lg bg-gray-900 m-2 flex flex-col">
        <div className="relative group">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-86 object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-opacity-70 text-white text-center py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {title}
          </div>
        </div>
      </div>

      <div className="m-2 flex items-center justify-center">
        <Link href={redirect_link} className="bg-red-700 rounded-md h-10 w-32 text-white hover:bg-red-600 text-center py-2">
          Buy Tickets
        </Link>
      </div>
    </div>
  );
};
