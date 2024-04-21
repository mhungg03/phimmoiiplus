import React, {useState} from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Header() {
  const navigate = useNavigate();
  const [searchTerms, setSearchTerms] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if(searchTerms.trim() !== '') {
        //Chuyển hướng trang đến /search
        navigate(`/search?keyword=${encodeURIComponent(searchTerms)}`)
      }
  }
  const handleChange = (e) => {
    setSearchTerms(e.target.value);
  }
    return(
        <div className='header'>
          <nav className="navbar navbar-expand-lg">
                  <div className="container-fluid">
                    <a href="/">
                      <img src="https://phimmoichillq.net/dev/images/logo.png" alt=""/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <i className="btn-icon fa-solid fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                          <a className="nav-link" aria-current="page" href="/">Phim mới</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="/list/phim-le">Phim lẻ</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="/list/phim-bo">Phim bộ</a>
                        </li>
                        <li className="nav-item dropdown">
                          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Thể loại
                          </a>
                          <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="/category/hanh-dong">Phim hành động</a></li>
                            <li><a className="dropdown-item" href="/category/tinh-cam">Phim tình cảm</a></li>
                            <li><a className="dropdown-item" href="/category/hai-huoc">Phim hài</a></li>
                            <li><a className="dropdown-item" href="/category/co-trang">Phim cổ trang</a></li>
                            <li><a className="dropdown-item" href="/category/tam-ly">Phim tâm lý</a></li>
                            <li><a className="dropdown-item" href="/category/hinh-su">Phim hình sự</a></li>
                            <li><a className="dropdown-item" href="/category/chien-tranh">Phim chiến tranh</a></li>
                            <li><a className="dropdown-item" href="/category/the-thao">Phim thể thao</a></li>
                            <li><a className="dropdown-item" href="/category/vo-thuat">Phim võ thuật</a></li>
                            <li><a className="dropdown-item" href="/category/vien-tuong">Phim viễn tưởng</a></li>
                            <li><a className="dropdown-item" href="/category/phieu-luu">Phim phiêu lưu</a></li>
                            <li><a className="dropdown-item" href="/category/khoa-hoc">Phim khoa học</a></li>
                            <li><a className="dropdown-item" href="/category/kinh-di">Phim kinh dị</a></li>
                            <li><a className="dropdown-item" href="/category/am-nhac">Phim âm nhạc</a></li>
                            <li><a className="dropdown-item" href="/category/than-thoai">Phim thần thoại</a></li>
                            <li><a className="dropdown-item" href="/category/tai-lieu">Phim tài liệu</a></li>
                            <li><a className="dropdown-item" href="/category/gia-dinh">Phim gia đình</a></li>
                            <li><a className="dropdown-item" href="/category/chinh-kich">Phim chính kịch</a></li>
                            <li><a className="dropdown-item" href="/category/bi-an">Phim bí ẩn</a></li>
                            <li><a className="dropdown-item" href="/category/hoc-duong">Phim học đường</a></li>
                            <li><a className="dropdown-item" href="/category/kinh-dien">Phim kinh điển</a></li>
                            <li><a className="dropdown-item" href="/category/phim-18">Phim 18+</a></li>
                          </ul>
                        </li>
                        <li className="nav-item dropdown">
                          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Quốc gia
                          </a>
                          <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="/country/trung-quoc">Phim Trung Quốc</a></li>
                            <li><a className="dropdown-item" href="/country/han-quoc">Phim Hàn Quốc</a></li>
                            <li><a className="dropdown-item" href="/country/nhat-ban">Phim Nhật Bản</a></li>
                            <li><a className="dropdown-item" href="/country/thai-lan">Phim Thái Lan</a></li>
                            <li><a className="dropdown-item" href="/country/au-my">Phim Âu Mỹ</a></li>
                            <li><a className="dropdown-item" href="/country/dai-loan">Phim Đài Loan</a></li>
                            <li><a className="dropdown-item" href="/country/hong-kong">Phim Hồng Kông</a></li>
                            <li><a className="dropdown-item" href="/country/an-do">Phim Ấn Độ</a></li>
                            <li><a className="dropdown-item" href="/country/anh">Phim Anh</a></li>
                            <li><a className="dropdown-item" href="/country/duc">Phim Đức</a></li>
                            <li><a className="dropdown-item" href="/country/tay-ban-nha">Phim Tây Ban Nha</a></li>
                            <li><a className="dropdown-item" href="/country/ha-lan">Phim Hà Lan</a></li>
                            <li><a className="dropdown-item" href="/country/tho-nhi-ky">Phim Thổ Nhĩ Kỳ</a></li>
                            <li><a className="dropdown-item" href="/country/indonesia">Phim Indonesia</a></li>
                            <li><a className="dropdown-item" href="/country/nga">Phim Nga</a></li>
                            <li><a className="dropdown-item" href="/country/uc">Phim Úc</a></li>
                            <li><a className="dropdown-item" href="/country/malaysia">Phim Malaysia</a></li>
                            <li><a className="dropdown-item" href="/country/brazil">Phim Brazil</a></li>
                            <li><a className="dropdown-item" href="/country/philippines">Phim Philippines</a></li>
                            <li><a className="dropdown-item" href="/country/y">Phim Ý</a></li>
                            <li><a className="dropdown-item" href="/country/bi">Phim Bỉ</a></li>
                            <li><a className="dropdown-item" href="/country/viet-nam">Phim Việt Nam</a></li>
                            <li><a className="dropdown-item" href="/country/singapore">Phim Singapore</a></li>
                            <li><a className="dropdown-item" href="/country/quoc-gia-khac">Quốc Gia Khác</a></li>
                          </ul>
                        </li>
                        {/* <li className="nav-item dropdown">
                          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Năm phát hành
                          </a>
                          <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="/year/2014">Phim 2024</a></li>
                            <li><a className="dropdown-item" href="/year/2023">Phim 2023</a></li>
                            <li><a className="dropdown-item" href="/year/2022">Phim 2022</a></li>
                            <li><a className="dropdown-item" href="/year/2021">Phim 2021</a></li>
                            <li><a className="dropdown-item" href="/year/2020">Phim 2020</a></li>
                            <li><a className="dropdown-item" href="/year/2019">Phim 2019</a></li>
                            <li><a className="dropdown-item" href="/year/2018">Phim 2018</a></li>
                            <li><a className="dropdown-item" href="/year/2017">Phim 2017</a></li>
                            <li><a className="dropdown-item" href="/year/2016">Phim 2016</a></li>
                            <li><a className="dropdown-item" href="/year/2015">Phim 2015</a></li>
                            <li><a className="dropdown-item" href="/year/2014">Phim 2014</a></li>
                            <li><a className="dropdown-item" href="/year/2013">Phim 2013</a></li>
                            <li><a className="dropdown-item" href="/year/2012">Phim 2012</a></li>
                            <li><a className="dropdown-item" href="/year/2011">Phim 2011</a></li>
                            <li><a className="dropdown-item" href="/year/2010">Phim 2010</a></li>
                            <li><a className="dropdown-item" href="/year/2009">Phim 2009</a></li>
                            <li><a className="dropdown-item" href="/year/2008">Phim 2008</a></li>
                            <li><a className="dropdown-item" href="/year/2007">Phim 2007</a></li>
                          </ul>
                        </li> */}
                      </ul>
                      <form className="d-flex" role="search" onSubmit={handleSearch}>
                        <input className="form-control me-2" type="search" placeholder="Tìm kiếm..."  aria-label="Search" value={searchTerms} onChange={handleChange} />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                      </form>
                    </div>
                  </div>
          </nav>
        </div>
    )
}
export default Header;