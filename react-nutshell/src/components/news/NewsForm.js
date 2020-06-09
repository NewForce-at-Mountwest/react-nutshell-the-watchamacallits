import React, { Component } from 'react';
import NewsManager from "../../modules/NewsManager"



class NewsForm extends Component {

    state = {
        title: "",
        synopsis: "",
        url: "",
        date: new Date(),
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    constructNewArticle = evt => {
        evt.preventDefault();
        if (this.state.title === "" || this.state.synopsis === "" || this.state.url === "") {
            window.alert("Hey dumbass, make sure the title, synopsis, and URL are all filled out in the form")
        } else {
            this.setState({ loadingStatus: true });
            const article = {
                title: this.state.title,
                synopsis: this.state.synopsis,
                url: this.state.url,
                date: this.state.date
            }

            NewsManager.post(article).then(() => this.props.history.push("/news"))
        }
    }


    render() {
        console.log(this.state.date)
        return(
            <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="title"
                        placeholder="Title"
                        />
                        <label htmlFor="title">Title</label>
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="synopsis"
                        placeholder="Synopsis"
                        />
                        <label htmlFor="synopsis">Synopsis</label>
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="url"
                        placeholder="URL"
                        />
                        <label htmlFor="url">URL</label>
                    </div>
                    <div className="alignRight">
                        <button
                        type="button"
                        disabled={this.state.loadingStatus}
                        onClick={this.constructNewArticle}
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
            </>
        )
    }

};

export default NewsForm