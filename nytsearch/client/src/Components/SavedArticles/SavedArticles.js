import React from 'react';

const SavedArticles = props => (
  <div>
    <h1>Saved Articles</h1>
    <ul className="search-results">
      {props.results.map(result => (
        <li key={result} className="list-group-item">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{result.headline.main}</h5>
              <p className="card-text">{result.web_url}</p>
              <p className="card-text">{result.pub_date}</p>
              <button className="btn btn-primary">Delete</button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  </div>
  
)

export default SavedArticles;