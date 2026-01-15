import axios from "axios";

const tmdbClient = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  timeout: 10000,
  params: {
    api_key: "e5e7ff6638cf9a90ff0b6076432fe614",
    // language: "vi-VN", 
  },
});

export default tmdbClient;
