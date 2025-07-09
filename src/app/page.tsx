"use client";
import useFetchMovies from "@/hooks/useMovies.hook";
import { HomeMovieCard } from "@/components/HomePage/home.movies.card";
import { useState } from "react";

export default function HomePage() {
  const { movies, loading, error } = useFetchMovies();
  const [currentMovieIndex, setCurrentMovieIndex] = useState<number>(0);

  if (loading) return <p className="text-white">Loading...</p>;
  if (error) return <p className="text-red-500">Error: {error.message}</p>;
  if (!movies || movies.length === 0)
    return <p className="text-white">No movies found.</p>;

  const latestMovies = movies
    .sort(
      (a, b) =>
        new Date(b.release_date).getTime() - new Date(a.release_date).getTime()
    )
    .slice(0, 5);

  const safeIndex = Math.min(currentMovieIndex, latestMovies.length - 1);
  const movie = latestMovies[safeIndex];

  return (
    <>
      <section className="relative flex items-center justify-center bg-black w-full h-[500px] overflow-hidden">
        <img
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt={movie.original_title}
          className="w-full h-full object-fill"
        />

        <h1 className="absolute text-white text-5xl bottom-6 left-6 font-bold drop-shadow-lg z-10 px-4">
          {movie.original_title}
        </h1>
      </section>

      <section className="flex flex-col items-start justify-start bg-black min-h-screen w-screen p-6">
        <h2 className="text-white text-2xl font-semibold">Our latest Movies</h2>
        {
          <div className="flex flex-wrap justify-center gap-4 p-4">
            {latestMovies.map((movie) => (
              <HomeMovieCard
                key={movie.id}
                title={movie.original_title}
                image={movie.poster_path}
                redirect_link="/"
              />
            ))}
          </div>
        }
      </section>
    </>
  );
}
