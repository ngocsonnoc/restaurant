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
import ProductServices from "../../based/services/ProductServices";
import { INIT_PAGING } from "../../based/Constants";
import { connect } from "react-redux";

const Order = ({ tableSelected }) => {
  const [token, setToken] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const menuRef = useRef();
  const bookTableRef = useRef();
  const [currentStep, setCurrentStep] = useState(ScrollMenuOptions.LOGIN);
  const [paging, setPaging] = useState({ ...INIT_PAGING, pageSize: 10 });
  const [hasMore, setHasMore] = useState(true);
  const [listDatas, setListDatas] = useState([]);
  useEffect(() => {
    setToken(Common.GetToken());
  }, []);
  console.log("tableSelected>>>", tableSelected);
  useEffect(() => {
    getDatas(paging);
  }, []);
  const getDatas = async (paging) => {
    setIsLoading(true);
    let [err, data] = await ProductServices.GetProductByPaging(paging);
    if (!err && data && data.result.length > 0) {
      setIsLoading(false);
      setListDatas([...data.result]);
      setPaging(data.paging);
    } else {
      setHasMore(false);
      setIsLoading(false);
      setListDatas([]);
    }
  };

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
      <div ref={bookTableRef}>
        <BookTable handleScrollMenu={handleScrollMenu} />
      </div>

      <Menu
        list={listDatas}
        ref={menuRef}
        isOrder={tableSelected?.tableId !== ""}
        viewMore={true}
      />
      <Footer />
      {isLoading && <Loading isShow={isLoading} />}
    </Wrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    tableSelected: state.table,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Order);
const Wrapper = styled.div`
  max-width: 1140px;
  margin: 0px auto;
  width: 95%;
`;
