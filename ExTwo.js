import React, { Component } from "react";
import "./ExTwo.css";

class StarRating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
    };
  }

  componentDidMount() {
    const persistState = localStorage.getItem("rootState");
    if (persistState) {
      this.setState(JSON.parse(persistState));
    }
  }
  componentDidUpdate() {
    localStorage.setItem("rootState", JSON.stringify(this.state));
  }

  render() {
    return (
      <div className="star-rating">
        {[...Array(5)].map((_, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              className={index <= this.state.rating ? "on" : "off"}
              onClick={() =>
                this.setState({ rating: (this.state.rating = index) })
              }
            >
              <span className="star">&#9733;</span>
            </button>
          );
        })}
      </div>
    );
  }
}

export default StarRating;
