import React, { useState, useEffect } from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Img from '../../../components/lazyLoadImage/Img';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import useFetch from '../../../hooks/useFetch';




const HomeBanner = () => {
    const [background, setBackground] = useState("");
    const [query, setQuery] = useState("");
    const navigate =  useNavigate();
    const { url } = useSelector((state) => state.home);

    const {data , loading } = useFetch("/movie/upcoming");

    useEffect(() => {
        const bg = url.backdrop + data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
        setBackground(bg);
    }, [data]);

    const searchQueryHandler = (e) => {
        if(e.key === "Enter" && query.length > 0){
            navigate(`/search/${query}`);
        }
    }

  return (
    <div className="homeBanner">
        {!loading && <div className="backdrop-img">
            <Img src={background} />
        </div>}
        <div className="opacity-layer"></div>
        <ContentWrapper>
            <div className="homeBannerContent">
                <span className="title">Welcome.</span>
                <span className="subtitle">Movie search platform for learning purpose.</span>
                <div className="searchInput">
                    <input 
                        type="text"
                        placeholder="Search for movie"
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyUp={searchQueryHandler}

                    />
                    <button>Search</button>
                </div>
            </div>
        </ContentWrapper>
    </div>
  )
}

export default HomeBanner