import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";
import bannerImage from "../../../assets/image/pexels-photo-260922.png";
import Slider from "react-slick";
const Banner = () => {
  const history = useHistory();
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Wrapper>
      <Slider {...settings}>
        <BannerItem bg={bannerImage}>
          <div className="header-container">
            <h1 style={{ fontWeight: "bold" }}> Food Corner </h1>
            <p>INDIAN FOOD AT A CLICK</p>
            <button onClick={() => history.push("/order")}> ORDER NOW </button>
          </div>
        </BannerItem>
        <BannerItem bg={bannerImage}>
          <div className="header-container">
            <h1 style={{ fontWeight: "bold" }}> Food Corner </h1>
            <p>INDIAN FOOD AT A CLICK</p>
            <button onClick={() => history.push("/order")}> ORDER NOW </button>
          </div>
        </BannerItem>
        <BannerItem bg={bannerImage}>
          <div className="header-container">
            <h1 style={{ fontWeight: "bold" }}> Food Corner </h1>
            <p>INDIAN FOOD AT A CLICK</p>
            <button onClick={() => history.push("/order")}> ORDER NOW </button>
          </div>
        </BannerItem>
        <BannerItem bg={bannerImage}>
          <div className="header-container">
            <h1 style={{ fontWeight: "bold" }}> Food Corner </h1>
            <p>INDIAN FOOD AT A CLICK</p>
            <button onClick={() => history.push("/order")}> ORDER NOW </button>
          </div>
        </BannerItem>
      </Slider>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  .banner-slider {
    width: 100%;
    height: 98vh;
    display: flex;
    justify-content: center;
    align-items: left;
    flex-direction: column;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
  }
`;
const BannerItem = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: left;
  flex-direction: column;
  background: ${({ bg }) => (bg ? `URL(${bg})` : "")};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  .header-container {
    width: auto;
    margin-left: 50px;
    position: absolute;
    bottom: 14vh;
    background: rgba(0, 0, 0, 0.3);
    padding: 13px;
  }

  .header-container h1 {
    justify-content: center;
    align-items: center;
    font-size: 90px;
    height: 90px;
    font-weight: 50;
    color: #fff;
  }

  .header-container p {
    padding: 0;
    font-size: 40px;
    font-weight: lighter;
    color: #fff;
  }

  .header-container button {
    color: black;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    justify-content: center;
    background-color: #1877f2;
    height: 50px;
    width: 180px;
    color: white;
    text-decoration: none;
    font-size: 20px;
  }

  .header-container button:hover {
    background-color: #04aa6d;
    cursor: pointer;
    transition: 0.3s ease-in;
  }

  @media only screen and (max-width: 650px) {
    .banner-slider {
      justify-content: center;
      align-items: center;
    }
    .header-container h1,
    .header-container p,
    .header-container button {
      z-index: 1;
    }

    .header-container {
      margin-left: 0px;
      border-radius: 10px;
      padding: 10px;
      width: 78%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      background-color: rgba(0, 0, 0, 0.3);
      color: white;
    }

    .header-container h1 {
      font-size: 40px;
      height: 30px;
      color: white;
    }

    .header-container p {
      font-size: 30px;
      color: white;
    }

    .header-container button {
      background-color: white;
      color: #121619;
      margin-bottom: 30px;
    }

    .header-container button:hover {
      background-color: rgb(225, 225, 225);
      color: #121619;
    }
  }
`;
export default Banner;
