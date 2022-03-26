import React, { useEffect, useRef, useState } from "react";
import ButtonCartCount from "../../components/common/ButtonCartCount/ButtonCartCount";
import Footer from "../../components/common/Footer";
import Banner, { ScrollMenuOptions } from "./components/Banner";
import Menu from "../../components/common/Menu";
import { menuItemsData } from "../../components/common/Menu/data";
import BookTable from "./components/BookTable/BookTable";
import Common from "../../based/Common";
import styled from "styled-components";
import SearchToggle from "../../components/common/SearchToggle/SearchToggle";
import Loading from "../../components/common/Loading/Loading";

const Order = () => {
  const [token, setToken] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const menuRef = useRef();
  const bookTableRef = useRef();
  const [currentStep, setCurrentStep] = useState(ScrollMenuOptions.LOGIN);
  useEffect(() => {
    setToken(Common.GetToken());
  }, []);
  const handleScrollMenu = (element) => {
    if (element === ScrollMenuOptions.BOOK_TABLE)
      bookTableRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

    if (element === ScrollMenuOptions.ORDER)
      menuRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Wrapper>
      <Banner
        handleScrollMenu={handleScrollMenu}
        token={token}
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
      />
      <hr />
      <BookTable ref={bookTableRef} />
      <Menu list={menuItemsData} ref={menuRef} isOrder={true} />
      <Footer />
      <ButtonCartCount />
      <SearchToggle />
      {isLoading && <Loading isShow={isLoading} />}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 1140px;
  margin: 0px auto;
  width: 95%;
`;
export default Order;
