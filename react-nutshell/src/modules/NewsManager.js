const remoteURL = "http://localhost:5002";

const NewsManager = {
    getAll() {
        return fetch(`${remoteURL}/articles`).then((result) => result.json());
    },

    post(newArticle) {
        return fetch(`${remoteURL}/articles`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newArticle),
        }).then((data) => data.json());
    },
    
}


export default NewsManager