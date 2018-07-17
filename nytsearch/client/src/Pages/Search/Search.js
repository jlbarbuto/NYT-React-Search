import React, { Component } from "react";
import "./Search.css";
import SearchResults from "../../Components/SearchResults/SearchResults";
import axios from 'axios';
import SearchForm from "../../Components/SearchForm/SearchForm";
// import ArticleCard from "../../Components/ArticleCard/ArticleCard";

// const API_KEY = process.env.REACT_APP_NYT_KEY;
const API_KEY = "e3e9bfd052284f8c86b6c5dbd5f9a1ed";

class Search extends Component {

  state = {
    topic: "",
    startYear: "",
    endYear: "",
    results: [],
    saved: []
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ 
      [name]: value
    });
  };

  loadSavedArticles = () => {
    return axios.get("/api/articles")
      .then(res => {
        return(res);
      });
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${API_KEY}&q=${this.state.topic}&begin_date=${this.state.startYear}0101&end_date=${this.state.endYear}0101`;
    axios.get(url)
    .then(res => {
      console.log(res.data.response.docs);
      this.setState({ results: res.data.response.docs});
    })
    .catch(err => {
      console.log(err);
    })
    console.log(this.state.results);
  };

  saveArticle = (headline, url, date) => {
    var articleData = {
      headline: headline,
      url: url,
      date: date
    };
    console.log(articleData);
    return axios.post("/api/articles", articleData)
      .then(res => {
        this.setState({ saved: res})
        return("results: " + res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleSave = event => {
    console.log(this.state.results[0].headline.main);
    event.preventDefault();
    this.saveArticle({
      headline: this.state.results[0].headline.main,
      url: this.state.results[0].web_url,
      date: this.state.results[0].pub_date
    })
  }

  render() {
    return (
      <div className="container">
        <SearchForm
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          topic={this.state.topic}
          startYear={this.state.startYear}
          endYear={this.state.endYear}
        />
        {this.state.results.length ? (
          <SearchResults results={this.state.results} handleSave={this.handleSave}/>
        ) : (
          <h2>No Articles yet!</h2>
        )}
      </div>
    );
  }
};

export default Search;