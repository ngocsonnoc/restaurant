import React, { useEffect } from "react";
import styled from "styled-components";
import aboutOv from "../../../assets/image/home/about-frame-img.png";
import aboutImg from "../../../assets/image/home/about-img.jpg";
import AOS from "aos";
const AboutUs = () => {
  return (
    <Wrapper className="about" id="about">
      <div className="image" data-aos="fade-right" />
      <div className="content" data-aos="fade-left">
        <h3>Về chúng tôi</h3>
        <p>
          Món ăn ngon không chỉ đến từ những nguyên liệu đặc biệt mà còn đến từ
          những trải nghiệm ăn uống tuyệt vời. Appetizer luôn muốn hoàn thiện
          tất cả từ những nguyên liệu tốt nhất cho đến những dịch vụ chăm sóc
          khách hàng.
        </p>
        <p>
          Chúng tôi cung cấp dịch vụ đặt trước chỗ ngồi theo nhu cầu thưởng thức
          và trải nghiệm của quý thực khách. Phí đặt chỗ sẽ là miễn phí nhưng để
          đảm bảo cho công tác chuẩn bị quý khách hàng sẽ phải thanh toán trước
          hóa đơn tối thiểu là 50%.
        </p>
        <p>
          Được phục vụ quý khách hàng là niềm vui và sự hãnh diện của chúng tôi
        </p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  font-size: 62.5%;

  .image {
    flex: 1 1 25rem;
    height: 30rem;
    background: url(${aboutOv}), url(${aboutImg}) no-repeat;
    background-size: cover;
    background-position: center;
    background-blend-mode: screen;
  }

  .content {
    flex: 1 1 25rem;
    padding: 2rem;
  }

  .content h3 {
    font-size: 2rem;
    color: #333;
    font-weight: bold;
    text-transform: capitalize;
  }

  .content p {
    font-size: 1rem;
    color: #666;
    padding: 1rem 0;
  }
`;
export default AboutUs;
