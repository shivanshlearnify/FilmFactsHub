import React, { useRef } from "react";
import Carousel from "../../../components/carousel/Carousel";
import useFetch from "../../../hooks/useFetch";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
// import "./style.css"

const Upcoming = ({ baseUrl }) => {
  const { data, loading } = useFetch("/movie//upcoming");

  return (
    <ContentWrapper>
      <div className="carouselTitle">Upcoming Movies</div>
      <Carousel data={data?.results} baseUrl={baseUrl}/>
    </ContentWrapper>
  );
};

export default Upcoming