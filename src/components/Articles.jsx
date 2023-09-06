import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getNews } from "../services/api";
import SingleArticle from "./SingleArticle";

function Articles() {
  const [news, setNews] = useState([]);

  const dailyNews = async () => {
    let response = await getNews();
    // console.log(response.data);
    setNews(response.data);
  };

  useEffect(() => {
    dailyNews();
  }, []);
  return (
    <Box>
      {news?.map((data) => (
        <SingleArticle data={data} />
      ))}
    </Box>
  );
}

export default Articles;
