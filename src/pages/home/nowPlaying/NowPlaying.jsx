import React, { useRef } from "react";
import Carousel from "../../../components/carousel/Carousel";
import useFetch from "../../../hooks/useFetch";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import "./style.css"

const NowPlaying = ({ baseUrl }) => {
  const { data, loading } = useFetch("/movie/now_playing");

  return (
    <ContentWrapper>
      <div className="carouselTitle">Now Playing</div>
      <Carousel data={data?.results} baseUrl={baseUrl}/>
    </ContentWrapper>
  );
};

export default NowPlaying;
