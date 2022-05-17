import React from "react";

const RightMainSection = () => {

  return (
    <div className="col-lg-4">
      <div className="sidebar">
        <div className="widget rounded">
          <div className="widget-about text-center">
            <img src="images/logo.svg" alt="" className="logo" />
            <p className="mb-4" style={{ textAlign: "justify" }}>
              Không phải trên sân khấu rực rỡ đèn hoa, không có khán giả đông
              đúc ngồi dưới chiêm ngưỡng, không tạo ra tác phẩm của mình bằng
              giấy bút hay lời ca, tiếng nhạc…, trong những gian bếp nóng bức
              đôi khi còn chật chội, nguy hiểm… người đầu bếp vẫn hàng ngày tạo
              nên những món ăn thơm ngon, hấp dẫn bằng dao, chảo, lửa, thực phẩm
              và… niềm đam mê! Để “chinh phục” các thực khách, có thể nói người
              đầu bếp cũng chính là một nghệ sĩ biết “thổi hồn” vào những món ăn
              mà mình tạo ra.
            </p>
            <ul className="social-icons list-unstyled list-inline mb-0">
              <li className="list-inline-item">
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fab fa-linkedin-in" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fab fa-pinterest" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fab fa-telegram-plane" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="far fa-envelope" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="widget rounded">
          <div className="widget-header text-center">
            <h3 className="widget-title">Popular Posts</h3>
          </div>
          <div className="widget-content">
            <div className="post post-list-sm circle">
              <div className="thumb circle">
                <span className="number">1</span>
                <a href="#">
                  <div className="inner">
                    <img src="images/posts/tabs-1.jpg" alt="" />
                  </div>
                </a>
              </div>
              <div className="details clearfix">
                <h6 className="post-title my-0">
                  <a href="#">Bitcoin price raise after sudden fall</a>
                </h6>
                <ul className="meta list-inline mt-1 mb-0">
                  <li className="list-inline-item">30 May 2021</li>
                </ul>
              </div>
            </div>
            <div className="post post-list-sm circle">
              <div className="thumb circle">
                <span className="number">2</span>
                <a href="#">
                  <div className="inner">
                    <img src="images/posts/tabs-2.jpg" alt="" />
                  </div>
                </a>
              </div>
              <div className="details clearfix">
                <h6 className="post-title my-0">
                  <a href="#">Clubhouse Crosses 1Mn Downloads On Play Store</a>
                </h6>
                <ul className="meta list-inline mt-1 mb-0">
                  <li className="list-inline-item">30 May 2021</li>
                </ul>
              </div>
            </div>
            <div className="post post-list-sm circle">
              <div className="thumb circle">
                <span className="number">3</span>
                <a href="#">
                  <div className="inner">
                    <img src="images/posts/tabs-3.jpg" alt="" />
                  </div>
                </a>
              </div>
              <div className="details clearfix">
                <h6 className="post-title my-0">
                  <a href="#">Check current Gold Price of 24k</a>
                </h6>
                <ul className="meta list-inline mt-1 mb-0">
                  <li className="list-inline-item">30 May 2021</li>
                </ul>
              </div>
            </div>
            <div className="post post-list-sm circle">
              <div className="thumb circle">
                <span className="number">4</span>
                <a href="#">
                  <div className="inner">
                    <img src="images/posts/tabs-4.png" alt="" />
                  </div>
                </a>
              </div>
              <div className="details clearfix">
                <h6 className="post-title my-0">
                  <a href="#">Improve your mails with Grammarly</a>
                </h6>
                <ul className="meta list-inline mt-1 mb-0">
                  <li className="list-inline-item">30 May 2021</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="widget rounded">
          <div className="widget-header text-center">
            <h3 className="widget-title">Explore Topics</h3>
          </div>
          <div className="widget-content">
            <ul className="list">
              <li>
                <a href="#">Trending</a>
                <span>(7)</span>
              </li>
              <li>
                <a href="#">Politics</a>
                <span>(5)</span>
              </li>
              <li>
                <a href="#">Fashion</a>
                <span>(1)</span>
              </li>
              <li>
                <a href="#">Lifestyle</a>
                <span>(9)</span>
              </li>
              <li>
                <a href="#">Inspiration</a>
                <span>(2)</span>
              </li>
              <li>
                <a href="#">Culture</a>
                <span>(4)</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="widget rounded">
          <div className="widget-header text-center">
            <h3 className="widget-title">Newsletter</h3>
          </div>
          <div className="widget-content">
            <span className="newsletter-headline text-center mb-3">
              Join 50,000 subscribers
            </span>
            <form action="#">
              <div className="mb-2">
                <input
                  type="email"
                  className="form-control w-100 text-center"
                  placeholder="Email address..."
                />
              </div>
              <button className="btn btn-default btn-full">Sign Up</button>
            </form>
            <span className="newsletter-privacy text-center mt-3">
              By signing up, you agree to our <a href="#">Privacy policy</a>
            </span>
          </div>
        </div>
        <div className="widget rounded">
          <div className="widget-header text-center">
            <h3 className="widget-title">COVID-19</h3>
          </div>
          <div className="widget-content">
            <div className="post-carousel-widget">
              <div className="post post-carousel">
                <div className="thumb rounded">
                  <a href="#" className="category-badge position-absolute">
                    COVID-19
                  </a>
                  <a href="#">
                    <div className="inner">
                      <img src="images/posts/wid-1.jpg" alt="" />
                    </div>
                  </a>
                </div>
                <h5 className="post-title mb-0 mt-4">
                  <a href="#">10 Things to do for being safe of corona</a>
                </h5>
                <ul className="meta list-inline mt-2 mb-0">
                  <li className="list-inline-item">
                    <a href="#">Techie Coder</a>
                  </li>
                  <li className="list-inline-item">29 March 2021</li>
                </ul>
              </div>
              <div className="post post-carousel">
                <div className="thumb rounded">
                  <a href="#" className="category-badge position-absolute">
                    COVID-19
                  </a>
                  <a href="#">
                    <div className="inner">
                      <img src="images/posts/wid-2.jpg" alt="" />
                    </div>
                  </a>
                </div>
                <h5 className="post-title mb-0 mt-4">
                  <a href="#">
                    Wash your hands after certain interval of time.
                  </a>
                </h5>
                <ul className="meta list-inline mt-2 mb-0">
                  <li className="list-inline-item">
                    <a href="#">Techie Coder</a>
                  </li>
                  <li className="list-inline-item">29 March 2021</li>
                </ul>
              </div>
              <div className="post post-carousel">
                <div className="thumb rounded">
                  <a href="#" className="category-badge position-absolute">
                    COVID-19
                  </a>
                  <a href="#">
                    <div className="inner">
                      <img src="images/posts/wid-3.jpg" alt="" />
                    </div>
                  </a>
                </div>
                <h5 className="post-title mb-0 mt-4">
                  <a href="#">Get vaccinated to stop the chain of corona</a>
                </h5>
                <ul className="meta list-inline mt-2 mb-0">
                  <li className="list-inline-item">
                    <a href="#">Techie Coder</a>
                  </li>
                  <li className="list-inline-item">29 March 2021</li>
                </ul>
              </div>
            </div>
            <div className="slick-arrows-bot">
              <buttton
                className="carousel-botNav-prev slick-custom-buttons"
                type="button"
                data-role="none"
                aria-label="Previous"
              >
                <i className="icon-arrow-left" />
              </buttton>
              <buttton
                className="carousel-botNav-next slick-custom-buttons"
                type="button"
                data-role="none"
                aria-label="Next"
              >
                <i className="icon-arrow-right" />
              </buttton>
            </div>
          </div>
        </div>
        <div className="widget rounded">
          <div className="widget-header text-center">
            <h3 className="widget-title">Tag Clouds</h3>
          </div>
          <div className="widget-content">
            <a href="#" className="tag">
              #Trending
            </a>
            <a href="#" className="tag">
              #Cooking
            </a>
            <a href="#" className="tag">
              #Featured
            </a>
            <a href="#" className="tag">
              #Beauty
            </a>
            <a href="#" className="tag">
              #Finance
            </a>
            <a href="#" className="tag">
              #Celebrities
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightMainSection;
