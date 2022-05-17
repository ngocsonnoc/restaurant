import React from "react";
import img from "../../../assets/image/blog/insta/insta-1.jpg";
const InstagramImage = () => {
  return (
    <div className="instagram mb-3">
      <div className="container-xl">
        <a
          href="https://www.instagram.com/nobnoc_/"
          target="_blank"
          className="btn btn-default btn-instagram"
        >
          Apptizer trên Instagram
        </a>
        <div className="instagram-feed d-flex flex-wrap">
          <div className="insta-item col-sm-2 col-6 col-md-2">
            <a href="#">
              <img src={img} alt="" />
            </a>
          </div>
          <div className="insta-item col-sm-2 col-6 col-md-2">
            <a href="#">
              <img src={img} alt="" />
            </a>
          </div>
          <div className="insta-item col-sm-2 col-6 col-md-2">
            <a href="#">
              <img src={img} alt="" />
            </a>
          </div>
          <div className="insta-item col-sm-2 col-6 col-md-2">
            <a href="#">
              <img src={img} alt="" />
            </a>
          </div>
          <div className="insta-item col-sm-2 col-6 col-md-2">
            <a href="#">
              <img src={img} alt="" />
            </a>
          </div>
          <div className="insta-item col-sm-2 col-6 col-md-2">
            <a href="#">
              <img src={img} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstagramImage;
