import React from 'react';

const SavedArticles = props => (
  <div>
    <h1>Saved Articles</h1>
    <ul className="saved-articles">
      {props.saved.map(saved => (
        <li key={saved} className="list-group-item">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{saved.headline}</h5>
              <p className="card-text">{saved.url}</p>
              <p className="card-text">{saved.date}</p>
              <button className="btn btn-primary">Delete</button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  </div>
  
)

export default SavedArticles;