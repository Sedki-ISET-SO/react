import React, { Component } from "react";

class ExOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      countPlus: 0,
      countMinus: 0,
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
      <div>
        <p>Counter: {this.state.count}</p>
        <button
          onClick={() =>
            this.setState({
              count: this.state.count + 1,
              countPlus: this.state.countPlus + 1,
            })
          }
        >
          + ({this.state.countPlus} clicks)
        </button>

        <button
          disabled={this.state.count === 0}
          onClick={() =>
            this.setState({
              count: this.state.count - 1,
              countMinus: this.state.countMinus + 1,
            })
          }
        >
          - ({this.state.countMinus} clicks)
        </button>
      </div>
    );
  }
}

export default ExOne;
