import React, { useEffect, useState } from 'react';
import './Body.css';

function Body3() {
    const [movieSuggests, setMovieSuggests] = useState([]);

    useEffect(() => {
        fetchMovie('phim-bo');
    }, []);

    const fetchMovie = async (type) => {
        try {
            const response = await fetch(`https://phimapi.com/v1/api/danh-sach/${type}?limit=12`);
            const data = await response.json();
            if (data && data.data && data.data.items) {
                setMovieSuggests(data.data.items);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div className="app">
        <div className="container">
            <div className="row g-2">
                    <div className="col-lg-12 d-flex align-items-center justify-content-between">
                        <h3 className='caption'>Phim bộ mới nhất</h3>
                        <a href="/list/phim-bo">
                             <button className='all'>Xem tất cả</button>
                        </a>
                    </div>
                    <div className="row g-2">
                        {movieSuggests && movieSuggests.length > 0 &&
                            movieSuggests.map(movieSuggest => (
                                <div key={movieSuggest.slug} className='col-lg-2 col-md-3 col-4'>
                                    <div className="item">
                                        <span className="label">{movieSuggest.episode_current}</span>
                                        <a href={`/info/${movieSuggest.slug}`}>
                                            <img src={`https://img.phimapi.com/${movieSuggest.poster_url}`} alt="" />
                                            <p>{movieSuggest.name}</p>
                                            <i className="icon-play"></i>
                                        </a>
                                    </div>
                                </div>
                        ))}
                    </div>
            </div>
        </div>
        </div>
    );
}

export default Body3;
