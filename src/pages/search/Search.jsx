import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

import "./style.css";

const Search = () => {
  const navigate = useNavigate();
  const { mediaType, id } = useParams();

  const { data } = useFetch(`/${mediaType}/${id}`);
  const { data: url } = useFetch("/configuration");
  const baseUrl = url?.images?.secure_base_url + "original";
  const searchImgUrl = baseUrl + data?.poster_path;
  return (
    <div>
      <div className="detailsBanner">
        <div className="searchPosterContainer">
          <div className="searchPoster">
            <img className="posterImg" src={searchImgUrl} alt="img" />
          </div>
          <div className="seacrhItemDeatils">
            <div>Title: {data?.title}</div>
            <a href={data?.homepage} target="_blank">Homepage: {data?.homepage}</a>
            <div>TagLine: {data?.tagline}</div>
            <div>Status: {data?.status}</div>
            <div>Release Date: {data?.release_date}</div>
            <div>Runtime: {data?.runtime} minutes</div>
            <div>Imdb Id: {data?.imdb_id}</div>
            <div>Overview: {data?.overview}</div>
          </div>
        </div>
      </div>
      <div className="searchCarousel"></div>
    </div>
  );
};

export default Search;
