import React from "react";
import styled from "styled-components";
import img from "../../../assets/image/blog/posts/editors-lg.jpg";
import PostListItem from "./PostListItem";

const BlogBanner = () => {
  return (
    <Wrapper>
      <div className="container-xl">
        <div className="row gy-4">
          <div className="col-lg-8">
            <div className="post featured-post-lg">
              <div className="details clearfix">
                <a href="#" className="category-badge">
                  Finance
                </a>
                <h2 className="post-title">
                  <a href="#">
                    3 Things to avoid while investing in stock market as a
                    beginner
                  </a>
                </h2>
                <ul className="meta list-inline mb-0">
                  <li className="list-inline-item">
                    <a href="#">Techie Coder</a>
                  </li>
                  <li className="list-inline-item">30 May 2021</li>
                </ul>
              </div>
              <a href="#">
                <div className="thumb rounded">
                  <div
                    className="inner data-bg-image"
                    style={{ backgroundImage: `url(${img})` }}
                  ></div>
                </div>
              </a>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="post-tabs rounded bordered">
              <ul
                className="nav nav-tabs nav-pills nav-fill"
                id="postTab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    aria-controls="popular"
                    aria-selected="true"
                    className="nav-link active"
                    data-bs-target="#popular"
                    data-bs-toggle="tab"
                    id="popular-tab"
                    role="tab"
                    type="button"
                  >
                    Popular
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    aria-controls="recent"
                    aria-selected="false"
                    className="nav-link"
                    data-bs-target="#recent"
                    data-bs-toggle="tab"
                    id="recent-tab"
                    role="tab"
                    type="button"
                  >
                    Recent
                  </button>
                </li>
              </ul>
              {/* content  */}
              <div className="tab-content" id="postsTabContent">
                {/* loader */}
                <div className="lds-dual-ring" />
                {/* pop post  */}
                <div
                  className="tab-pane fade show active"
                  id="popular"
                  aria-labelledby="popular-tab"
                  role="tabpanel"
                >
                  {/* post  */}
                  <PostListItem />
                  <PostListItem />
                  <PostListItem />
                  <PostListItem badge={4}/>
                </div>
                {/* recent  */}
                <div
                  className="tab-pane fade"
                  id="recent"
                  aria-labelledby="recent-tab"
                  role="tabpanel"
                >
                  {/* post  */}
                  <div className="post post-list-sm circle">
                    <div className="thumb circle">
                      <a href="#">
                        <div className="inner">
                          <img src={img} alt="" />
                        </div>
                      </a>
                    </div>
                    <div className="details clearfix">
                      <h6 className="post-title my-0">
                        <a href="#">Clubhouse breaking records of many apps</a>
                      </h6>
                      <ul className="meta list-inline mt-1 mb-0">
                        <li className="list-inline-item">24 May 2021</li>
                      </ul>
                    </div>
                  </div>
                  {/* post2  */}
                  <div className="post post-list-sm circle">
                    <div className="thumb circle">
                      <a href="#">
                        <div className="inner">
                          <img src={img} alt="" />
                        </div>
                      </a>
                    </div>
                    <div className="details clearfix">
                      <h6 className="post-title my-0">
                        <a href="#">At what age you should start investing</a>
                      </h6>
                      <ul className="meta list-inline mt-1 mb-0">
                        <li className="list-inline-item">26 May 2021</li>
                      </ul>
                    </div>
                  </div>
                  {/* post3  */}
                  <div className="post post-list-sm circle">
                    <div className="thumb circle">
                      <a href="#">
                        <div className="inner">
                          <img src={img} alt="" />
                        </div>
                      </a>
                    </div>
                    <div className="details clearfix">
                      <h6 className="post-title my-0">
                        <a href="#">
                          Sonu sood foundation providing help in COVID-19
                        </a>
                      </h6>
                      <ul className="meta list-inline mt-1 mb-0">
                        <li className="list-inline-item">28 Jun 2021</li>
                      </ul>
                    </div>
                  </div>
                  {/* post4  */}
                  <div className="post post-list-sm circle">
                    <div className="thumb circle">
                      <a href="#">
                        <div className="inner">
                          <img src={img} alt="" />
                        </div>
                      </a>
                    </div>
                    <div className="details clearfix">
                      <h6 className="post-title my-0">
                        <a href="#">Should we invest in soverign gold bonds</a>
                      </h6>
                      <ul className="meta list-inline mt-1 mb-0">
                        <li className="list-inline-item">04 Jun 2021</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default BlogBanner;

const Wrapper = styled.section`
  padding-top: 130px;
`;
