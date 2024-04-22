import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";

const ACCESS_KEY = "jUX8RIPi9BwKL9E9VSwgkiB037_bbGeNpple5xrBBWY";

export const fetchImages = async () => {
  const response = await axios.get("photos/", {
    params: {
      client_id: `${ACCESS_KEY}`,
      per_page: 9,
    },
  });
  console.log(response);

  return response.data;
};
