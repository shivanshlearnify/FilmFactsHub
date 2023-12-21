import React from "react";
import "./style.css";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import { MdMovieEdit } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="nav">
      <ContentWrapper>
        <div className="nav">
          <div className="logo" onClick={()=> navigate("/")}>
            <span>
              <MdMovieEdit />
              FilmFactHub
            </span>
          </div>
          <div className="navItems">
            <ul/>
            <li >Movies</li>
            <li>
              Search <IoSearch />
            </li>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Header;
