import axios from "axios";

axios.defaults.baseURL = "https://hn.algolia.com/api/v1";

export const fetchArticles = async (query, curentPage) => {
  const API_KEY = "ApAc7bqyxk2XAaeNOfRvdxLZMiSoS4zXYOzQ_kL4DB4";
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    params: {
      client_id: API_KEY,
      per_page: 12,
      query,
      page: curentPage,
    },
  });
  return response || [];
};
