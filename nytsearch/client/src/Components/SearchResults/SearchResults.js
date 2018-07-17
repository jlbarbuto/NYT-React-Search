import React from 'react';

const SearchResults = props => (
  <div>
    <h1>Results</h1>
    <ul className="search-results">
      {props.results.map(result => (
        <li key={result} className="list-group-item">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{result.headline.main}</h5>
              <p className="card-text">{result.web_url}</p>
              <p className="card-text">{result.pub_date}</p>
              <button className="btn btn-primary" onClick={props.handleSave}>Save</button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  </div>
  
)

export default SearchResults;