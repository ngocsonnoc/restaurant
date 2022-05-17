import React from "react";
import img from "../../../assets/image/blog/posts/editor-side-1.jpg";
const BlogSlideItem = () => {
  return (
    <div className="post post-over-content">
      <div className="details clearfix">
        <a href="#" className="category-badge">
          Entertainment
        </a>
        <h4 className="post-title">
          <a href="#">Amazon prime video to coproduce "Ram Setu"</a>
        </h4>
        <ul className="meta list-inline mb-0">
          <li className="list-inline-item">
            <a href="#">Techie Coder</a>
          </li>
          <li className="list-inline-item">03 Jun 2021</li>
        </ul>
      </div>
      <a href="#">
        <div className="thumb rounded">
          <div className="inner">
            <img src={img} alt="" />
          </div>
        </div>
      </a>
    </div>
  );
};

export default BlogSlideItem;
