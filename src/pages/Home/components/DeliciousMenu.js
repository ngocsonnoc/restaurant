import React, { useState } from "react";
import styled from "styled-components";
import defaultImg from "../../../assets/image/home/img2.jpg";
import Common from "../../../based/Common";
import { PartTime } from "../../../based/Constants";

const DeliciousMenu = () => {
  const [currentTab, setCurrentTab] = useState(Common.GetPartTime());
  return (
    <Wrapper>
      <h1 className="heading">
        {" "}
        Các món ăn<span> nổi bật</span>{" "}
      </h1>
      <ul className="list" data-aos="fade-down">
        <li className="btn" data-src="../../../assets/image/home/menu1.jpg">
          Món mặn
        </li>
        <li
          className="btn active"
          data-src="../../../assets/image/home/menu2.jpg"
        >
          Món ngọt
        </li>
        <li className="btn" data-src="../../../assets/image/home/menu3.jpg">
          Đặc biệt
        </li>
        <li className="btn" data-src="../../../assets/image/home/menu4.jpg">
          Đồ uống
        </li>
      </ul>
      <div className="row" data-aos="fade-right">
        <div className="image" data-aos="fade-left">
          <img src={defaultImg} id="menu-img" alt="" />
        </div>
        <div className="content">
          <div className="info">
            <h3>
              {" "}
              <span>01.</span> we serve best food in the country{" "}
            </h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum,
              vero?
            </p>
          </div>
          <div className="info">
            <h3>
              {" "}
              <span>02.</span> we serve best food in the country{" "}
            </h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum,
              vero?
            </p>
          </div>
          <div className="info">
            <h3>
              {" "}
              <span>03.</span> we serve best food in the country{" "}
            </h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum,
              vero?
            </p>
          </div>
          <div className="info">
            <h3>
              {" "}
              <span>04.</span> we serve best food in the country{" "}
            </h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum,
              vero?
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  background: var(--yellow-main);
  .list {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    list-style: none;
    padding: 1rem 0;
    margin: 0.4rem 0;
    border-top: 0.3rem dashed rgba(0, 0, 0, 0.2);
    border-bottom: 0.3rem dashed rgba(0, 0, 0, 0.2);
  }
  .heading {
    text-transform: capitalize;
    color: #fff;
    span {
      color: #000;
    }
  }
  .list .btn {
    margin: 1rem;
    color: #fff;
    border: 0.2rem solid #fff;
    &:hover {
      background: #000 !important;
      border: 0.2rem solid #000;
    }
  }

  .list .btn.active,
  .list .btn:hover {
    background: var(--yellow);
    color: #fff;
  }

  .row {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }

  .row .image {
    margin: 2rem;
    padding: 2rem;
    flex: 1 1 25rem;
    border-radius: 1rem;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  }

  .row .image img {
    width: 100%;
    object-fit: cover;
    border-radius: 1rem;
  }

  .row .content {
    flex: 1 1 25rem;
  }

  .row .content .info {
    padding: 0.3rem 0;
  }

  .row .content .info h3 {
    display: flex;
    align-items: center;
    font-size: 1.4rem;
    color: #333;
    font-weight: bold;
  }

  .row .content .info h3 span {
    padding-right: 1rem;
    color: #fff;
  }

  .row .content .info p {
    padding: 0.3rem 0;
    padding-left: 4.5rem;
    font-size: 0.8rem;
    color: #fff;
  }
`;
export default DeliciousMenu;
