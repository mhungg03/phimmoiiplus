import React, { useState, useEffect } from "react";
import './Body.css';

function Country() {
    const [currentPage, setCurrentPage] = useState(1);
    const [countries, setCountries] = useState([]);
    const [totalPages, setTotalPages] = useState(1);

    const type = window.location.pathname.split('/').pop();
    useEffect(() => {
        fetchMovie(type, currentPage);
    }, [type, currentPage]);

    const fetchMovie = async (type, page) => {
        try {
            const response = await fetch(`https://phimapi.com/v1/api/quoc-gia/${type}?page=${page}&limit=20`);
            const data = await response.json();
            if (data && data.data && data.data.items) {
                setCountries(data.data.items);
                setTotalPages(data.data.params.pagination.totalPages);
            }
        }
        catch (error) {
            console.error('Error fetching data', error);
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
            <div>
                {pages.map(page => (
                    <button key={page} onClick={() => handlePageChange(page)}>
                        {page}
                    </button>
                ))}
            </div>
        );
    };

    return (
        <div className="app">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h3 className='caption'>Tất cả phim</h3>
                    </div>
                </div>
                <div className="row g-2">
                    {countries && countries.length > 0 &&
                        countries.map(country => (
                            <div key={country.slug} className="col-lg-2 col-md-3 col-4">
                                <div className="item">
                                    <span className='label'>{country.episode_current}</span>
                                    <a href={`/info/${country.slug}`}>
                                        <img src={`https://img.phimapi.com/${country.poster_url}`} alt="" />
                                        <p>{country.name}</p>
                                        <i className='icon-play'></i>
                                    </a>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="pagination">
                    {renderPaginationButtons()}
                </div>
            </div>
        </div>
    );
}

export default Country;
