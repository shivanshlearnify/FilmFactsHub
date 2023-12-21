import React, { useRef } from "react";
import Carousel from "../../../components/carousel/Carousel";
import useFetch from "../../../hooks/useFetch";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
// import "./style.css"

const TopRated = ({ baseUrl }) => {
  const { data, loading } = useFetch("/movie/top_rated");

  return (
    <ContentWrapper>
      <div className="carouselTitle">Top Rated</div>
      <Carousel data={data?.results} baseUrl={baseUrl}/>
    </ContentWrapper>
  );
};

export default TopRated