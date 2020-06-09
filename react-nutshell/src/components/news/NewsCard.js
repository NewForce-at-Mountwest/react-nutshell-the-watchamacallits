import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NewsCard.css"

class NewsCard extends Component {
    render() {
        return (
            <div className="card">
        <div className="card-content">
          <h3>
            <span className="card-newstitle">{this.props.news.title}</span>
          </h3>
          <p>Synopsis: {this.props.news.synopsis}</p>
          <a href={this.props.news.url}>{this.props.news.url}</a>
        </div>
      </div>
        )
    }
}

export default NewsCard;