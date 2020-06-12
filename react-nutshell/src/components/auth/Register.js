import React, { Component } from 'react';
import UserManager from "../../modules/UserManager"

class Register extends Component {

    state = {
        email: "",
        password: "",
        username: "",
        loadingStatus: false,
    };


    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    constructNewArticle = evt => {
        evt.preventDefault();
        let emailBool = false;
        let userNameBool = false;
        let emailArray = [];
        let userNameArray = [];

        UserManager.getAll().then((usersArray) => {
            emailArray = usersArray.filter((user) => user.email === this.state.email)
            userNameArray = usersArray.filter((user) => user.username === this.state.username)
        })

        if (this.state.email === "" || this.state.password === "" || this.state.username === "") {
            window.alert("Hey dumbass, make sure the email, password, and username are all filled out in the form")
        } else {

            if(emailArray.length === 0){
                emailBool = true;
            } else {
                alert("This email address is taken")
            }

            if(userNameArray.length === 0){
                userNameBool = true;
            } else {
                alert("This username is taken")
            }


            if(emailBool === true && userNameBool === true){
                this.setState({ loadingStatus: true });
                const user = {
                    email: this.state.email,
                    password: this.state.password,
                    username: this.state.username,
                }

                UserManager.post(user).then(() => this.props.history.push("/"))
            }
          
        }
    };


    render() {
        return(
            <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="email"
                        placeholder="Email"
                        />
                        <label htmlFor="email">Email</label>
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="username"
                        placeholder="Username"
                        />
                        <label htmlFor="username">Username</label>
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="password"
                        placeholder="Password"
                        />
                        <label htmlFor="password">Password</label>
                    </div>
                    <div className="alignRight">
                        <button
                        type="button"
                        disabled={this.state.loadingStatus}
                        onClick={this.constructNewArticle}
                        >Register</button>
                    </div>
                </fieldset>
            </form>
            </>
        )
    }

}

export default Register