import React, { useState, useEffect } from 'react';
import './Body.css';

function BodyDetail() {
    const options = {
        items: 3,
        loop: true,
        margin: 10,
        nav: true,
        dots: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 3
            },
            600: {
                items: 4
            },
            1000: {
                items: 6
            }
        },
    };
    const [movieData, setMovieData] = useState({});
    const [movieSuggests, setMovieSuggests] = useState([]);

    useEffect(() => {
        fetchMovie('phim-moi-cap-nhat');
    }, [])
    const fetchMovie = async(type) => {
        try {
            const response = await fetch(`https://phimapi.com/danh-sach/${type}?page=3`);
            const data = await response.json();
            if(data && data.items) {
                setMovieSuggests(data.items)
            }
        }
        catch(error) {
            console.error('Error fetching data', error);
        }
    }
    // const [episodes, setEpisodes] = useState([]);
    const shareOnFacebook = () => {
        const url = encodeURIComponent(window.location.href);
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, "_blank")
    }
    const shareOnTwitter = () => {
        const url = encodeURIComponent(window.location.href);
        const text = encodeURIComponent("Check out this awesome website!");
        window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, "_blank");
    };

    useEffect(() => {
        const fetchMovieData = async () => {
            try {
                const response = await fetch(`https://phimapi.com/phim/${currentSlug}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch movie data');
                }
                const data = await response.json();
                setMovieData(data.movie);
                // setEpisodes(data.episodes);
            } catch (error) {
                console.error(error);
            }
        };

        fetchMovieData();
    }, []);

    const currentSlug = window.location.pathname.split('/').pop();


    // Truy cập vào category của movieData
        const categories = movieData.category && movieData.category.length > 0 
        ? movieData.category.map(cat => cat.name).join(', ')
        : null;

    //Truy cập vào năm của movieData
    const country = movieData.country && movieData.country.length > 0 ? movieData.country[0] : null;
    //Truy cập vào đạo diễn của movieData
    const directors = movieData.director && movieData.director.length > 0 ? movieData.director.join(', ') : '';
    //Truy cập vào diễn viên của movieData
    const actors = movieData.actor && movieData.actor.length > 0 ? movieData.actor.join(', ') : '';

    return (
        <div className="app">
            <div className='main-detail'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className='image'>
                                <img src={movieData.thumb_url} alt="" />
                                <div className='avatar'>
                                    <img src={movieData.thumb_url} alt="" />
                                </div>
                                <div className="text-block">
                                    <h1>{movieData.name}</h1>
                                    <h2>{movieData.origin_name}</h2>
                                    <ul className="list-button-block">
                                        <li>
                                            <a className='btn-info' href={movieData.trailer_url}>
                                            <i class="fa-brands fa-youtube"></i>    
                                                Trailer
                                            </a>
                                        </li>
                                        <li>
                                            <a href={`/watch/${movieData.slug}`} className='btn-watch'><i class="fa-solid fa-circle-play"></i>Xem phim</a>
                                        </li>
                                    </ul>
                                </div>
                                <a href={`/watch/${movieData.slug}`}>
                                    <i className='icon-play'></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="info-block">
                                <div className="row">
                                    <div className="col-lg-5">
                                        <p>Đang phát: <span className='playing'>{movieData.episode_current}</span></p>
                                        {categories && <p>Thể loại: <span>{categories}</span></p>}
                                        {actors && <p>Diễn viên: <span>{actors}</span></p>}
                                    </div>
                                    <div className="col-lg-4">
                                        <p>Năm phát hành:<span>{movieData.year}</span></p>
                                        {directors && <p>Đạo diễn: <span>{directors}</span></p>}
                                        <p>Chất lượng: <span>{movieData.quality}</span></p>
                                    </div>
                                    <div className="col-lg-3">
                                    {country && <p>Quốc gia: <span>{country.name}</span></p>}
                                    <p>Thời lượng: <span>{movieData.time}</span></p>
                                    <p>Tổng số tập: <span>{movieData.episode_total}</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="content-block">
                                <div className='a'>
                                    <p>Nội dung phim</p>
                                    <i class="fa-solid fa-pencil"></i>
                                </div>
                                <p><span>{movieData.content}</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                        <div className="share-block">
                            <span>Chia sẻ</span>
                            <a href="javascript:void(0)" onClick={shareOnFacebook}>
                                <i class="fa-brands fa-facebook"></i>
                            </a>
                            <a href="javascript:void(0)" onClick={shareOnTwitter}>
                                <i class="fa-brands fa-twitter"></i>
                            </a>
                            
                            <a href="">
                                <i class="fa-brands fa-pinterest"></i>
                            </a>
                            <a href="">
                                <i class="fa-brands fa-whatsapp"></i>
                            </a>
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="fb-comments-container">
                                <div className="fb-comments" data-href="https://developers.facebook.com/docs/plugins/comments#configurator" data-width="100%" data-numposts="5"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row g-2">
                        <div className="col-lg-12">
                            <h3 className='caption'>Có thể bạn cũng muốn xem</h3>
                        </div>
                            {movieSuggests && movieSuggests.length > 0 &&
                                movieSuggests.map(movieSuggest => (
                                <div key={movieSuggest.slug} className='col-lg-2 col-md-3 col-4'>
                                    <div className="item">
                                        <span className="label">{movieSuggest.episode_current}</span>
                                        <a href={`/info/${movieSuggest.slug}`}>
                                            <img src={movieSuggest.poster_url} alt="" />
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

export default BodyDetail;
