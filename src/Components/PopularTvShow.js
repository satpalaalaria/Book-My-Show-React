import axios from 'axios';
import noImage from '../sourceImage/no_image.png'
import "./movies.css"
import { useNavigate } from 'react-router-dom';

import { useState, useEffect } from 'react';

function PopularTVShow() {
    const navigate = useNavigate();
    const [post, setPost] = useState(null);

    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=ef2fc7966b7886b23c82a2279f82783c&language=en-US&page=1').then(response => {
            setPost(response.data.results);
        });
    }, []);

    if (!post) return null;

    // console.log(post);

    return (
        <>
            <h1>Popular TV Show :-</h1>
            <div className='movie-result'>
                {post?.length ? (
                    post.map((movie) => (
                        <div key={movie.id} className="card" onClick={() => {
                            navigate(`/About/${movie.id}`)
                        }}>
                            <img
                                src={movie.poster_path !== null ? `https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}` : noImage}
                                alt={movie.title}
                                style={{ width: "100%", height: "auto" }}
                            />
                            <div className="container1">
                                <span className="movie-title"><b>{movie.original_name}</b></span>
                            </div>
                        </div>
                    ))
                ) :
                    <span className="text-danger"><b> "Error" </b></span>
                }
            </div>
        </>
    );
}

export default PopularTVShow;