import React, { useState} from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import "./style.css";

import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import useFetch from "../../../hooks/useFetch";
import Genres from "../../../components/genres/Genres";
//import CircleRating from "../../../components/circleRating/CircleRating";
import Img from "../../../components/lazyLoadImage/Img";

const DetailsBanner = ({ video }) => {
    const [show, setShow] = useState(false);
    const { mediaType, id } = useParams();
    const { data, loading } = useFetch(`/${mediaType}/${id}`);

    const { url } = useSelector((state) => state.home);

    const _genres = data?.genres?.map((g) => g.id);

    const toHoursAndMinutes = (totalMinutes) => {
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        return `${hours}h${minutes > 0 ? `${minutes}m` : "" }`;
    };

    return (
        <div className="detailsBanner">
            {!loading ? (
                <>
                    {!!data && (
                        <React.Fragment>
                           {/*} <div className="backdrop-img">
                                <Img src={url.backdrop + data.backdrop_path} />
                    </div> */ }
                            <ContentWrapper>
                                <div className="content">
                                    <div className="left">
                                        {data.poster_path ? (
                                            <Img className="posterImg" src={ url.backdrop + data.poster_path} />
                                        ) : (
                                            <Img className="posterImg" src="D:\React_projects\movie_app\src\assets\no-poster.png" />
                                        )}
                                    </div>
                                    <div className="right">
                                        <div className="title">
                                            {`${data.title || data.name}`}
                                        </div>
                                        <Genres data={_genres} />
                                        <div className="overview">
                                            <h3>Overview</h3>
                                            <div className="overviewText">
                                                {data.overview}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ContentWrapper>
                        </React.Fragment>
                    )}
                </>
            ) : ("")}
        </div>
    );
};
export default DetailsBanner;