import React, { useRef } from "react";
import ContentWrapper from "../contentWrapper/ContentWrapper";

import useFetch from "../../hooks/useFetch";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import { useNavigate } from "react-router-dom";

const Carousel = ({ data, baseUrl }) => {
  const navigate = useNavigate();

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
  };

  return (
    <div className="CarouselWrapper" >
      <ContentWrapper>
        <div className="carouselItems">
          <Slider {...settings}>
            {data?.map((items) => {
              const itemUrl = baseUrl + items.poster_path;
              return (
                <div onClick={()=> navigate(`/movie/${items.id}`)}>
                  <img
                    src={itemUrl}
                    className="card-img-top carouselImage"
                    alt="IMAGE"
                  />
                  <div className="card-body">
                    <p className="card-text carouselMovieName">
                      {items?.title}
                    </p>
                    <p className="card-text carouselMovieDate">
                      {items?.release_date}
                    </p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Carousel;
