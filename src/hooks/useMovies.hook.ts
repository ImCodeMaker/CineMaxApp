import { useState, useEffect } from "react";
import FetchImages from "@/services/movies.fetcher.services";
import Movies from "@/types/movies.interface";

export default function useFetchMovies() {
  const [movies, setMovies] = useState<Movies[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const fetchedMovies = await FetchImages();
        setMovies(fetchedMovies);
      } catch (err: any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return { movies, loading, error };
}
