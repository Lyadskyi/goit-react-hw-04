import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";

const ACCESS_KEY = "jUX8RIPi9BwKL9E9VSwgkiB037_bbGeNpple5xrBBWY";

export const fetchImages = async (searchQuery, currentPage) => {
  const response = await axios.get("/search/photos/", {
    params: {
      query: searchQuery,
      page: currentPage,
      client_id: ACCESS_KEY,
      per_page: 9,
      orientation: "landscape",
    },
  });

  return response.data.results;
};
