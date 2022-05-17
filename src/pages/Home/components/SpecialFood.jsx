import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import Common from "../../../based/Common";
const SpecialFood = () => {
  const [slideToShow, setSlideToShow] = useState(3);
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
  }, []);
  return (
    <Wrapper>
      <h1 className="heading">
        {" "}
        <span>Sản phẩm </span>
        đặc biệt
      </h1>
      <div className="list-special-food container">
        <Slider {...settings}>
          <div class="card-item">
            <img
              src="https://bizweb.dktcdn.net/thumb/large/100/227/495/products/phan-biet-cua-hoang-de-va-cua-huynh-de.png?v=1615257849647"
              alt=""
              width="300"
            />
            <div class="content-box">
              <h4 class="name">Cua hoàng đế size khủng 5kg-7kg</h4>
              <p className="product-desc">
                Cua Hoàng Đế King Crab là loại cua được đánh giá cao về mặt giá
                trị dinh dưỡng, có vị ngọt giòn, thơm ngon, thịt chắc và rất
                “hiếm hàng”. Đương nhiên giá cua Hoàng Đế - King Crab cũng không
                hề rẻ nhưng luôn là lựa chọn số 1 cho các bữa ăn thịnh soạn của
                giới thượng lưu.
              </p>
              <div className="bottom-content">
                <p>Ngày về hàng: 25/5/2022</p>
                <p>Số lượng: 10 - Đã đặt trước: 4</p>
                <div class="btn-order">
                  <h2 class="price">1.890K</h2>
                  <button>Order Now</button>
                </div>
              </div>
            </div>
          </div>
          <div class="card-item">
            <img
              src="https://bizweb.dktcdn.net/thumb/large/100/227/495/products/phan-biet-cua-hoang-de-va-cua-huynh-de.png?v=1615257849647"
              alt=""
              width="300"
            />
            <div class="content-box">
              <h4 class="name">Cua hoàng đế size khủng 5kg-7kg</h4>
              <p className="product-desc">
                Cua Hoàng Đế King Crab là loại cua được đánh giá cao về mặt giá
                trị dinh dưỡng, có vị ngọt giòn, thơm ngon, thịt chắc và rất
                “hiếm hàng”. Đương nhiên giá cua Hoàng Đế - King Crab cũng không
                hề rẻ nhưng luôn là lựa chọn số 1 cho các bữa ăn thịnh soạn của
                giới thượng lưu.
              </p>
              <div className="bottom-content">
                <p>Ngày về hàng: 25/5/2022</p>
                <p>Số lượng: 10 - Đã đặt trước: 4</p>
                <div class="btn-order">
                  <h2 class="price">1.890K</h2>
                  <button>Order Now</button>
                </div>
              </div>
            </div>
          </div>
          <div class="card-item">
            <img
              src="https://bizweb.dktcdn.net/thumb/large/100/227/495/products/phan-biet-cua-hoang-de-va-cua-huynh-de.png?v=1615257849647"
              alt=""
              width="300"
            />
            <div class="content-box">
              <h4 class="name">Cua hoàng đế size khủng 5kg-7kg</h4>
              <p className="product-desc">
                Cua Hoàng Đế King Crab là loại cua được đánh giá cao về mặt giá
                trị dinh dưỡng, có vị ngọt giòn, thơm ngon, thịt chắc và rất
                “hiếm hàng”. Đương nhiên giá cua Hoàng Đế - King Crab cũng không
                hề rẻ nhưng luôn là lựa chọn số 1 cho các bữa ăn thịnh soạn của
                giới thượng lưu.
              </p>
              <div className="bottom-content">
                <p>Ngày về hàng: 25/5/2022</p>
                <p>Số lượng: 10 - Đã đặt trước: 4</p>
                <div class="btn-order">
                  <h2 class="price">1.890K</h2>
                  <button>Order Now</button>
                </div>
              </div>
            </div>
          </div>
          <div class="card-item">
            <img
              src="https://haisanphuongnam.com/asset/upload/image/medium/tom-hum-bong_(1).jpg?v=20190410"
              alt=""
              width="300"
            />
            <div class="content-box">
              <h4 class="name">Tôm hùm bông Việt Nam</h4>
              <p className="product-desc">
                Cua Hoàng Đế King Crab là loại cua được đánh giá cao về mặt giá
                trị dinh dưỡng, có vị ngọt giòn, thơm ngon, thịt chắc và rất
                “hiếm hàng”. Đương nhiên giá cua Hoàng Đế - King Crab cũng không
                hề rẻ nhưng luôn là lựa chọn số 1 cho các bữa ăn thịnh soạn của
                giới thượng lưu.
              </p>
              <div className="bottom-content">
                <p>Ngày về hàng: 25/5/2022</p>
                <p>Số lượng: 10 - Đã đặt trước: 4</p>
                <div class="btn-order">
                  <h2 class="price">1.890K</h2>
                  <button>Order Now</button>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </Wrapper>
  );
};

export default SpecialFood;
const Wrapper = styled.div`
  padding-top: 30px;
  .card-item {
    position: relative;
    width: 90% !important;
    height: 440px;
    border-radius: 20px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    background: #26242e;
    overflow: hidden;
    margin: 5% 2%;
    img {
      z-index: 1;
      width: 100%;
    }
    &::before {
      content: "";
      position: absolute;
      top: -50px;
      left: 50px;
      width: 300px;
      height: 300px;
      opacity: 1;
    }
  }
  .content-box {
    position: absolute;
    z-index: 1;
    bottom: 0px;
    left: 0;
    right: 0;
    width: 100%;
    height: 275px;
    color: #fff;
    padding: 0 7px;
    border-radius: 10px 10px 15px 15px;
    backdrop-filter: blur(4px);
    background: rgba(255, 255, 255, 0.3);
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-evenly;
    transition: all 0.5s ease;
  }

  .content-box p {
    color: var(--yellow-main);
    font-size: 13px;
  }
  .bottom-content {
    z-index: 2;
  }
  p.product-desc {
    height: 0;
    overflow: hidden;
    transition: all 0.5s ease;
    color: #383838;
    font-weight: 600;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 7;
    -webkit-box-orient: vertical;
  }
  .content-box {
    cursor: pointer;
    &:hover {
      height: 360px;
      .product-desc {
        height: 140px !important;
      }
    }
  }

  .btn-order {
    width: 240px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    h2 {
      font-size: 1.5rem;
      margin-bottom: 0;
    }
  }

  .btn-order button {
    width: 130px;
    height: 36px;
    font-size: 15px;
    outline: none;
    border: none;
    color: #fff;
    font-weight: bold;
    background: #f7b22c;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
    border-radius: 7px;
  }
`;
