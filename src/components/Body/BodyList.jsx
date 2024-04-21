import React, { useEffect, useState } from "react";
import './Body.css';

function BodyList() {
    const [title, setTitle] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [movieLists, setMovieLists] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    
    const type = window.location.pathname.split('/').pop();

    useEffect(() => {
        fetchMovie(type, currentPage);
    }, [type, currentPage]);

    const fetchMovie = async (type, page) => {
        try {
            const response = await fetch(`https://phimapi.com/v1/api/danh-sach/${type}?page=${page}&limit=20`);
            const data = await response.json();
            if (data && data.data && data.data.items) {
                setMovieLists(data.data.items);
                setTitle(data.data.titlePage);
                setTotalPages(data.data.params.pagination.totalPages);
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
                    <span className="etc">....</span>
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
                <div className="row">
                    <div className="col-lg-12">
                        <h3 className="caption">Danh sách {title}</h3>
                    </div>
                </div>
                <div className="row g-2">
                    {movieLists && movieLists.length > 0 &&
                        movieLists.map(movieList => (
                            <div key={movieList.slug} className="col-lg-2 col-md-3 col-4">
                                <div className="item">
                                    <span className="label">{movieList.episode_current}</span>
                                    <a href={`/info/${movieList.slug}`}>
                                        <img src={`https://img.phimapi.com/${movieList.poster_url}`} alt="" />
                                        <p>{movieList.name}</p>
                                        <i className="icon-play"></i>
                                    </a>
                                </div>
                            </div>
                        ))
                    }
                    <div className="pagination">
                        {renderPaginationButtons()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BodyList;
