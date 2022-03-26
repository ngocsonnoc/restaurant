import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
const SearchToggle = () => {
  const [toggle, setToggle] = useState(false);
  const searchRef = useRef();
  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (!searchRef.current?.contains(e.target)) setToggle(false);
    });
    return () => window.removeEventListener("mousedown", (e) => {});
  }, []);
  return (
    <SearchWrapper ref={searchRef}>
      <input
        type="text"
        className={`search-input ${toggle ? "toggle" : ""}`}
        placeholder="Start Looking For Something!"
      />
      <span className="search-btn" onClick={() => setToggle(true)}>
        <i className="fas fa-search"></i>
      </span>
    </SearchWrapper>
  );
};

const SearchWrapper = styled.div`
  position: fixed;
  top: 16rem;
  right: -0.3rem;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  background: var(--yellow-main);
  height: 60px;
  border-radius: 50px;
  padding: 10px;

  /* input */
  .search-input {
    outline: none;
    border: none;
    background: none;
    width: 0;
    padding: 0;
    color: #fff;
    float: left;
    font-size: 16px;
    transition: 0.3s;
    line-height: 40px;
  }

  .search-input::placeholder {
    color: #fff;
  }

  /* icon */
  .search-btn {
    color: #fff;
    float: right;
    width: 40px;
    height: 40px;
    border-radius: 50px;
    background: var(--yellow-main);
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    transition: 0.3s;
    cursor: pointer;
    i {
      font-size: 1.3rem;
    }
    &:hover i {
      color: #008080;
    }
  }
  .search-input.toggle,
  .search-input.toggle:focus,
  .search-input.toggle:not(:placeholder-shown) {
    width: 240px;
    padding: 0 6px;
  }

  .search-input.toggle {
    width: 240px;
    padding: 0 6px;
  }

  /* &:hover > .search-btn,
  .search-input:focus + .search-btn,
  .search-input:not(:placeholder-shown) + .search-btn {
    background: #fff;
    color: #cd595a;
  } */
`;
export default SearchToggle;
