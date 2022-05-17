import React from "react";
import img from "../../../assets/image/blog/posts/editors-lg.jpg";
const PostListItem = ({ badge }) => {
  return (
    <div className="post post-list-sm circle">
      <div className="thumb circle">
        {badge ? <span className="number">{badge}</span> : ""}
        <a href="#">
          <div className="inner">
            <img src={img} alt="" />
          </div>
        </a>
      </div>
      <div className="details clearfix">
        <h6 className="post-title my-0">
          <a href="#">Should we invest in soverign gold bonds</a>
        </h6>
        <ul className="meta list-inline mt-1 mb-0">
          <li className="list-inline-item">04 Jun 2021</li>
        </ul>
      </div>
    </div>
  );
};

export default PostListItem;
