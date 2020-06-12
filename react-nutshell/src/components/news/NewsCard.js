import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NewsCard.css"


class NewsCard extends Component {
    render() {
        return (
            <div className="news-card">
        <div className="card-content">
          <h3>
            <span className="card-newstitle">{this.props.news.title}</span>
          </h3>
          <p>Synopsis: {this.props.news.synopsis}</p>
          <a href={this.props.news.url}>{this.props.news.url}</a>
          <div className="btn-container">
          <button className="news-btn" type="button" onClick={() => { this.props.history.push(`/news/${this.props.news.id}/edit`)}}>Edit</button>
          <button className="news-btn" type="button" onClick={() => this.props.removeArticle(this.props.news.id)}>Remove</button>
          </div>
        </div>
      </div>
        )
    }
}

export default NewsCard;