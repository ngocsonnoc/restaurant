import React from "react";
import TopNav from "../components/TopNav/TopNav";
import styled from "styled-components";
const Layout = (props) => {
  return (
    <LayoutWrapper>
      <TopNav />

      {props.children}
    </LayoutWrapper>
  );
};
const LayoutWrapper = styled.div`
  max-width: 100vw;
  overflow-x: hidden;
  box-sizing: border-box;
`;
export default Layout;
