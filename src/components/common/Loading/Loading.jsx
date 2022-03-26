import React, { useEffect } from "react";
import styled from "styled-components";
const Loading = (props) => {
  useEffect(() => {
    if (props.isShow) {
      window.document.getElementsByTagName("BODY")[0].style.height = "100vh";
      window.document.getElementsByTagName("BODY")[0].style.overflow = "hidden";
    } else {
      window.document.getElementsByTagName("BODY")[0].style.height = "auto";
      window.document.getElementsByTagName("BODY")[0].style.overflow =
        "visible";
    }
    return () => {
      window.document.getElementsByTagName("BODY")[0].style.height = "auto";
      window.document.getElementsByTagName("BODY")[0].style.overflow =
        "visible";
    };
  }, [props.isShow]);
  return (
    <Wrapper isShow={props.isShow}>
      <div className="loader">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  display: ${({ isShow }) => (isShow ? "block" : "none")};
  .loader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
  }
  /* Creating the dots */
  span {
    height: 25px;
    width: 25px;
    margin-right: 10px;
    border-radius: 50%;
    background-color: var(--yellow-main);
    animation: loading 1s linear infinite;
  }
  /* Creating the loading animation*/
  @keyframes loading {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(15px);
    }
    50% {
      transform: translateX(-15px);
    }
    100% {
      transform: translateX(0);
    }
  }
  span:nth-child(1) {
    animation-delay: 0.1s;
  }
  span:nth-child(2) {
    animation-delay: 0.2s;
  }
  span:nth-child(3) {
    animation-delay: 0.3s;
  }
  span:nth-child(4) {
    animation-delay: 0.4s;
  }
  span:nth-child(5) {
    animation-delay: 0.5s;
  }
`;
export default Loading;
