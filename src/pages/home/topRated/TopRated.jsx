import React, { useState } from 'react';
import SwitchTabs from '../../../components/switchTabs/SwitchTabs';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import Carousel from '../../../components/carousel/Carousel';

import useFetch from '../../../hooks/useFetch';

const TopRated = () => {

    const [endpoint, setEndpoint] = useState("movie");
    const { data, loading } = useFetch(`/${endpoint}/top_rated`);
   
    const onTabChange = (tab) => {
        setEndpoint(tab=== "Movie" ? "movie" : "tv" )
    }
  
    return (
    <div className="carouselSection">
        <ContentWrapper>
            <span className="carouselTitle">TopRated</span>
            <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange} />
        </ContentWrapper>
        <Carousel data={data?.results} loading={loading} endpoint={endpoint}/>
    </div>
  )
}

export default TopRated;