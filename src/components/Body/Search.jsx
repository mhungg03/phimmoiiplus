// Search.js
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Body.css';

function Search() {
  const [keyword, setKeyword] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const keyword = searchParams.get('keyword');

    // Thực hiện tìm kiếm và cập nhật kết quả
    if (keyword) {
      fetchSearchResults(keyword);
    }
  }, [location.search]);

  const fetchSearchResults = async (keyword) => {
    const limit = 1000;
    const apiUrl = `https://phimapi.com/v1/api/tim-kiem?keyword=${encodeURIComponent(keyword)}&limit=${limit}`;
  
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Fetch request failed');
      }
      const data = await response.json();
      if(data&& data.data && data.data.items) {
        setSearchResults(data.data.items);
        setKeyword(data.data.params.keyword);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  

  // Hiển thị kết quả tìm kiếm
  return (
    <div className="app">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h3 className='caption'>Kết quả tìm kiếm: {keyword}</h3>
                </div>
            </div>
            <div className="row g-2 ">
                {searchResults && searchResults.length > 0 &&
                    searchResults.map(searchResult => (
                        <div className="col-lg-2 col-md-3 col-4">
                            <div key={searchResult.slug} className="item">
                                <span className="label">{searchResult.episode_current}</span>
                                    <a href={`/info/${searchResult.slug}`}>
                                    <img src={`https://img.phimapi.com/${searchResult.poster_url}`} alt="" />
                                        <p>{searchResult.name}</p>
                                        <i className="icon-play"></i>
                                    </a>
                            </div>
                        </div>
                    ))    
                }
            </div>
        </div>
    </div>
  );
}

export default Search;
