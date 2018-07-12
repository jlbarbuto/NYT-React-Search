import React from "react";
import "./Search.css";

const Search = props => (
  <div className="container">
    <form className="search">
      <h1>Search</h1>
      <hr />
      <h2>Topic</h2>
      <input 
        value={props.search}
        onChange={props.handleInputChange}
        name="topic"
        type="text"
        className="form-control"
        placeholder="Type in a topic of interest"
        id="topic"
      />
      <h2>Start Year</h2>
      <input 
        value={props.search}
        onChange={props.handleInputChange}
        name="startYear"
        type="text"
        className="form-control"
        placeholder="Type in a start year"
        id="startYear"
      />
      <h2>End Year</h2>
      <input 
        value={props.search}
        onChange={props.handleInputChange}
        name="endYear"
        type="text"
        className="form-control"
        placeholder="Type in a end year"
        id="endYear"
      />
      <button type="submit"
        onClick={props.handleFormSubmit}
        className="btn btn-success"
      >Search</button>
    </form>
  </div>
);

export default Search;