"use client";
import React, { useEffect, useState } from "react";
import tmdbApi, { requests } from "@/components/api"; // import tmdbApi and requests

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

function Home() {
  const [topRated, setTopRated] = useState<Movie[]>([]);
  const [popular, setPopular] = useState<Movie[]>([]);
  const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const { data: nowPlayingData } = await tmdbApi.get(
          requests.fetchNowPlaying,
        );
        setNowPlaying(nowPlayingData.results);

        const { data: topRatedData } = await tmdbApi.get(
          requests.fetchTopRated,
        );
        setTopRated(topRatedData.results);

        const { data: popularData } = await tmdbApi.get(requests.fetchPopular);
        setPopular(popularData.results);
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      }
    };

    fetchMovies();
  }, []);

  // 영화 목록을 렌더링하는 함수
  const renderMovies = (movies: Movie[]) => {
    return movies.map((movie) => (
      <div key={movie.id}>
        <h3>{movie.title}</h3>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={`${movie.title} poster`}
        />
      </div>
    ));
  };

  return (
    <div>
      {/* <h2>Top Rated</h2>
      <div>{renderMovies(topRated)}</div>

      <h2>Popular</h2>
      <div>{renderMovies(popular)}</div>

      <h2>Now Playing</h2>
      <div>{renderMovies(nowPlaying)}</div> */}
    </div>
  );
}

export default Home;
