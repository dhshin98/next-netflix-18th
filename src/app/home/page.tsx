"use client";
import { Previews } from "@/components/Previews";
import React, { useEffect, useState } from "react";
import tmdbApi, { requests } from "@/components/api"; // import tmdbApi and requests
import styled from "styled-components";
import { BackgroundImg } from "@/components/BackgroundImg";
import { SquareImg } from "@/components/SquareImg";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

function Home() {
  const [topRated, setTopRated] = useState<Movie[]>([]);
  const [popular, setPopular] = useState<Movie[]>([]);
  const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
  const [selectMovie, setSelectMovie] = useState<Movie>();

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
    return movies.map((movie) => {
      return (
        <div key={movie.id}>
          <h3>{movie.title}</h3>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={`${movie.title} poster`}
          />
        </div>
      );
    });
  };

  const randomMovie = (movies: Movie[]) => {
    useEffect(() => {
      if (movies && movies.length > 0) {
        const randomIndex = Math.floor(Math.random() * movies.length);
        const movie = movies[randomIndex];
        setSelectMovie(movie);
      }
    }, [movies]);

    return selectMovie ? (
      <div className="flex items-center justify-center w-[100%]">
        <BackgroundImg
          imageUrl={`https://image.tmdb.org/t/p/w500${selectMovie.poster_path}`}
        />
      </div>
    ) : null;
  };

  const renderPreviews = (movies: Movie[]) => {
    return movies.map((movie) => {
      const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
      return (
        <div key={movie.id}>
          {/* <h3>{movie.title}</h3>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={`${movie.title} poster`}
          /> */}
          <Previews imageUrl={imageUrl} />
        </div>
      );
    });
  };

  const renderPopulars = (movies: Movie[]) => {
    return movies.map((movie) => {
      const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
      return (
        <div key={movie.id}>
          <SquareImg imageUrl={imageUrl} />
        </div>
      );
    });
  };

  return (
    <Container>
      {/* <h2>Top Rated</h2>
      <div>{renderMovies(topRated)}</div>

      <h2>Popular</h2>
      <div>{renderMovies(popular)}</div>

      <h2>Now Playing</h2>
      <div>{renderMovies(nowPlaying)}</div> */}

      <BackgroundBox>{randomMovie(topRated)}</BackgroundBox>

      <ImageBox className="pl-[0.75rem] mt-[29.5rem] w-[100%] flex flex-col">
        <h3 className="pl-[0.25rem] text-white mb-[1.44rem] text-preview font-bold">
          Previews
        </h3>
        {
          <ImageBox className="flex wrap space-x-[0.44rem] w-[100%] justify-start">
            {renderPreviews(topRated)}
          </ImageBox>
        }
      </ImageBox>

      <ImageBox className="pl-[0.75rem] mt-[28px] w-[100%] flex flex-col">
        <h3 className="pl-[0.25rem] text-white mb-[14px] text-popular font-bold">
          Continue Watching for Emenalo
        </h3>
        {
          <ImageBox className="flex wrap space-x-[7px] w-[100%] justify-start">
            {renderPopulars(nowPlaying)}
          </ImageBox>
        }
      </ImageBox>

      <ImageBox className="pl-[0.75rem] w-[100%] flex flex-col">
        <h3 className="pl-[0.25rem] text-white mt-[14px] mb-[1.44rem] text-popular font-bold">
          Popular on Netflix
        </h3>
        {
          <ImageBox className="flex wrap space-x-[7px] w-[100%] justify-start">
            {renderPopulars(popular)}
          </ImageBox>
        }
      </ImageBox>

      <ImageBox className="pl-[0.75rem] w-[100%] flex flex-col">
        <h3 className="pl-[0.25rem] text-white mt-[14px] mb-[1.44rem] text-popular font-bold">
          Tranding Now
        </h3>
        {
          <ImageBox className="flex wrap space-x-[7px] w-[100%] justify-start">
            {renderPopulars(popular)}
          </ImageBox>
        }
      </ImageBox>

      <ImageBox className="pl-[0.75rem] w-[100%] flex flex-col">
        <h3 className="pl-[0.25rem] text-white mt-[14px] mb-[1.44rem] text-popular font-bold">
          Top 10 in Nigeria Today
        </h3>
        {
          <ImageBox className="flex wrap space-x-[7px] w-[100%] justify-start">
            {renderPopulars(popular)}
          </ImageBox>
        }
      </ImageBox>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const BackgroundBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  position: absolute;
`;

const ImageBox = styled.div`
  overflow: auto;
  list-style-type: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
