import React from "react";
import "./Search.css";

class Search extends Component {

  state = {
    search="",
    results= [],
  };

  handleInputChange = event => {
    this.setState({ serach: event.target.value});
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getArticles(this.state.search)
      .then(res => {
        if(res.data.status === "error"){
          throw new Error(res.data.message);
        }
        this.setState({results: res.data.message, error: ""});
      })
      .catch(err => this.setState({ error: err.message }));
  };

  render() {
    return (
      <div className="container">
        <form className="search">
          <h1>Search</h1>
          <hr />
          <h2>Topic</h2>
          <input 
            value={props.search}
            onChange={this.state.handleInputChange}
            name="topic"
            type="text"
            className="form-control"
            placeholder="Type in a topic of interest"
            id="topic"
          />
          <h2>Start Year</h2>
          <input 
            value={props.search}
            onChange={this.state.handleInputChange}
            name="startYear"
            type="text"
            className="form-control"
            placeholder="Type in a start year"
            id="startYear"
          />
          <h2>End Year</h2>
          <input 
            value={props.search}
            onChange={this.state.handleInputChange}
            name="endYear"
            type="text"
            className="form-control"
            placeholder="Type in a end year"
            id="endYear"
          />
          <button type="submit"
            onClick={this.state.handleFormSubmit}
            className="btn btn-success"
          >Search</button>
        </form>
      </div>
    );
  }
};

export default Search;