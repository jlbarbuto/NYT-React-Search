import React, { Component } from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Saved from "./Pages/Saved/Saved";
import Search from './Pages/Search/Search';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Search />
        <Saved />
      </div>
    );
  }
}

export default App;
