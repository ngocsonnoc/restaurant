import React from "react";
import img from "../../../assets/image/blog/posts/editor-side-1.jpg";
import imgAuthor from "../../../assets/image/blog/other/author-sm.jpg";

const MainBlogListItemSquare = () => {
  return (
    <div className="post post-list-sm square">
      <div className="thumb rounded">
        <a href="#">
          <div className="inner">
            <img src={img} alt="" />
          </div>
        </a>
      </div>
      <div className="details clearfix">
        <h6 className="post-title my-0">
          <a href="#">2 Policemen saved life like a hero</a>
        </h6>
        <ul className="meta list-inline mt-1 mb-0">
          <li className="list-inline-item">25 May 2021</li>
        </ul>
      </div>
    </div>
  );
};

export default MainBlogListItemSquare;
