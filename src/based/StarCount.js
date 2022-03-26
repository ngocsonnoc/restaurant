import PropTypes from "prop-types";
import React from "react";

function StarCount(props) {
  const starNumber = props.starNumber;
  if (!starNumber)
    return (
      <span style={{ fontSize: ".9rem", color: "gray" }}>Chưa có đánh giá</span>
    );
  let star = <i class="fas fa-star"></i>;
  let greyStar = <i class="far fa-star"></i>;
  let greyStarCount = starNumber == 5 ? 0 : Math.floor(5 / starNumber);
  let starCount = 5 - greyStarCount;

  return (
    <React.Fragment>
      <div className="pdp__product-rate-star">
        {[...Array(starCount)].map((_, idx) => {
          return star;
        })}
        {[...Array(greyStarCount)].map((_, idx) => {
          return greyStar;
        })}
      </div>
    </React.Fragment>
  );
}

StarCount.propTypes = {
  starNumber: PropTypes.number,
};

export default StarCount;
