import React from "react";
import img from "../../../assets/image/blog/posts/tren-lg-1.jpg";
const BlogListItemBig = () => {
  return (
    <div className="post post-list clearfix">
      <div className="thumb rounded">
        <span className="post-format-sm">
          <i className="icon-picture" />
        </span>
        <a href="#">
          <div className="inner">
            <img src={img} alt="" />
          </div>
        </a>
      </div>
      <div className="details">
        <ul className="meta list-inline mb-3">
          <li className="list-inline-item">
            <a href="#">
              <img src="images/other/author-sm.jpg" className="author" alt="" />
              Techie Coder
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#">Trending</a>
          </li>
          <li className="list-inline-item">26 May 2021</li>
        </ul>
        <h5 className="post-tile">
          <a href="#">
            360-seater plane flies to Dubai from Mumbai with only 1 Passenger
          </a>
        </h5>
        <p className="excerpt mb-0">
          This is Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
          iure.
        </p>
        <div className="post-bottom clearfix d-flex align-items-center">
          <div className="social-share me-auto">
            <button className="toggle-button icon-share" />
            <ul className="icons list-unstyled list-inline mb-0">
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
          <div className="more-button float-end">
            <a href="#">
              <span className="icon-options" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogListItemBig;
