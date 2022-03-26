import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import Common from "../../based/Common";

const TopNav = (props) => {
  const [isActiveMobileNav, setIsActiveMobileNav] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const location = useLocation();
  const [isOrderPage, setIsOrderPage] = useState(false);
  const [isDesktop, setIsDesktop] = useState(Common.isDesktop());
  useEffect(() => {
    if (window.innerWidth > 960) setIsActiveMobileNav(false);
  }, []);
  useEffect(() => {
    if (
      location.pathname.includes("/order") ||
      location.pathname.includes("/cart")
    )
      setIsOrderPage(true);
    else setIsOrderPage(false);
    setIsActiveMobileNav(false);
  }, [location.pathname]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsDesktop(Common.isDesktop());
    });
    return () => window.removeEventListener("resize", (e) => {});
  }, []);
  const handleScroll = () => {
    if (window.scrollY > 90 && Common.isDesktop()) setIsScroll(true);
    else setIsScroll(false);
  };
  return (
    <Wrapper>
      <div className="py-1 bg-black top">
        <div className="container">
          <div className="row no-gutters d-flex align-items-start align-items-center px-md-0">
            <div className="col-lg-12 d-block">
              <div className="row d-flex">
                <div className="col-md pr-4 d-flex topper align-items-center">
                  <div className="icon mr-2 d-flex justify-content-center align-items-center">
                    <span className="icon-phone2" />
                  </div>
                  <span className="text">+ 1235 2355 98</span>
                </div>
                <div className="col-md pr-4 d-flex topper align-items-center">
                  <div className="icon mr-2 d-flex justify-content-center align-items-center">
                    <span className="icon-paper-plane" />
                  </div>
                  <span className="text">youremail@email.com</span>
                </div>
                <div className="col-md-5 pr-4 d-flex topper align-items-center text-lg-right justify-content-end">
                  <p className="mb-0 register-link">
                    <span>Open hours:</span> <span>Monday - Sunday</span>{" "}
                    <span>8:00AM - 9:00PM</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav
        className={`navbar navbar-expand-lg  ftco_navbar bg-dark ${
          isScroll ? "navbar-dark" : ""
        } ftco-navbar-light  ${isScroll ? "navbar-sticky" : ""}`}
        id="ftco-navbar"
      >
        <div className="container">
          <a
            className="navbar-brand"
            href="/"
            style={{
              color: isDesktop
                ? !isScroll && !isOrderPage
                  ? "#fff"
                  : !isScroll && isOrderPage
                  ? "#000"
                  : "#fff"
                : "#fff",
            }}
          >
            Appetizer
          </a>
          <button
            className="navbar-toggler collapsed "
            type="button"
            onClick={() => setIsActiveMobileNav(!isActiveMobileNav)}
          >
            <i className="fas fa-bars"></i> Menu
          </button>
          <div
            className={`navbar-collapse collapse justify-content-end ${
              isActiveMobileNav ? "show" : ""
            }`}
            id="ftco-nav"
            style={{}}
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink
                  color={
                    isDesktop
                      ? !isScroll && !isOrderPage
                        ? "#fff"
                        : !isScroll && isOrderPage
                        ? "#000"
                        : "#fff"
                      : "#fff"
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  color={
                    isDesktop
                      ? !isScroll && !isOrderPage
                        ? "#fff"
                        : !isScroll && isOrderPage
                        ? "#000"
                        : "#fff"
                      : "#fff"
                  }
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item active">
                <NavLink
                  color={
                    isDesktop
                      ? !isScroll && !isOrderPage
                        ? "#fff"
                        : !isScroll && isOrderPage
                        ? "#000"
                        : "#fff"
                      : "#fff"
                  }
                  to="/menu"
                >
                  Menu
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  color={
                    isDesktop
                      ? !isScroll && !isOrderPage
                        ? "#fff"
                        : !isScroll && isOrderPage
                        ? "#000"
                        : "#fff"
                      : "#fff"
                  }
                  to="/blog"
                >
                  Blog
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  color={
                    isDesktop
                      ? !isScroll && !isOrderPage
                        ? "#fff"
                        : !isScroll && isOrderPage
                        ? "#000"
                        : "#fff"
                      : "#fff"
                  }
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
              <li className="nav-item cta">
                <SpecialNavLink to="/order"> Book a table</SpecialNavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  .top {
    background: transparent !important;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 3;
    background: rgba(0, 0, 0, 0.3) !important;
    color: rgba(255, 255, 255, 0.5);
    font-size: 14px;
  }
  .ftco-navbar-light {
    background: transparent !important;
    position: absolute;
    top: 50px;
    left: 0;
    right: 0;
    z-index: 3;
    padding: 0;
  }
  .ftco-navbar-dark {
  }
  .ftco-navbar-light .navbar-brand {
    font-size: 2rem;
  }
  .ftco-navbar-light.navbar-dark .navbar-brand {
  }

  .navbar-brand {
    font-weight: 900;
    font-size: 20px;
  }
  .navbar-brand {
    display: inline-block;
    padding-top: 0.3125rem;
    padding-bottom: 0.3125rem;
    margin-right: 1rem;
    font-size: 1.25rem;
    line-height: inherit;
    white-space: nowrap;
  }
  .ftco-navbar-light .navbar-toggler {
    border: none;
    color: rgba(255, 255, 255, 0.5) !important;
    cursor: pointer;
    padding-right: 0;
    text-transform: uppercase;
    font-size: 16px;
    letter-spacing: 0.1em;
  }
  .navbar-dark .navbar-toggler {
    color: rgba(255, 255, 255, 0.5);
    border-color: rgba(255, 255, 255, 0.1);
  }
  .oi {
    position: relative;
    top: 1px;
    display: inline-block;
    speak: none;
    font-family: Icons;
    font-style: normal;
    font-weight: 400;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .navbar-collapse {
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .navbar-nav {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: row;
    -ms-flex-direction: row;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    transition: all 0.5s ease;
  }
  .navbar.navbar-sticky {
    top: 0;
    background: rgba(0, 0, 0, 0.9) !important;
    position: -webkit-sticky;
    position: fixed;
    left: 0;
    height: 80px;
  }
  .navbar-dark {
    color: #fff !important;
  }
  .navbar-light {
    color: #000 !important;
  }
  @media (min-width: 992px) {
    .navbar-expand-lg .navbar-toggler {
      display: none;
    }
    .navbar-expand-lg .navbar-collapse {
      display: -webkit-box !important;
      display: -ms-flexbox !important;
      display: flex !important;
      -ms-flex-preferred-size: auto;
      flex-basis: auto;
    }
  }
  @media (max-width: 991.98px) {
    .top {
      display: none;
    }
    .ftco-navbar-light {
      top: 0px;
    }
    .ftco-navbar-light {
      background: #000 !important;
      position: relative;
      top: 0;
      padding: 10px 15px;
    }
    .navbar-nav {
      -ms-flex-direction: column;
      flex-direction: column;
    }
  }
`;
const NavLink = styled(Link)`
  color: ${({ color }) => (color ? color : "#fff")};
  text-decoration: none;
  display: block;
  padding: 0.5rem 1rem;
  text-decoration: none;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out;
  font-weight: bold;
  &:hover {
    color: var(--yellow-main);
  }
`;
const SpecialNavLink = styled(Link)`
  background: var(--yellow-main);
  color: #fff;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  border-radius: 5px;
  text-decoration: none;
  display: block;
  padding: 0.5rem 1rem;
  text-decoration: none;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out;
`;
export default TopNav;
