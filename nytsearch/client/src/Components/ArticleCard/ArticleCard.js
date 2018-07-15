import React from "react";

const ArticleCard = props => {
  <div className="card">
    <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">{props.url}</p>
      <p className="card-text">{props.date}</p>
      <button className="btn btn-primary">Save</button>
    </div>
  </div>
};

export default ArticleCard;