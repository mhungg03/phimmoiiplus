import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './Body.css';

function NewMovies() {
    const [currentPage, setCurrentPage] = useState(1);
    const [movieSuggests, setMovieSuggests] = useState([]);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        fetchMovie('phim-moi-cap-nhat', currentPage, setMovieSuggests, setTotalPages);
    }, [currentPage]);

    const fetchMovie = async (type, page, setMovieSuggests, setTotalPage) => {
        try {
            const response = await fetch(`https://phimapi.com/danh-sach/${type}?page=${page}&limit=12`);
            const data = await response.json();
            if (data && data.items) {
                setMovieSuggests(data.items);
                setTotalPage(data.pagination.totalPages);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const renderPaginationButtons = () => {
        const visiblePages = 5;
        const halfVisiblePages = Math.floor(visiblePages / 2);
        const firstPage = Math.max(1, currentPage - halfVisiblePages);
        const lastPage = Math.min(totalPages, firstPage + visiblePages - 1);

        const pages = [];
        for (let i = firstPage; i <= lastPage; i++) {
            pages.push(i);
        }

        return (
            <>
                {firstPage > 1 &&
                    <button onClick={() => handlePageChange(1)}>1</button>
                }
                {firstPage > 2 &&
                    <span>...</span>
                }
                {pages.map(page => (
                    <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={currentPage === page ? 'active-page' : ''}
                    >
                        {page}
                    </button>
                ))}
                {lastPage < totalPages - 1 &&
                    <span className='etc'>....</span>
                }
                {lastPage < totalPages &&
                    <button onClick={() => handlePageChange(totalPages)}>{totalPages}</button>
                }
            </>
        );
    };

    return (
        <div className="app">
            <div className="container">
                <div className="row g-2">
                    <div className="col-lg-12 d-flex align-items-center justify-content-between">
                        <h3 className='caption'>Phim mới cập nhật</h3>
                    </div>
                    <div className="row g-2">
                        {movieSuggests && movieSuggests.length > 0 &&
                            movieSuggests.map(movieSuggest => (
                                <div key={movieSuggest.slug} className="col-lg-2 col-md-3 col-4">
                                    <div className="item">
                                        <a href={`/info/${movieSuggest.slug}`}>
                                            <img src={movieSuggest.poster_url} alt="" />
                                            <p>{movieSuggest.name}</p>
                                            <i className="icon-play"></i>
                                        </a>
                                    </div>
                                </div>
                            ))}
                    </div>
                    <div className="pagination">
                        {renderPaginationButtons()}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewMovies;
