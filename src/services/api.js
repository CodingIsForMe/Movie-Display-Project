const API_KEY = "45e19ae6cf1cfba46c9b8727555234f1";
const BASE_URL = "https://api.themoviedb.org/3";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NWUxOWFlNmNmMWNmYmE0NmM5Yjg3Mjc1NTUyMzRmMSIsIm5iZiI6MTc0NDE4OTYyMS45NzUwMDAxLCJzdWIiOiI2N2Y2MzhiNWQzYWI3ZDdhOGJhY2Y4MTQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.-nCdulDQn61KHZsZknRT_O-TWA-drE5PzljQabQFOaI",
  },
};

export const getPopularMovies = async () => {
  //   const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    options
  );

  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query) => {
  //   const response = await fetch(
  //     `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
  //       query
  //     )}`
  //   );

  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
    options
  );
  const data = await response.json();
  return data.results;
};
