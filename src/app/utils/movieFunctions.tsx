import { SquareImg, Previews, BackgroundImg } from "@/components/ImageType";
import { useEffect, useState, useMemo } from "react";
import { SquareForRankingIcon, Top10Icon } from "../../../public/svgs";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

//페이지의 가장 위쪽에 랜덤으로 함수를 보여주는 함수
export const RandomMovie = ({ movies }: { movies: Movie[] }) => {
  const [selectedData, setSelectedData] = useState<
    { movie: Movie; index: number } | undefined
  >();

  useEffect(() => {
    if (movies.length > 0) {
      //0-9위 사이의 영화만 추려내기
      setSelectedData(() => {
        const maxIndex = Math.min(movies.length, 10);
        const randomIndex = Math.floor(Math.random() * maxIndex);
        return { movie: movies[randomIndex], index: randomIndex };
      });
    }
  }, [movies]);

  // useMemo를 통해 selectedData의 값이 변경될 때만 새로 계산
  const { movie, index } = useMemo(() => {
    return selectedData || { movie: undefined, index: undefined };
  }, [selectedData]);

  return movie ? (
    <div className="flex flex-col items-center justify-center w-[100%]">
      <BackgroundImg imageUrl={getImageUrl(movie.poster_path)} />
      <span className="flex align-center mt-2 md-2">
        <div className="relative mr-2">
          <SquareForRankingIcon />
          <Top10Icon className="absolute inset-0 m-auto" />
        </div>
        <div className=" text-xs font-bold leading-tight text-white md-2">
          #{index} in Korea Today
        </div>
      </span>
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
