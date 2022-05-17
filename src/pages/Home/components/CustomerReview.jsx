import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import Common from "../../../based/Common";

import pic1 from "../../../assets/image/home/pic-1.png";
import pic2 from "../../../assets/image/home/pic-2.png";
import pic3 from "../../../assets/image/home/pic-3.png";
import pic4 from "../../../assets/image/home/pic-4.png";

const CustomerReview = () => {
  const [slideToShow, setSlideToShow] = useState(3);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: slideToShow,
    slidesToScroll: slideToShow,
    arrows: false,
  };
  useEffect(() => {
    if (Common.isDesktop()) setSlideToShow(3);
    else setSlideToShow(1);
  }, []);
  return (
    <Wrapper className="review" id="review">
      <h1 className="heading pb-4"> Đánh giá từ khách hàng</h1>
      <div className="swiper review-slider">
        <Slider {...settings}>
          <div className="swiper-slide box">
            <img src={pic1} alt="" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
              sunt fugiat dolore ipsum id est maxime ad tempore quasi tenetur.
            </p>
            <h3>john deo</h3>
            <div className="stars">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star-half-alt" />
            </div>
          </div>
          <div className="swiper-slide box">
            <img src={pic2} alt="" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
              sunt fugiat dolore ipsum id est maxime ad tempore quasi tenetur.
            </p>
            <h3>john deo</h3>
            <div className="stars">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star-half-alt" />
            </div>
          </div>
          <div className="swiper-slide box">
            <img src={pic3} alt="" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
              sunt fugiat dolore ipsum id est maxime ad tempore quasi tenetur.
            </p>
            <h3>john deo</h3>
            <div className="stars">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star-half-alt" />
            </div>
          </div>
          <div className="swiper-slide box">
            <img src={pic4} alt="" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
              sunt fugiat dolore ipsum id est maxime ad tempore quasi tenetur.
            </p>
            <h3>john deo</h3>
            <div className="stars">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star-half-alt" />
            </div>
          </div>
        </Slider>
      </div>
    </Wrapper>
  );
};

export default CustomerReview;

const Wrapper = styled.section`
  background: var(--yellow-main);
  .review-slider {
    padding: 1rem;
  }

  .review-slider .box {
    background: #fff;
    border-radius: 0.5rem;
    text-align: center;
    padding: 2rem 1rem;
    outline-offset: -1rem;
    outline: 0.1rem solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.1);
    transition: 0.2s linear;
    width: 90% !important;
    display: flex !important;
    flex-direction: column;
    align-items: center;
  }
  @media screen and (max-width: 768px) {
    .review-slider .box {
      width: 100% !important;
    }
  }
  .review-slider .box:hover {
    outline: 0.2rem solid #130f40;
    outline-offset: 0rem;
    border-radius: 12px;

  .review-slider .box img {
    height: 10rem;
    width: 10rem;
    border-radius: 50%;
  }

  .review-slider .box p {
    padding: 1rem 0;
    line-height: 1;
    color: #666;
    font-size: 1rem;
  }

  .review-slider .box h3 {
    padding-bottom: 0.5rem;
    color: #130f40;
    font-size: 1.2rem;
  }

  .review-slider .box .stars i {
    color: #ff7800;
    font-size: 1.5rem;
  }
`;
