import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import blog1 from "../../../assets/image/home/blog-1.jpg";
import blog2 from "../../../assets/image/home/blog-2.jpg";
import blog3 from "../../../assets/image/home/blog-3.jpg";
import Common from "../../../based/Common";
import { INIT_PAGING } from "../../../based/Constants";
import BlogServices from "../../../based/services/BlogServices";
const Blog = () => {
  const [slideToShow, setSlideToShow] = useState(3);
  const [listData, setListData] = useState([]);
  const [paging, setPaging] = useState({ ...INIT_PAGING });
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: slideToShow,
    slidesToScroll: slideToShow,
  };

  useEffect(() => {
    if (Common.isDesktop()) setSlideToShow(3);
    else setSlideToShow(1);
    getDatas(paging);
  }, []);
  const getDatas = async (paging) => {
    let [err, data] = await BlogServices.GetAllBlogs(paging);
    if (!err && data) setListData(data.result);
    else setListData([]);
  };
  console.log("blogs", listData);
  return (
    <Wrapper className="blogs" id="blogs">
      <h1 className="heading pb-5"> Bài viết nổi bật</h1>
      <div className="box-container">
        <Slider {...settings}>
          {!!listData && listData.length > 0
            ? listData.map((blog, index) => (
                <div className="box">
                  <img src={blog.avatar} alt="" />
                  <div className="content">
                    <div className="icons">
                      <a href="#">
                        {" "}
                        <i className="fas fa-user" />{" "}
                        {blog.createdBy?.author || "user"}{" "}
                      </a>
                      <a href="#">
                        {" "}
                        <i className="fas fa-calendar" />{" "}
                        {Common.formatDate(new Date(blog.createdAt || 0))}{" "}
                      </a>
                    </div>
                    <h3 className="blog-title">{blog.title}</h3>
                    <p className="blog-short-content">{blog.shortContent}</p>
                    <a href="#" className="btn">
                      read more
                    </a>
                  </div>
                </div>
              ))
            : ""}
        </Slider>
      </div>
    </Wrapper>
  );
};

export default Blog;
const Wrapper = styled.section`
  .box-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    gap: 1.5rem;
  }

  .box-container .box {
    width: 90% !important;
    overflow: hidden;
    border-radius: 0.5rem;
    box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.1);
    background: #fff;
  }
  .blog-short-content {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    height: 75px;
  }
  .blog-title {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    height: 55px;
  }

  @media screen and (max-width: 768px) {
    .box-container .box {
      width: 100% !important;
    }
  }
  .box-container .box img {
    height: 25rem;
    width: 100%;
    object-fit: cover;
  }

  .box-container .box .content {
    padding: 2rem;
  }

  .box-container .box .content .icons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 1.5rem;
    margin-bottom: 1rem;
    border-bottom: 0.2rem solid rgba(0, 0, 0, 0.1);
  }

  .box-container .box .content .icons a {
    color: #666;
    font-size: 1rem;
    text-decoration: none;
  }

  .box-container .box .content .icons a:hover {
    color: #130f40;
  }

  .box-container .box .content .icons a i {
    color: #ff7800;
    padding-right: 0.5rem;
  }

  .box-container .box .content h3 {
    line-height: 1.2;
    color: #130f40;
    font-size: 1.2rem;
    padding: 0.5rem 0;
  }

  .box-container .box .content p {
    line-height: 1;
    color: #666;
    font-size: 1rem;
    padding: 0.5rem 0;
  }
`;
