import React, { useRef } from "react";
import Carousel from "../../../components/carousel/Carousel";
import useFetch from "../../../hooks/useFetch";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import "./style.css"

const Popular = ({ baseUrl }) => {
  const { data, loading } = useFetch("/movie/popular");

  return (
    <ContentWrapper>
      <div className="carouselTitle">Popular Movies</div>
      <Carousel data={data?.results} baseUrl={baseUrl}/>
    </ContentWrapper>
  );
};

export default Popular;