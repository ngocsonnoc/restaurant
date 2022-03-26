import React, { useEffect } from "react";
import styled from "styled-components";
import aboutOv from "../../../assets/image/home/about-frame-img.png";
import aboutImg from "../../../assets/image/home/about-img.jpg";
import AOS from "aos";
const AboutUs = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Wrapper className="about" id="about">
      <div className="image" data-aos="fade-right" />
      <div className="content" data-aos="fade-left">
        <h3>a word about us</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
          accusantium eligendi a totam consequatur! Quis minus amet iusto iure
          repudiandae, incidunt enim fugiat ipsa? Iure quam et quo quos
          quisquam!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint totam
          pariatur saepe sit nostrum consequuntur, praesentium accusamus harum
          voluptate soluta.
        </p>
        <a href="#">
          <button className="btn">learn more</button>
        </a>
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
