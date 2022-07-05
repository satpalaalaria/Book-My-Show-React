import React, { useEffect, useState } from "react";
import Axios from "axios";
import './About.css'
import noImage from '../sourceImage/no_image.png'
import gift from '../sourceImage/ben-redblock-loading.gif';
import { useParams } from 'react-router-dom';

const About = () => {
    const [movieInfo, setMovieInfo] = useState();
    const { id } = useParams();
    // console.log(id);
    useEffect(() => {
        const fetchData = async () => {
            const response = await Axios.get(
                `https://api.themoviedb.org/3/movie/${id}?api_key=ef2fc7966b7886b23c82a2279f82783c`,
            );
            setMovieInfo(response.data)
        };
        fetchData()

    }, [id]);

    return (
        <div>
            {movieInfo ? (
                <>
                    <div className="movie_card" id="bright">
                        <div className="info_section">
                            <div className="movie_header">
                                <img className="locandina" src={movieInfo.poster_path !== null ? `https://www.themoviedb.org/t/p/w220_and_h330_face${movieInfo.poster_path}` : noImage}
                                    alt={movieInfo?.title}
                                />
                                <h1>{movieInfo?.title}</h1>
                                <h4>{movieInfo?.release_date.split("-").reverse().join("-")}, {movieInfo.original_language}</h4>
                                <span className="minutes">117 min</span>
                                <p className="type">Action, Crime, Fantasy</p>
                            </div>
                            <div className="movie_desc">
                                <p className="text">
                                    {movieInfo.overview}
                                </p>
                            </div>
                        </div>
                        {/* <div className="blur_back bright_back" style={{background: `url({https://www.themoviedb.org/t/p/w220_and_h330_face${movieInfo.backdrop_path}})`}}></div> */}
                        <div className="blur_back bright_back"></div>
                    </div>
                </>
            ) : (
                <div className="lodebal">
                    <img className="loding-data" src={gift} alt="loading data" />
                </div>
            )}
        </div>
    );
};
export default About;