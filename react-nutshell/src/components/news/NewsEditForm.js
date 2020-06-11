import React, { Component } from "react";
import NewsManager from "../../modules/NewsManager"



class NewsEditForm extends Component {

    state = {
        title: "",
        synopsis: "",
        url: "",
        date: new Date(),
        userId: 1,
        loadingStatus: true,
    };

    handleFieldChange = (evt) => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    updateExistingArticle = (e) => {
        e.preventDefault();
        this.setState({ loadingStatus: true });
        const editedArticle = {
            id: this.props.match.params.newId,
            title: this.state.title,
            synopsis: this.state.synopsis,
            url: this.state.url,
            date: this.state.date,
            userId: this.state.userId,
        };

        NewsManager.update(editedArticle).then(() =>
            this.props.history.push("/news")
        );
    };

    componentDidMount() {
        NewsManager.get(this.props.match.params.newId)
        .then((article) => {
          this.setState({
            title: article.title,
            synopsis: article.synopsis,
            url: article.url,
            date: article.date,
            loadingStatus: false,
          });
        });
      }

      render() {
        return (
          <>
            <form>
              <fieldset>
                <div className="formgrid">
                  <input
                    type="text"
                    required
                    className="form-control"
                    onChange={this.handleFieldChange}
                    id="title"
                    value={this.state.title}
                  />
                  <label htmlFor="title">Title</label>
    
                  <input
                    type="text"
                    required
                    className="form-control"
                    onChange={this.handleFieldChange}
                    id="synopsis"
                    value={this.state.synopsis}
                  />
                  <label htmlFor="synopsis">Synopsis</label>

                  <input
                    type="text"
                    required
                    className="form-control"
                    onChange={this.handleFieldChange}
                    id="url"
                    value={this.state.url}
                  />
                  <label htmlFor="url">URL</label>

                
                </div>
                <div className="alignRight">
                  <button
                    type="button"
                    disabled={this.state.loadingStatus}
                    onClick={this.updateExistingArticle}
                    className="btn btn-primary"
                  >
                    Submit
                  </button>
                </div>
              </fieldset>
            </form>
          </>
        );
      }
    }




export default NewsEditForm