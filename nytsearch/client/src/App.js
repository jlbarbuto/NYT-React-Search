import React, { Component } from 'react';
// import './App.css';
import Header from "./Components/Header/Header";
import Search from "./Pages/Search/Search";
// import Result from "./Pages/Results/Results";

const API_KEY = process.env.REACT_APP_NYT_KEY;

query = () => (
  axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + API_KEY + "&q=chicken&begin_date=20100101&end_date=20180101")
    .then(console.log(results))
    .catch(console.log(err))
);

class App extends Component {
  componentDidMount() {
    query();
  }

  render() {
    return (
      <div className="App">
        <h1>hi nmk j knkjb lkjbj b;kj; kn. nkjhgvhgvjb.knlknkj b</h1>
      </div>
    );
  }
}

export default App;
