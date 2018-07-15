import React, { Component } from "react";
import "./Search.css";
import ArticleCard from "../../Components/ArticleCard/ArticleCard";

//make this the app.js file b/c there aren't multiple pages??? 
//make app.js the only statefull component? or something that gets rendered in app.js

class Search extends Component {

  state = {
    topic: "",
    startYear: "",
    endYear: "",
    results: [
      {
        id: 1,
        title: "this is an article title",
        url: "www.articleurl.com",
        date: "2017-04-23T00:00:00Z"
      },
      {
        id: 2,
        title: "this is an article title",
        url: "www.articleurl.com",
        date: "2017-04-23T00:00:00Z"
      },
      {
        id: 3,
        title: "this is an article title",
        url: "www.articleurl.com",
        date: "2017-04-23T00:00:00Z"
      }
    ]
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ 
      [name]: value
    });
  };

  loadArticles = () => {
    {this.state.results.map(result => (
      <ArticleCard
        key={result.id}
        title={result.title}
        url={result.url}
        date={result.date}
      />
    ))
  
  }
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.loadArticles();
  }

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   API.getArticles(this.state.search)
  //     .then(res => {
  //       if(res.data.status === "error"){
  //         throw new Error(res.data.message);
  //       }
  //       this.setState({results: res.data.message, error: ""});
  //     })
  //     .catch(err => this.setState({ error: err.message }));
  // };

  render() {
    return (
      <div className="container">
        <form className="search">
          <div className="form-group">
            <label htmlFor="topic">Topic:</label>
            <input
              value={this.state.topic}
              onChange={this.handleInputChange}
              name="topic"
              type="text"
              className="form-control"
              placeholder="Enter a topic of interest"
            />
            <br />
            <br />
            <label htmlFor="startYear">Start Year:</label>
            <input
              value={this.state.startYear}
              onChange={this.handleInputChange}
              name="startYear"
              type="text"
              className="form-control"
              placeholder="Enter a startYear of interest"
            />
            <br />
            <br />
            <label htmlFor="endYear">End Year:</label>
            <input
              value={this.state.endYear}
              onChange={this.handleInputChange}
              name="endYear"
              type="text"
              className="form-control"
              placeholder="Enter a endYear of interest"
            />
            <br />
            <br />
            <button
              type="submit"
              onClick={this.handleFormSubmit}
              className="btn btn-success"
            >
              Search
            </button>
            <div>{this.loadArticles()}</div>
          </div>
        </form>
      </div>
    );
  }
};

export default Search;