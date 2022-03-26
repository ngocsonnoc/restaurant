import React from "react";
import Menu from "../../../components/common/Menu";
import { bestSeller } from "../../../assets/data/bestSeller";
import styled from "styled-components";
const BestSeller = () => {
  return (
    <Wrapper>
      <h1 className="heading">
        {" "}
        <span>Món ăn </span>
        được ưa thích{" "}
      </h1>
      <Menu list={bestSeller} isOrder={false} />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  padding: 20px 10%;
  @media (max-width: 735px) {
    padding: 20px 5%;
  }
`;
export default BestSeller;
