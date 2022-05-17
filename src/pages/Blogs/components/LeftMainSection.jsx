import React from "react";
import img from "../../../assets/image/blog/posts/editor-side-1.jpg";
import imgAuthor from "../../../assets/image/blog/other/author-sm.jpg";
import MainBlogBigItem from "./MainBlogBigItem";
import MainBlogListItemSquare from "./MainBlogListItemSquare";
import Slider from "react-slick";
import BlogSlideItem from "./BlogSlideItem";
import BlogListItemBig from "./BlogListItemBig";

const SampleNextArrow = ({ onClick }) => {
  return (
    <buttton
      className="carousel-topNav-next slick-custom-buttons"
      type="button"
      data-role="none"
      aria-label="Next"
      onClick={onClick}
    >
      <i className="fa fa-arrow-right" aria-hidden="true"></i>
    </buttton>
  );
};
const SamplePrevArrow = ({ onClick }) => {
  return (
    <buttton
      className="carousel-topNav-prev slick-custom-buttons"
      type="button"
      data-role="none"
      aria-label="Previous"
      onClick={onClick}
    >
      <i className="fa fa-arrow-left" aria-hidden="true"></i>
    </buttton>
  );
};
const LeftMainSection = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="col-lg-8">
      <div className="section-header">
        <h3 className="section-title">Bài viết mới</h3>
      </div>
      <div className="padding-30 rounded bordered">
        <div className="row gy-5">
          <div className="col-sm-6">
            {/* post  */}
            <MainBlogBigItem />
          </div>
          <div className="col-sm-6">
            <MainBlogListItemSquare />
            <MainBlogListItemSquare />
            <MainBlogListItemSquare />
            <MainBlogListItemSquare />
          </div>
        </div>
      </div>
      <div className="spacer" data-height={50} />
      <div className="section-header">
        <h3 className="section-title">Nổi bật</h3>
      </div>
      <div className="padding-30 rounded bordered">
        <div className="row gy-5">
          <div className="col-sm-6">
            <MainBlogBigItem />
          </div>
          <div className="col-sm-6">
            <MainBlogListItemSquare />
            <MainBlogListItemSquare />
            <MainBlogListItemSquare />
            <MainBlogListItemSquare />
          </div>
        </div>
      </div>
      <div className="section-header mt-3">
        <h3 className="section-title">Inspiration</h3>
      </div>

      <Slider {...settings}>
        <BlogSlideItem />
        <BlogSlideItem />
        <BlogSlideItem />
        <BlogSlideItem />
      </Slider>

      <div className="section-header mt-3">
        <h3 className="section-title">Latest Posts</h3>
      </div>
      <div className="padding-30 rounded bordered">
        <div className="row">
          <div className="col-md-12 col-sm-6">
            {/* post  */}
            <BlogListItemBig />
          </div>
          <div className="col-md-12 col-sm-6">
            {/* post  */}
            <BlogListItemBig />
          </div>
          <div className="col-md-12 col-sm-6">
            {/* post  */}
            <BlogListItemBig />
          </div>
          <div className="col-md-12 col-sm-6">
            {/* post  */}
            <BlogListItemBig />
          </div>
          <div className="text-center">
            <button className="btn btn-simple">Load More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftMainSection;
