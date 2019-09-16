import React, { Component } from "react";
import StarRatings from "react-star-ratings";

class StarRate extends Component {
  state = {};

  render() {
    return (
      <div id="divStar">
        <StarRatings
          name="rate1"
          starCount={5}
          rating={2.4}
          editing={true}
          starDimension="20px"
          starSpacing="5px"
          starRatedColor="yellow"
        />
      </div>
    );
  }
}

export default StarRate;
