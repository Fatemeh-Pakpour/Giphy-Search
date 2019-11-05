import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default class SearchForm extends Component {
  state = {
    searchText: " "
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.onSearch(this.query.value);
    event.currentTarget.reset();
  };
  onSearchChange = event => {
    this.setState({ searchText: event.target.value });
  };
  render() {
    return (
      <form className="search-form" onSubmit={this.handleSubmit}>
        <label className="is-hidden" htmlFor="search">
          Search
        </label>
        <input
          type="search"
          onChange={this.onSearchChange}
          ref={input => (this.query = input)}
          name="search"
          placeholder="Search..."
        />
        <button type="submit" id="submit" className="search-button">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
    );
  }
}
