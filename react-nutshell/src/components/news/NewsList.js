import React, { Component } from "react";
import NewsCard from './NewsCard'
import NewsManager from '../../modules/NewsManager'
import "./NewsList.css"


class NewsList extends Component {

    state = {
        articles: [],
    }

    deleteArticle = id => {
        NewsManager.delete(id)
        .then(() => {
          NewsManager.getAll()
          .then((newArticles) => {
            this.setState({
                articles: newArticles
            })
          })
        })
      }

      injectInput = e => {
        console.log(e)
      }

    componentDidMount() {
        NewsManager.getAll().then((parsedArticles) => {
            this.setState({
                articles: parsedArticles,
            })
        })
    }

    render() {

        return (
            //Prints each article ordered by date
            <>
                <section className="news-section-content">
                    <button className="news-btn" type="button"
                        className="btn"
                        onClick={() => { this.props.history.push("/news/new") }}>
                        New Article
                    </button>
                </section>

                <div className="news-cards-container" >
                    {this.state.articles.sort((a, b) => { return new Date(b.date) - new Date(a.date) }).map((singleArticle) => {
                        return <NewsCard  key={singleArticle.id} news={singleArticle} removeArticle={this.deleteArticle} {...this.props}/>
                    })}
                </div>
            </>
        )
    }
}


export default NewsList