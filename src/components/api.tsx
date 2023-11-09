import axios from "axios";

const tmdb_api_key = process.env.NEXT_PUBLIC_API_KEY;
const tmdbApi = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: tmdb_api_key,
    language: "ko-KR",
  },
});

//자주 쓰일 거 같은 fetchData들
export const requests = {
  fetchNowPlaying: "movie/now_playing",
  fetchPopular: "movie/popular",
  fetchTopRated: "/movie/top_rated",
  fetchTrending: "/trending/movie/week",
  fetchHorrorMovies: "/discover/movie?with_genres=27",
};

export default tmdbApi;
