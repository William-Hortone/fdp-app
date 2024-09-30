import { useEffect, useState } from "react";
import axios from "axios"; 
import { BASE_URL } from "../config";

export const HandleFetchArticles = () => {
  const [articlesData, setArticlesData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchArticles = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${BASE_URL}/articles/getAllArticles`);
      console.log("The response is", response.data);
      setArticlesData(response.data.articles);
    } catch (error) {
      console.error("Error fetching articles:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const refreshArticles = () => {
    fetchArticles();
  };

  return { articlesData, refreshArticles, isLoading };
};
