import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import "./style.css";

import ContentWrapper from "../contentWrapper/ContentWrapper";
//import logo from "../../assets/movix-logo.svg";

const Header = () => {
    const [show, setShow] = useState("top");
    const [lastScrollY, setLastScrollY] = useState(0);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [query, setQuery] = useState("");
    const [showSearch, setShowSearch] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    const searchQueryHandler = (e) => {
      if(e.key === "Enter" && query.length > 0){
          navigate(`/search/${query}`);
          setTimeout(() => {
            setShowSearch(false);
          }, 1000);
      }
    };

    const openSearch = () => {
      setShowSearch(true);
    };

    const navigationHandler = (type) => {
      if(type == "movie"){
        navigate("/explore/movie");
      }else {
        navigate("/explore/tv");
      }
    }

  return (
    <header className="header">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem" onClick={() => navigationHandler("movie")}>Movies</li>
          <li className="menuItem" onClick={() => navigationHandler("tv")}>TV Shows</li>
          <li className="menuItem">Search</li>
        </ul>
      </ContentWrapper>
      <div className="searchBar">
        <ContentWrapper>
          <div className="searchInput">
                    <input 
                        type="text"
                        placeholder="Search for movie"
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyUp={searchQueryHandler}
                    />
                    {/*<img src="" alt="close" onClick={() => setShowSearch(false)} />*/}
                    <button onClick={() => setShowSearch(false)}>X</button>
          </div>
        </ContentWrapper>
      </div>
    </header>
  )
}

export default Header