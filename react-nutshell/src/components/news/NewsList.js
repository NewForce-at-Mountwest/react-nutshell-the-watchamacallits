import React, { Component } from "react";
import NewsCard from './NewsCard'
import NewsManager from '../../modules/NewsManager'


class NewsList extends Component {

    state = {
        articles: [],
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
                <section className="section-content">
                    <button type="button"
                        className="btn"
                        onClick={() => { this.props.history.push("/news/new") }}>
                        New Article
                    </button>
                </section>

                <div className="cards-container">
                    {this.state.articles.sort((a, b) => { return new Date(a.date) - new Date(b.date) }).map((singleArticle) => {
                        return <NewsCard key={singleArticle.id} news={singleArticle} />
                    })}
                </div>
            </>
        )
    }
}


export default NewsList