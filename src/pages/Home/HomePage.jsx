import React, { useRef } from "react";
import styled from "styled-components";
import AboutUs from "./components/AboutUs";
import Banner from "./components/Banner";
import BestSeller from "./components/BestSeller";
import DeliciousMenu from "./components/DeliciousMenu";
const HomePage = () => {
  const bannerRef = useRef();
  const aboutRef = useRef();
  return (
    <Wrapper>
      <Banner ref={bannerRef} />
      <AboutUs ref={aboutRef} />
      <DeliciousMenu />
      <BestSeller />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: #fff;
`;
export default HomePage;
