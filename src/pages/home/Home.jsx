import React from 'react';
import './style.css';
import HomeBanner from './homeBanner/HomeBanner.jsx';
import Trending from './trending/Trending.jsx';
import Popular from './popular/Popular.jsx';
import TopRated from './topRated/TopRated.jsx';

const Home = () => {
  return (
    <div className="homePage">
      <HomeBanner />
      <Trending />
      <Popular />
      <TopRated />
    </div>
  )
}

export default Home