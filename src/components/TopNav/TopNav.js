import React, { useContext, useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import styled from "styled-components";
import { selectCartItemsCount } from "../../redux/cart/cartSelector";
import { AuthContext } from "../../contexts/AuthContext";
import Common from "../../based/Common";
import AccountServices from "../../based/services/AccountServices";
import UserModel from "../../models/UserModel";
const TopNav = ({ cartCount }) => {
  const authContext = useContext(AuthContext);
  const [isActiveMobileNav, setIsActiveMobileNav] = useState(false);
  const [userDetail, setUserDetail] = useState(new UserModel());
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (window.innerWidth > 960) setIsActiveMobileNav(false);
  }, []);

  useEffect(() => {
    getUser();
  }, [location.pathname]);

  const getUser = async () => {
    setIsLoading(true);
    let [err, data] = await AccountServices.GetUser();
    if (!err && data) {
      setIsLoading(false);
      setUserDetail(data.result);
    } else {
      setIsLoading(false);
      setUserDetail(new UserModel());
    }
  };
  const token = Common.GetToken();
  console.log("token", token);
  return (
    <Wrapper>
      <Link
        to={{ pathname: "/", state: { prevPath: location.pathname } }}
        className="logo"
      >
        {" "}
        <i className="fas fa-shopping-basket" /> Appetizer{" "}
      </Link>
      <nav className={isActiveMobileNav ? "navbar active" : "navbar"}>
        <Link to={{ pathname: "/", state: { prevPath: location.pathname } }}>
          Trang chủ
        </Link>
        <Link
          to={{ pathname: "/blog", state: { prevPath: location.pathname } }}
        >
          Bài viết
        </Link>
      </nav>
      <div className="icons">
        <div
          className="fas fa-bars"
          id="menu-btn"
          onClick={() => setIsActiveMobileNav(!isActiveMobileNav)}
        ></div>
        <Link
          to={{ pathname: "/order", state: { prevPath: location.pathname } }}
        >
          <div className="fas fa-store-alt"></div>
        </Link>
        <Link
          to={{ pathname: "/cart", state: { prevPath: location.pathname } }}
          className="cart-button"
        >
          <span className="badge">{cartCount >= 100 ? "99+" : cartCount}</span>
          <div className="fas fa-shopping-cart"></div>
        </Link>
        {authContext.isLogin && !!token && token !== "undefined" ? (
          <Link
            to={{
              pathname: "/profile",
              state: { prevPath: location.pathname },
            }}
          >
            <div className="topnav-avatar">
              {userDetail.avatar !== "" ? (
                <img src={userDetail.avatar} alt={userDetail.lastName} />
              ) : (
                <p className="topnav-avatar-character">
                  {authContext.lastName.charAt[0]}
                </p>
              )}
            </div>
          </Link>
        ) : (
          <Link
            to={{ pathname: "/login", state: { prevPath: location.pathname } }}
          >
            <div className="fas fa-user" id="login-btn" />
          </Link>
        )}
      </div>
    </Wrapper>
  );
};

const mapStateToProps = createStructuredSelector({
  cartCount: selectCartItemsCount,
});

export default connect(mapStateToProps)(TopNav);

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 9%;
  background: #fff;
  box-shadow: var(--box-shadow);

  .logo {
    font-size: 2rem;
    font-weight: bolder;
    color: var(--black);
    text-decoration: none;
  }

  .logo i {
    color: var(--orange);
  }

  .navbar a {
    font-size: 1.2rem;
    margin: 0 1rem;
    color: var(--black);
    text-decoration: none;
  }

  .navbar a:hover {
    color: var(--orange);
  }

  .icons {
    display: flex;
    div {
      height: 4.5rem;
      width: 4.5rem;
      line-height: 4.5rem;
      border-radius: 0.5rem;
      background: #eee;
      color: var(--black);
      font-size: 2rem;
      margin-left: 0.3rem;
      cursor: pointer;
      text-align: center;
    }
  }
  .topnav-avatar {
    display: flex;
    overflow: hidden;
    img {
      width: 100%;
      max-height: 100%;
      border-radius: 50%;
      object-fit: cover;
    }
  }
  .icons div:hover {
    background: var(--orange);
    color: #fff;
  }

  #menu-btn {
    display: none;
  }

  .cart-button {
    position: relative;
    .badge {
      position: absolute;
      top: -3px;
      right: -5px;
      color: red;
      font-size: 1.2rem;
      z-index: 2;
    }
  }

  /* media queries  */

  @media (max-width: 991px) {
    .header {
      padding: 2rem;
    }
  }

  @media (max-width: 768px) {
    #menu-btn {
      display: inline-block;
    }

    .search-form {
      width: 90%;
    }
    .icons {
      display: flex;
      justify-content: flex-end;
    }
    .navbar {
      position: absolute;
      top: 110%;
      right: -110%;
      width: 20rem;
      box-shadow: var(--box-shadow);
      border-radius: 0.5rem;
      background: #fff;
      transition: 0.4s linear;
    }
    .icons div {
      height: 3.5rem;
      width: 3.5rem;
      line-height: 3.5rem;
      border-radius: 0.5rem;
      background: #eee;
      color: var(--black);
      font-size: 1.5rem;
      margin-left: 0.3rem;
      cursor: pointer;
      text-align: center;
    }
    .logo i {
      display: none;
    }

    .navbar.active {
      right: 2rem;
      transition: 0.4s linear;
    }

    .navbar a {
      font-size: 1.5rem;
      margin: 1rem 1.5rem;
      display: block;
    }
  }

  @media (max-width: 450px) {
    .icons div {
      height: 2.5rem;
      width: 2.5rem;
      line-height: 2.5rem;
      border-radius: 0.5rem;
      background: #eee;
      color: var(--black);
      font-size: 1.5rem;
      margin-left: 0.3rem;
      cursor: pointer;
      text-align: center;
    }
  }
`;
