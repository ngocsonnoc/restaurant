import React from "react";
import img from "../../../assets/image/blog/posts/tren-lg-1.jpg";
import imgAuthor from "../../../assets/image/blog/other/author-sm.jpg";

const MainBlogBigItem = () => {
  return (
    <div className="post">
      <div className="thumb rounded">
        <a href="#" className="category-badge position-absolute">
          Lifestyle
        </a>
        <a href="#">
          <div className="inner">
            <img src={img} alt="" />
          </div>
        </a>
      </div>
      <ul className="meta list-inline mt-4 mb-0">
        <li className="list-inline-item">
          <a href="#">
            <img className="author" src={imgAuthor} alt="" />
            Techie Coder
          </a>
        </li>
        <li className="list-inline-item">05 Jun 2021</li>
      </ul>
      <h5 className="post-title mb-3 mt-3">
        <a href="#">3 must visit Place in switzerland</a>
      </h5>
      <p className="excerpt mb-0">
        This is Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Explicabo, quasi.
      </p>
    </div>
  );
};

export default MainBlogBigItem;
