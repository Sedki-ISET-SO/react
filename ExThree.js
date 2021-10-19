import React, { Component } from "react";
import { data } from "./Data";
import "./ExThree.css";

class ExThree extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      searchTerm: "",
      filterBy: 'all'
    };
    this.showDetails = this.showDetails.bind(this);
    this.searchTerm = this.search.bind(this);
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

  componentWillMount() {
    this.setState({ users: data });
  }

  search(e) {
    console.log(e.target.value);
    this.setState({ searchTerm: e.target.value });
  }

  showDetails(user) {
    user.show = !user.show;
    this.setState({ ...user });
    console.log(this.state);
  }

  updateFilter = e => {
    this.setState({filterBy: e.target.value})
    console.log(this.state.filterBy);
  }

  render() {
    return (
      <div class="container">
        <header>
          <h1>Filter Search Without Filter Options</h1>
          <h1>Click on name to show details</h1>
        </header>
        <input
          class="search-box"
          onKeyUp={(e) => this.searchTerm(e)}
          type="text"
        ></input>
        <select class="search-box" data-mdb-filter="true" value={this.state.filterBy} onChange={this.updateFilter}>
          <option value="gender">gender</option>
          <option value="name">name</option>
          <option value="age">age</option>
          <option value="email">email</option>
          <option value="address">address</option>
          <option value="phone">phone</option>
          <option value="likes">likes</option>
          <option value="rating">rating</option>
          <option value="balance">balance</option>
        </select>
        <ul class="collapse-able">
          {this.state.users
            .filter((user) => {
              return (
                user.name.toLowerCase().indexOf(this.state.searchTerm) > -1
              );
            })
            .map((user) => {
              return (
                <li onClick={() => this.showDetails(user)}>
                  <h2>{user.name}</h2>
                  {user.show ? (
                    <div>
                      <p>{user.gender}</p>
                      <p>{user.age}</p>
                      <p>{user.email}</p>
                      <p>{user.phone}</p>
                      <p>{user.address}</p>
                      <p>{user.balance}</p>
                      <p>{user.likes}</p>
                      <p>{user.rating}</p>
                    </div>
                  ) : null}
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}

export default ExThree;
