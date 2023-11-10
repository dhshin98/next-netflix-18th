import { SquareImg } from "@/components/SquareImg";
import { Previews } from "@/components/Previews";
import { BackgroundImg } from "@/components/BackgroundImg";
import { useEffect, useState } from "react";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

//영화 이미지 렌더링해 가져온는 함수
// export const renderMovies = (movies: Movie[]) => {
//   return movies.map((movie) => (
//     <div key={movie.id}>
//       <h3>{movie.title}</h3>
//       <img src={getImageUrl(movie.poster_path)} alt={`${movie.title} poster`} />
//     </div>
//   ));
// };

//페이지의 가장 위쪽에 랜덤으로 함수를 보여주는 함수
export const RandomMovie = ({ movies }: { movies: Movie[] }) => {
  const [selectMovie, setSelectMovie] = useState<Movie | undefined>();
  useEffect(() => {
    if (movies.length > 0) {
      const randomIndex = Math.floor(Math.random() * movies.length);
      const movie = movies[randomIndex];
      setSelectMovie(movie);
    }
  }, [movies]);

  return selectMovie ? (
    <div className="flex items-center justify-center w-[100%]">
      <BackgroundImg imageUrl={getImageUrl(selectMovie.poster_path)} />
    </div>
  ) : null;
};

//영화의 preview 부분에서 사용될 함수
export const renderRoundMovies = (movies: Movie[]) => {
  return movies.map((movie) => (
    <div key={movie.id}>
      <Previews imageUrl={getImageUrl(movie.poster_path)} />
    </div>
  ));
};

//네모난 이미지를 슬라이딩할때 보여주는 함수
export const renderBoxMovies = (movies: Movie[]) => {
  return movies.map((movie) => (
    <div key={movie.id}>
      <SquareImg imageUrl={getImageUrl(movie.poster_path)} />
    </div>
  ));
};

//영화 포스터 이미지 가져오는 함수
export const getImageUrl = (posterPath: string) => {
  return `https://image.tmdb.org/t/p/w500${posterPath}`;
};
