import React from "react";
import styled from "styled-components";
const Footer = () => {
  return (
    <Wrapper>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-3 item">
              <h3>Services</h3>
              <ul>
                <li>
                  <a href="#">Đặt tiệc lớn, nhỏ</a>
                </li>
                <li>
                  <a href="#">Đặt giữ món, giữ chỗ</a>
                </li>
                <li>
                  <a href="#">Dịch vụ tiệc, sự kiện</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-6 col-md-3 item">
              <h3>Thông tin</h3>
              <ul>
                <li>
                  <a href="#">Company</a>
                </li>
                <li>
                  <a href="#">Team</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 item text">
              <h3>Appetizer</h3>
              <p>
                Praesent sed lobortis mi. Suspendisse vel placerat ligula.
                Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis
                tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel
                in justo.
              </p>
            </div>
            <div className="col item social">
              <a href="#">
                <i class="fab fa-facebook"></i>
              </a>
              <a href="#">
                <i class="fab fa-instagram-square"></i>
              </a>
              <a href="#">
                <i class="fab fa-twitter-square"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

export default Footer;
const Wrapper = styled.div`
  padding: 1px 0;
  color: #f0f9ff;
  background-color: #282d32;

  h3 {
    margin-top: 0;
    margin-bottom: 12px;
    font-weight: bold;
    font-size: 16px;
  }

  ul {
    padding: 0;
    list-style: none;
    line-height: 1.6;
    font-size: 14px;
    margin-bottom: 0;
  }

  ul a {
    color: inherit;
    text-decoration: none;
    opacity: 0.6;
  }

  ul a:hover {
    opacity: 0.8;
  }

  @media (max-width: 767px) {
    .item:not(.social) {
      text-align: center;
      padding-bottom: 20px;
    }
  }

  .item.text {
    margin-bottom: 36px;
  }

  @media (max-width: 767px) {
    .item.text {
      margin-bottom: 0;
    }
  }

  .item.text p {
    opacity: 0.6;
    margin-bottom: 0;
  }

  .item.social {
    text-align: center;
  }

  @media (max-width: 991px) {
    .item.social {
      text-align: center;
      margin-top: 20px;
    }
  }

  .item.social > a {
    font-size: 20px;
    width: 36px;
    height: 36px;
    line-height: 36px;
    display: inline-block;
    text-align: center;
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.4);
    margin: 0 8px;
    color: #fff;
    opacity: 0.75;
  }

  .item.social > a:hover {
    opacity: 0.9;
  }

  .copyright {
    text-align: center;
    padding-top: 24px;
    opacity: 0.3;
    font-size: 13px;
    margin-bottom: 0;
  }
`;
