import React from 'react';
import ArticleCard from '../ArticleCard/ArticleCard';

const SearchResults = props => (
  <ul className="search-results">
    {props.results.map(result => (
      <li>
        <ArticleCard 
          headline={result.headline}
          web_url={result.web_url}
          pub_date={result.pub_date}
        />
      </li>
    ))}
  </ul>
)

export default SearchResults;