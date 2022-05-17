import React, { useRef } from "react";
import { useContext } from "react";
import styled from "styled-components";
import Footer from "../../components/footer/Footer";
import AboutUs from "./components/AboutUs";
import Banner from "./components/Banner";
import BestSeller from "./components/BestSeller";
import Blog from "./components/Blog";
import ContactUs from "./components/ContactUs";
import CustomerReview from "./components/CustomerReview";
import DeliciousMenu from "./components/DeliciousMenu";
import Feature from "./components/Feature";
import SpecialFood from "./components/SpecialFood";
import { AuthContext } from "../../contexts/AuthContext";
const HomePage = () => {
  const authContext = useContext(AuthContext);

  return (
    <Wrapper>
      <Banner />
      <AboutUs />
      <Feature />
      <SpecialFood />
      <DeliciousMenu />
      <BestSeller />
      <CustomerReview />
      <Blog />
      <ContactUs />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: #fff;
`;
export default HomePage;
