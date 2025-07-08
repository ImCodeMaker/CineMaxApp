import Movies from "@/types/movies.interface";

export default async function FetchImages(): Promise<Movies[]> {
  try {
    const response = await fetch("http://localhost:5149/movies");

    if (!response.ok) throw new Error("There was an error fetching the movies");

    const data: Movies[] = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}
