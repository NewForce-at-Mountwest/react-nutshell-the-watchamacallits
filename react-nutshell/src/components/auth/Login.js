import React, { Component } from "react"
import UserManager from "../../modules/UserManager"
class Login extends Component {

state = {
    email: "",
    password: "",
}


handleFieldChange = (evt) => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
}


handleLogin = (e) => {
    e.preventDefault()
     UserManager.filterGetAll(this.state.email, this.state.password)
     .then((usersArray) => {
        if(usersArray.length === 0){
            alert("Hey dumbass, your shits all fucked up.  Get the right info.")
        } else{
            localStorage.setItem(
                "credentials",
                JSON.stringify({
                    email: this.state.email,
                    password: this.state.password,
                    userId: usersArray[0].id,
                })
            )
            this.props.history.push("/");
        }
     })


    

    }


    handleRegister = () => {
this.props.history.push("/register")
    }

render() {
    return (
        <form onSubmit={this.handleLogin}>
            <fieldset>
                <h3>Welcome to Nutshell, Bitches!</h3>
                <h4>Please sign in</h4>
                <div className="formgrid">
                    <input onChange={this.handleFieldChange} type="email"
                        id="email"
                        placeholder="Email address"
                        required="" autoFocus="" />
                    <label htmlFor="inputEmail">Email address</label>

                    <input onChange={this.handleFieldChange} type="password"
                        id="password"
                        placeholder="Password"
                        required="" />
                    <label htmlFor="inputPassword">Password</label>
                </div>
                <button type="submit">
                    Sign in
            </button>
            <a href="" onClick={this.handleRegister}>Register Account</a>
            </fieldset>
        </form>
    )
}

}

export default Login
