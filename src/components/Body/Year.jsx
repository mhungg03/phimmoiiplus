import React, { useState, useEffect } from "react";
import "./Body.css";

function Year() {
  const [currentPage, setCurrentPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const slugYear = getYearFromSlug(window.location.pathname);
    fetchMovies(slugYear, currentPage);
  }, [currentPage]);

  const getYearFromSlug = (slug) => {
    // Giả sử slug có định dạng: /movies/2020
    const parts = slug.split('/');
    return parseInt(parts[2]); // Trích xuất năm từ vị trí thích hợp trong slug
  };

  const fetchMovies = async (year, page) => {
    try {
      const response = await fetch(
        `https://phimapi.com/danh-sach/phim-moi-cap-nhat?page=${page}`
      );
      const data = await response.json();
      if (data && data.status && data.items) {
        const filteredMovies = data.items.filter(
          (movie) => movie.year === year
        );
        setMovies(filteredMovies);
        setTotalPages(data.pagination.totalPages);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
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
        {firstPage > 1 && (
          <button onClick={() => handlePageChange(1)}>1</button>
        )}
        {firstPage > 2 && <span>...</span>}
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={currentPage === page ? "active-page" : ""}
          >
            {page}
          </button>
        ))}
        {lastPage < totalPages - 1 && <span>...</span>}
        {lastPage < totalPages && (
          <button onClick={() => handlePageChange(totalPages)}>
            {totalPages}
          </button>
        )}
      </>
    );
  };

  return (
    <div className="app">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h3 className="caption">
              Phim mới cập nhật năm {movies.length > 0 ? movies[0].year : ""}
            </h3>
          </div>
        </div>
        <div className="row g-2">
          {movies.map((movie) => (
            <div key={movie._id} className="col-lg-2 col-md-3 col-3">
              <div className="item">
                <span className="label">{movie.year}</span>
                <a href={`/info/${movie.slug}`}>
                  <img src={movie.poster_url} alt="" />
                  <p>{movie.name}</p>
                  <i className="icon-play"></i>
                </a>
              </div>
            </div>
          ))}
          <div className="pagination">{renderPaginationButtons()}</div>
        </div>
      </div>
    </div>
  );
}

export default Year;
