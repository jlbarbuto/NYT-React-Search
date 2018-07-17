import React, { Component } from "react";
// import "./Saved.css";
import axios from 'axios';
import SavedArticles from "../../Components/SavedArticles/SavedArticles";

class Saved extends Component {

  state = {
    headline: "",
    url: "",
    date: "",
    saved: []
  };

  // handleInputChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({ 
  //     [name]: value
  //   });
  // };

  loadSavedArticles = () => {
    return axios.get("/api/articles")
      .then(res => {
        this.setState({ saved: res});
        return(res);
      });
  }

  // saveArticle = (headline, url, date) => {
  //   var articleData = {
  //     headline: headline,
  //     url: url,
  //     date: date
  //   };
  //   return axios.post("/api/articles", articleData)
  //     .then(res => {
  //       this.loadSavedArticles();
  //       return("results: " + res);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };

  // handleSave = event => {
  //   event.preventDefault();
  //   this.saveArticle({
  //     headline: this.state.headline,
  //     url: this.state.url,
  //     date: this.state.date
  //   })
  // }

  render() {
    return (
      <div className="container">
        {this.state.saved.length ? (
          <SavedArticles saved={this.state.saved} />
        ) : (
          <h2>No Saved Articles yet!</h2>
        )}
      </div>
    );
  }
};

export default Saved;