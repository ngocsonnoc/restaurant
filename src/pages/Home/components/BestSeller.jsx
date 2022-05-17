import React, { useEffect, useState } from "react";
import Menu from "../../../components/common/Menu";
import styled from "styled-components";
import { INIT_PAGING } from "../../../based/Constants";
import ProductServices from "../../../based/services/ProductServices";
import Loading from "../../../components/common/Loading/Loading";
import { connect } from "react-redux";
const BestSeller = ({ tableSelected }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [listFavoriteFood, setListFavoriteFood] = useState([]);
  const [paging, setPaging] = useState({ ...INIT_PAGING, pageSize: 6 });

  useEffect(() => {
    getDatas(paging);
  }, []);
  const getDatas = async (paging) => {
    setIsLoading(true);
    let [err, data] = await ProductServices.GetProductByPaging(paging);
    if (!err && data && data.result) {
      setIsLoading(false);
      setListFavoriteFood(data.result);
    } else {
      setIsLoading(false);
      setListFavoriteFood([]);
    }
  };
  return (
    <Wrapper>
      <h1 className="heading">
        {" "}
        <span>Món ăn </span>
        được ưa thích{" "}
      </h1>
      <Menu
        list={listFavoriteFood}
        isOrder={tableSelected.tableId !== "" ? true : false}
      />
      {isLoading && <Loading isShow={isLoading} />}
    </Wrapper>
  );
};
const mapStateToProps = (state, props) => {
  return {
    tableSelected: state.table,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(BestSeller);
const Wrapper = styled.div`
  padding: 23px 10px 50px 10px;
  @media (max-width: 735px) {
    padding: 20px 5%;
  }
`;
