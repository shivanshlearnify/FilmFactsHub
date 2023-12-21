import React from "react";
import Carousel from "../../components/carousel/Carousel";
import useFetch from "../../hooks/useFetch";
import "./style.css";
import NowPlaying from "./nowPlaying/NowPlaying";
import Popular from "./popular/Popular";
import TopRated from "./toprated/TopRated";
import Upcoming from "./upcoming/Upcoming";

const Home = () => {
  const { data: url } = useFetch("/configuration");
  const baseUrl = url?.images.secure_base_url + "original";

  return (
    <div className="homeWrapper">
      <NowPlaying baseUrl={baseUrl} />
      <TopRated baseUrl={baseUrl} />
      <Popular baseUrl={baseUrl} />
      <Upcoming baseUrl={baseUrl} />
    </div>
  );
};

export default Home;
