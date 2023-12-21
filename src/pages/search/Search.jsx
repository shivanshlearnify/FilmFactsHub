import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

import "./style.css";

const Search = () => {
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
        </div>
        <div className="seacrhItemDeatils"></div>
      </div>
      <div className="searchCarousel"></div>
    </div>
  );
};

export default Search;



