import React, { useEffect, useState } from "react";
import './Body.css';

function BodyWatch() {
    const shareOnFacebook = () => {
        const url = encodeURIComponent(window.location.href);
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, "_blank")
    }
    const shareOnTwitter = () => {
        const url = encodeURIComponent(window.location.href);
        const text = encodeURIComponent("Check out this awesome website!");
        window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, "_blank");
    };
    const [movieSuggests, setMovieSuggests] = useState([]);
    const [videoUrl, setVideoUrl] = useState(null);
    const [episodes, setEpisodes] = useState([]);
    const currentSlug = window.location.pathname.split('/').pop(); // Lấy từ URL 
    const [selectedEpisodeSlug, setSelectedEpisodeSlug] = useState(null);


    useEffect(() => {
        fetchMovie('phim-moi-cap-nhat');
    }, []);

    const fetchMovie = async(type) => {
        try {
            const response = await fetch(`https://phimapi.com/danh-sach/${type}`)
            const data = await response.json();
            if(data && data.items) {
                setMovieSuggests(data.items);
            }
        } catch(error) {
            console.error('Error fetching data: ', error);
        }
    }

    useEffect(() => {
        const fetchMovieData = async () => {
            try {
                const response = await fetch(`https://phimapi.com/phim/${currentSlug}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch movie data');
                }
                const data = await response.json();
                const allEpisodes = data.episodes.reduce((acc, curr) => acc.concat(curr.server_data), []);
                setEpisodes(allEpisodes);
                setVideoUrl(allEpisodes[0]?.link_embed);
            } catch (error) {
                console.error(error);
            }
        };
        fetchMovieData();
    }, [currentSlug]);

    const handleEpisodeClick = (episodeUrl,slug) => {
        setVideoUrl(episodeUrl);
        setSelectedEpisodeSlug(slug); // Cập nhật slug của tập phim được chọn
    };

    return (
        <div className="app">
            <div className="main-detail">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="container-iframe">
                                {videoUrl && (
                                    <iframe
                                        className="responsive-iframe"
                                        src={videoUrl}
                                        allowFullScreen
                                        title="Embedded video"
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="container-list">
                                <div className="a">
                                    <p>Danh sách tập phim</p>
                                    <i class="fa-solid fa-film"></i>
                                </div>
                                <div className="row g-2">
                                {episodes.map((episode, index) => (
        <div className="col-lg-1 col-md-2 col-sm-4 col-4">
            <button className={`list-button ${(selectedEpisodeSlug === null && index === 0) || selectedEpisodeSlug === episode.slug ? 'selected' : ''}`}
                onClick={() => handleEpisodeClick(episode.link_embed, episode.slug)}>
                Tập {index + 1}
            </button>
        </div>
    ))}

                                </div>
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
                    <div className="row">
                        <div className="col-lg-12">
                            <h3 className="caption">Có thể bạn cũng muốn xem</h3>
                            <div className="row g-2">
                                {movieSuggests && movieSuggests.length >0 &&
                                    movieSuggests.map(movieSuggest => (
                                        <div key={movieSuggest.slug} className="col-lg-2 col-md-3 col-4">
                                            <div className="item">
                                            <span className="label">{movieSuggest.episode_current}</span>
                                            <a href={`/info/${movieSuggest.slug}`}>
                                                <img src={movieSuggest.poster_url} alt="" />
                                                <p>{movieSuggest.name}</p>
                                                <i className="icon-play"></i>
                                            </a>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>

                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BodyWatch;
