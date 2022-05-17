import React from "react";
import styled from "styled-components";
import BlogBanner from "./components/BlogBanner";
import InstagramImage from "./components/InstagramImage";
import LeftMainSection from "./components/LeftMainSection";
import RightMainSection from "./components/RightMainSection";

const Blog = () => {
  return (
    <Wrapper>
      <BlogBanner />
      <section className="main-content">
        <div className="container-xl">
          <div className="row gy-4">
            <LeftMainSection />
            <RightMainSection />
          </div>
        </div>
      </section>
      <InstagramImage />
    </Wrapper>
  );
};

export default Blog;

const Wrapper = styled.div`
  img {
    max-width: 100%;
    height: auto;
  }
  img,
  svg {
    vertical-align: middle;
  }
  a {
    color: #ad1deb;
    outline: 0;
    text-decoration: none;
    transition: all 0.3s ease-in-out;
  }
  button {
    transition: all 0.3s ease-in-out;
  }

  button:focus {
    outline: none;
    box-shadow: none !important;
  }

  .icon-button {
    color: #fff;
    border: 0;
    border-radius: 50%;
    background-color: #6e72fc;
    background-image: linear-gradient(315deg, #6e72fc 0%, #ad1deb 74%);
    background-size: auto 200%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 37px;
    line-height: 39px;
    text-align: center;
    vertical-align: middle;
    width: 37px;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.15);
    transition: all 0.2s ease-in-out;
    outline: none;
  }

  .icon-button:hover {
    background-position: bottom center;
  }

  .social-icons a {
    font-size: 16px;
    color: #203656;
  }

  .social-icons a:hover {
    color: #ad1deb;
  }

  .social-icons li:not(:last-child) {
    margin-right: 1rem;
  }
  section {
    position: relative;
  }

  .hero {
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    height: 1040px;
    width: 100%;
  }

  .hero::after {
    content: "";
    background: #203656;
    display: block;
    left: 0;
    opacity: 0.8;
    top: 0;
    height: 100%;
    position: absolute;
    width: 100%;
  }

  .post .category-badge {
    color: #fff;
    font-size: 13px;
    border-radius: 25px;
    display: inline-block;
    padding: 6px 11px;
    line-height: 1;
    left: 20px;
    top: 20px;
    z-index: 1;
    background-color: #6e72fc;
    background-image: linear-gradient(315deg, #6e72fc 0%, #ad1deb 74%);
    background-size: 200% auto;
    transition: all 0.3s ease-in-out;
  }

  .post .category-badge:hover {
    background-position: right center;
  }

  .post .thumb {
    position: relative;
  }

  .post .thumb.rounded .inner {
    border-radius: 10px;
    overflow: hidden;
    img {
      width: 100%;
    }
  }

  .post .thumb img {
    transform: scale(1);
    transition: all 0.3s ease-in-out;
  }

  .post .thumb:hover img {
    transform: scale(1.07);
  }

  .post .post-title a {
    color: #203656;
  }

  .post .post-title a:hover {
    color: #ad1deb;
  }

  .post .meta {
    font-size: 14px;
    color: #9faabb;
  }

  .post .meta a {
    color: #9faabb;
    font-weight: 400;
  }

  .post .meta a:hover {
    color: #570f75;
  }

  .post .meta i {
    vertical-align: middle;
  }

  .post .meta li:last-child::after {
    content: "";
    display: none;
  }

  .post .meta li::after {
    content: "";
    display: inline-block;
    background-color: #ad1deb;
    border-radius: 50%;
    margin-left: 1rem;
    height: 3px;
    vertical-align: middle;
    position: relative;
    top: -1px;
    width: 3px;
  }

  .post .meta li:not(:last-child) {
    margin-right: 0.8rem;
  }

  .featured-post-lg {
    position: relative;
  }

  .featured-post-lg:hover .thumb .inner {
    transform: scale(1.05);
  }

  .featured-post-lg .thumb {
    position: relative;
    overflow: hidden;
    box-shadow: 0 8px 20px rgba(32, 54, 86, 0.3);
  }

  .featured-post-lg .thumb::after {
    content: "";
    background: #203656;
    display: block;
    height: 100%;
    left: 0;
    opacity: 0.6;
    top: 0;
    position: absolute;
    width: 100%;
  }

  .featured-post-lg .details {
    bottom: 50px;
    left: 50px;
    right: 50px;
    position: absolute;
    z-index: 1;
  }

  .featured-post-lg .post-title {
    font-size: 32px;
  }

  .featured-post-lg .post-title a {
    color: #fff;
  }

  .featured-post-lg .thumb .inner {
    background-size: cover;
    background-position: center center;
    height: 533px;
    transition: all 0.3s ease-in-out;
    transform: scale(1);
  }

  .featured-post-lg .post-title a:hover {
    color: #e098ff;
  }

  .featured-post-lg .meta {
    color: rgba(255, 255, 255, 0.6);
  }

  .featured-post-lg .meta li::after {
    content: "";
    background: rgba(255, 255, 255, 0.6);
  }

  .featured-post-lg .meta li a {
    color: rgba(255, 255, 255, 0.6);
  }

  /* ******************* hero right side ************** */

  .rounded {
    border-radius: 10px !important;
  }

  .bordered {
    border: 1px solid #ebebeb;
  }

  .post-tabs {
    padding: 30px;
  }

  .post-tabs .tab-content {
    margin-top: 30px;
  }

  .nav-tabs {
    border-bottom: 0;
  }

  .tab-content {
    position: relative;
  }

  .tab-pane {
    opacity: 1;
    transition: all 0.3s ease-in-out;
  }

  .tab-pane.loading {
    opacity: 0.3;
  }

  .lds-dual-ring {
    display: inline-block;
    position: absolute;
    right: 40px;
    height: 40px;
    top: 50%;
    left: 50%;
    visibility: hidden;
    opacity: 0;
    transform: translate(-50%, -50%);
    transition: all 0.2s ease-in-out;
    z-index: 1;
  }

  .lds-dual-ring.loading {
    visibility: visible;
    opacity: 1;
  }

  .lds-dual-ring::after {
    content: " ";
    display: block;
    width: 40px;
    height: 40px;
    margin: 8px;
    border-radius: 50%;
    border: 3px solid;
    border-color: #ad1deb transparent #ad1deb transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }

  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .nav-fill .nav-item,
  .nav-fill > .nav-link {
    margin-right: 10px;
  }

  .nav-fill .nav-item:last-child,
  .nav-fill > .nav-link:last-child {
    margin-right: 0;
  }

  .nav-fill .nav-item > .nav-link {
    color: #8f9bad !important;
    margin-right: 10px;
  }

  .nav-pills .nav-link.active,
  .nav-pills .show > .nav-link {
    color: #fff !important;
    background-color: #6e72fc;
    background-image: linear-gradient(315deg, #6e72fc 0%, #ad1deb 74%);
    border-color: transparent;
    background-size: 200% auto;
  }

  .nav-pills .nav-link {
    background: 0 0;
    border: 1px solid #ebebeb;
    border-radius: 30px;
  }

  .post.post-list-sm {
    clear: both;
  }

  .post.post-list-sm.circle .thumb {
    max-width: 60px;
  }

  .post.post-list-sm.circle .details {
    margin-left: 80px;
  }

  .post.post-list-sm .thumb {
    float: left;
    position: relative;
  }

  .post .thumb {
    position: relative;
  }

  .post .thumb.rounded .inner {
    border-radius: 10px;
    overflow: hidden;
  }

  .post .thumb.circle .inner {
    overflow: hidden;
    border-radius: 50%;
  }

  .post.post-list-sm .post-title {
    font-size: 15px;
  }

  .post.post-list-sm::after {
    content: "";
    display: block;
    height: 1px;
    margin-bottom: 20px;
    margin-top: 20px;
    width: 100%;
    background: #ebebeb;
    background: linear-gradient(to left, #ebebeb 0%, transparent 100%);
  }

  .post.post-list-sm:last-child::after {
    content: "";
    display: none;
  }

  /* ************** */

  .main-content {
    margin-top: 60px;
  }

  .section-header {
    margin-bottom: 30px;
    position: relative;
  }

  .section-title {
    font-size: 24px;
    margin: 0;
  }

  /* *********************** */

  .padding-30 {
    padding: 30px;
  }

  .post .post-format {
    color: #fff;
    display: block;
    border-radius: 50%;
    font-size: 20px;
    height: 50px;
    line-height: 54px;
    right: 20px;
    text-align: center;
    bottom: -25px;
    position: absolute;
    width: 50px;
    box-shadow: 0 2px 4px 0px rgba(0, 0, 0, 0.15);
    background-color: #6e72fc;
    background: linear-gradient(315deg, #6e72fc 0%, #ad1deb 74%);
    z-index: 1;
  }

  .post .meta li img.author {
    margin-right: 12px;
    vertical-align: middle;
    border-radius: 50%;
  }

  .post.post-list-sm.square .thumb {
    max-width: 110px;
  }

  .post.post-list-sm.square .details {
    margin-left: 130px;
  }

  /* ******************* */

  .post.post-list-sm.before-seperator::before {
    content: "";
    display: block;
    height: 1px;
    margin-bottom: 20px;
    margin-top: 20px;
    width: 100%;
    background: #ebebeb;
    background: linear-gradient(to left, #ebebeb 0%, transparent 100%);
  }

  .post.post-list-sm.before-seperator::after {
    content: "";
    display: none;
  }

  /* ************** */

  .slick-arrows-top {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(0px, -50%);
  }

  .slick-custom-buttons {
    color: #909090;
    font-size: 10px;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background: #fff;
    border-radius: 50%;
    border: 1px solid #ebebeb;
    padding: 0;
    transition: all 0.3s ease-in-out;
  }

  .slick-custom-buttons:hover {
    color: #ad1deb;
    border-color: #ad1deb;
  }

  /* -************ */

  .post-carousel .slick-slide {
    margin: 0px 12px;
  }

  .post.post-over-content {
    position: relative;
    width: 95%;
  }

  .post.post-over-content .thumb {
    position: relative;
    overflow: hidden;
  }

  .post.post-over-content .thumb::after {
    content: "";
    background: #203656;
    display: block;
    height: 100%;
    left: 0;
    opacity: 0.6;
    top: 0;
    position: absolute;
    width: 100%;
  }

  .post.post-over-content .details {
    bottom: 20px;
    left: 20px;
    right: 20px;
    position: absolute;
    z-index: 1;
  }

  .post.post-over-content .post-title {
    font-size: 22px;
  }

  .post.post-over-content .post-title a {
    color: #fff;
  }

  .post.post-over-content .post-title a:hover {
    color: aliceblue;
  }

  .post.post-over-content .meta {
    color: rgba(255, 255, 255, 0.5);
  }

  .post.post-over-content .meta li::after {
    content: "";
    background: rgba(255, 255, 255, 0.5);
  }

  .post.post-over-content .meta li a {
    color: rgba(255, 255, 255, 0.5);
  }

  /* **************** */

  .post.post-list {
    margin-bottom: 30px;
  }

  .post.post-list .thumb {
    float: left;
    max-width: 265px;
  }

  .post.post-list .details {
    margin-left: 295px;
  }

  .post.post-list .post-title {
    margin: 9px 0;
  }

  .post.post-list .post-bottom {
    margin-top: 9px;
  }

  .post.post-list .post-bottom .social-share .icons {
    opacity: 0;
    visibility: hidden;
    transition: all 0.2s ease-in-out;
  }

  .post.post-list .post-bottom .social-share .icons::before {
    content: "";
    background: #ddd;
    display: inline-block;
    height: 1px;
    margin-left: 10px;
    margin-right: 10px;
    vertical-align: middle;
    width: 30px;
  }

  .post.post-list .post-bottom .social-share .icons.visible {
    opacity: 1;
    visibility: visible;
  }

  .post .post-bottom .social-share .toggle-button {
    font-size: 16px;
    color: #9faabb;
    background-color: transparent;
    border: 0;
    padding: 0;
    vertical-align: middle;
  }

  .post .post-bottom .social-share .icons {
    display: inline;
    vertical-align: middle;
  }

  .post .post-bottom .social-share .icons li a {
    color: #9faabb;
    font-size: 14px;
  }

  .post .post-bottom .social-share .icons li a:hover {
    color: #ad1deb;
  }

  .post .post-bottom .social-share .icons li:not(:last-child) {
    margin-right: 0.8rem;
  }

  .post .post-bottom .more-button a {
    font-size: 16px;
    font-weight: 700;
    color: #9faabb;
  }

  .post .post-bottom .more-button a i {
    color: #9faabb;
    font-size: 12px;
    margin-left: 10px;
    vertical-align: middle;
  }

  .post .post-bottom .more-button a:hover {
    color: #ad1deb;
  }

  .post.post-list::after {
    content: "";
    display: block;
    height: 1px;
    margin-bottom: 30px;
    margin-top: 30px;
    width: 100%;
    background: #ebebeb;
    background: linear-gradient(to left, #ebebeb 0%, transparent 100%);
  }

  .post .post-format-sm {
    color: #fff;
    display: block;
    border-radius: 50%;
    font-size: 14px;
    height: 30px;
    line-height: 34px;
    left: 20px;
    text-align: center;
    top: 20px;
    position: absolute;
    width: 30px;
    box-shadow: 0 2px 4px 0px rgba(0, 0, 0, 0.15);
    background-color: #6e72fc;
    background-image: linear-gradient(315deg, #6e72fc 0%, #ad1deb 74%);
    z-index: 1;
  }

  .btn-simple {
    color: #8f9bad;
    padding: 9.5px 36px;
    background: transparent;
    border: 1px solid #ebebeb;
  }

  .btn-simple:hover {
    color: #ad1deb;
    border-color: #ad1deb;
  }

  /* ************** */

  .widget {
    border: 1px solid #ebebeb;
    padding: 35px 30px;
    margin-bottom: 40px;
  }

  .widget:last-child {
    margin-bottom: 0;
  }

  .widget .widget-header {
    margin-bottom: 30px;
  }

  .widget .widget-title {
    font-size: 20px;
    margin: 0;
  }

  .post.post-list-sm .thumb .number {
    color: #fff;
    display: block;
    border: 1px solid #fff;
    border-radius: 50%;
    font-size: 12px;
    font-family: "Poppins", sans-serif;
    font-weight: 700px;
    height: 24px;
    line-height: 22px;
    left: 0;
    text-align: center;
    top: -10px;
    position: absolute;
    width: 24px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15);
    background: #6e72fc;
    background-image: linear-gradient(315deg, #6e72fc 0%, #ad1deb 74%);
    z-index: 1;
  }

  .widget ul.list {
    list-style: none;
    padding: 0;
    margin-bottom: 0;
  }

  .widget ul.list li {
    line-height: 2.8rem;
  }

  .widget ul.list li a {
    color: #203656;
    font-weight: 700;
  }

  .widget ul.list li a::before {
    color: #9faabb;
    font-family: "simple-line-icons";
    font-size: 11px;
    vertical-align: middle;
    margin-right: 25px;
    content: "";
  }

  .widget ul.list li a:hover {
    color: #ad1deb;
  }

  .widget ul.list li::after {
    content: "";
    display: block;
    height: 1px;
    width: 100%;
    background: #ebebeb;
    background-image: linear-gradient(to right, #ebebeb 0%, transparent 100%);
  }

  .widget ul.list li span {
    float: right;
  }

  .widget ul.list li:last-child::after {
    content: "";
    display: none;
  }

  /* ****************** */

  .newsletter-headline {
    font-size: 15px;
    font-weight: bold;
    color: #203656;
    display: block;
  }

  .newsletter-privacy {
    font-size: 13px;
    display: block;
  }

  .btn-default {
    color: #fff;
    padding: 9.5px 36px;
    background-color: #6e72fc;
    background-image: linear-gradient(315deg, #6e72fc 0%, #ad1deb 74%);
    background-size: 200% auto;
  }

  .btn-default:hover {
    color: #fff;
    background-position: right center;
  }

  .btn-full {
    padding: 9.5px 36px;
    width: 100%;
  }

  /* ***************** */

  .slick-arrows-bot {
    position: relative;
    text-align: center;
    margin-top: 20px;
  }

  /* ****************** */

  .tag {
    color: #8f9bad;
    border: 1px solid #8f9bad;
    border-radius: 25px;
    font-size: 13px;
    display: inline-block;
    padding: 3px 14px;
    margin: 4px 0;
  }

  .tag:hover {
    border-color: #ad1deb;
    color: #ad1deb;
  }

  /* *************** */

  .instagram {
    margin: 60px 0 0;
    position: relative;
  }

  .instagram-feed {
    margin-left: -2.5px;
    margin-right: -2.5px;
  }

  .instagram-feed .insta-item {
    overflow: hidden;
    padding-left: 2.5px;
    padding-right: 2.5px;
  }

  .instagram-feed .insta-item img {
    border-radius: 10px;
  }

  .btn-instagram {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }

  /* *********** */

  footer {
    margin-top: 50px;
  }

  footer .footer-inner {
    border-top: 1px solid #ebebeb;
    padding: 40px 0;
  }

  footer .footer-inner .copyright {
    color: #9faabb;
  }

  #return-to-top {
    color: #8f9bad;
    font-size: 13px;
    border: 1px solid #ebebeb;
    text-decoration: none;
    border-radius: 25px;
    padding: 6px 20px;
    z-index: 4;
    transition: all 0.3s ease-in-out;
  }

  #return-to-top i {
    font-size: 11px;
    vertical-align: middle;
    margin-right: 10px;
  }

  #return-to-top:hover {
    color: #ad1deb;
    border-color: #ad1deb;
  }

  /* *********** responsiveness **************** */

  @media only screen and (max-width: 992px) {
    .inner-wrapper-sticky {
      transform: none !important;
      position: relative !important;
      top: 0 !important;
      left: 0 !important;
      width: auto !important;
    }
  }

  @media only screen and (max-width: 767px) {
    .featured-post-lg .thumb .inner {
      height: 425px;
    }
    .post.post-list .thumb {
      float: none;
      max-width: 550px;
    }
    .post.post-list .details {
      margin-left: 0;
      margin-top: 25px;
    }
    .post .meta li::after {
      content: "";
      margin-left: 0.5rem;
    }
    .post .meta li:not(:last-child) {
      margin-right: 0.3rem;
    }
    .instagram-feed .insta-item {
      text-align: center;
      margin: 2.5px 0;
    }
    .footer-inner {
      text-align: center;
    }
    .featured-post-lg .post-title {
      font-size: 26px;
    }
    .featured-post-lg .details {
      bottom: 30px;
      left: 30px;
      right: 30px;
    }
    .search-popup .search-content {
      padding: 0px 20px;
      width: 100%;
    }
    .post-carousel-widget .post-carousel {
      margin: 0 12px;
    }
    .post-carousel-widget .post-carousel .post-title {
      font-size: 16px;
    }
  }
`;
