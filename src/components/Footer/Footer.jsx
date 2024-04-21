import './Footer.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Footer() {
    return(
        <div className="footer">
        <div className="footer-container">
            <div className="container">
                <div className="row">
                    <div className="col-lg-2 col-12 d-none d-lg-block">
                        <a href="">
                            <img src="https://phimmoichillq.net/dev/images/logo.png" alt=""/>
                        </a>
                       <div className="info"> Tận hưởng trải nghiệm xem phim mới nhất miễn phí ngay tại phimmoi và dành thời gian thư giãn chill cùng gia đình và bạn bè. Với một thư viện phim phong phú</div>
                    </div>
                    <div className="col-lg-2 col-6">
                        <ul>
                            <p>Phim mới</p>
                            <li><a href="/category/kinh-dien">Phim kinh điển</a></li>
                            <li><a href="/list/phim-le">Phim lẻ</a></li>
                            <li><a href="/list/phim-bo">Phim bộ</a></li>
                            <li><a href="/category/hanh-dong">Phim hành động</a></li>
                            <li><a href="/category/vien-tuong">Phim viễn tưởng</a></li>
                            <li><a href="/category/tam-ly">Phim tâm lí</a></li>
                            <li><a href="/category/hai-huoc">Phim hài hước</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-6">
                        <ul>
                            <p>Phim hay</p>
                            <li><a href="/country/au-my">Phim Âu Mỹ</a></li>
                            <li><a href="/country/han-quoc">Phim Hàn Quốc</a></li>
                            <li><a href="/country/trung-quoc">Phim Trung Quốc</a></li>
                            <li><a href="/country/thai-lan">Phim Thái Lan</a></li>
                            <li><a href="/country/viet-nam">Phim Việt Nam</a></li>
                            <li><a href="/category/kinh-di">Phim Ma Kinh Dị</a></li>
                            <li><a href="/category/hoat-hinh">Phim Hoạt Hình</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-6">
                        <ul>
                            <p>Phim hot</p>
                            <li><a href="">Về chúng tôi</a></li>
                            <li><a href="/">Phimmoi</a></li>
                            <li><a href="">Sitemap</a></li>
                            
                        </ul>
                    </div>
                    <div className="col-lg-2 col-6">
                        <ul>
                            <p>Trợ giúp</p>
                            <li><a href="">Hỏi đáp</a></li>
                            <li><a href="">Liên hệ</a></li>
                            <li><a href="">Tin tức</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-6">
                        <ul>
                            <p>Thông tin</p>
                            <li><a href="">Điều khoản sử dụng</a></li>
                            <li><a href="">Chính sách riêng tư</a></li>
                            <li><a href="">Khiếu nại bản quyền</a></li>
                            <li><a href="">© 2023 PhimChill.Net</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Footer;