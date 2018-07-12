import React from "react";
import "./Results.css";

const Results = props => (
  <div className="container">
    <form className="search">
      <h1>Search</h1>
      <hr />
      <h2>Topic</h2>
      
      <h2>Start Year</h2>
      
      <button type="submit"
        onClick={props.handleFormSubmit}
        className="btn btn-success"
      >Search</button>
    </form>
  </div>
);

export default Results;