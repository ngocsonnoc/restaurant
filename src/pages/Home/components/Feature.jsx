import React from "react";
import styled from "styled-components";
import feature1 from "../../../assets/image/home/feature-img-1.png";
import feature2 from "../../../assets/image/home/feature-img-2.png";
import feature3 from "../../../assets/image/home/feature-img-3.png";
const Feature = () => {
  return (
    <Wrapper className="features " id="features">
      <div className="box-container container">
        <div className="box">
          <img src={feature1} alt="" />
          <h3>Tươi sống và chất lượng</h3>
          <p>
            Bảo đảm 100% sản phẩm mà chúng tôi cung cấp đều tươi mới và có
            nguồn gốc rõ ràng!
          </p>
        </div>
        <div className="box">
          <img src={feature2} alt="" />
          <h3>Miễn phí giữ chỗ</h3>
          <p>Đặt trước chỗ ngồi, bàn tiệc và không tính phụ phí!</p>
        </div>
        <div className="box">
          <img src={feature3} alt="" />
          <h3>Thanh toán dễ dàng</h3>
          <p>Thanh toán dễ dàng với ví điện tử!</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Feature;

const Wrapper = styled.div`
  background: var(--yellow-main);
  padding: 30px 0;

  .box-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    gap: 1.5rem;
  }

  .box-container .box {
    padding: 2rem 1rem;
    background: #fff;
    outline: 0.1rem solid rgba(0, 0, 0, 0.1);
    outline-offset: -1rem;
    text-align: center;
    box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }

  .box-container .box:hover {
    outline: 0.2rem solid #130f40;
    outline-offset: 0rem;
  }

  .box-container .box img {
    margin: 1rem 0;
    height: 10rem;
  }

  .box-container .box h3 {
    font-size: 1.5rem;
    line-height: 1.2;
    color: var(--black);
  }

  .box-container .box p {
    font-size: 1rem;
    line-height: 1.2;
    color: #666;
    padding: 1rem 0;
  }
`;
