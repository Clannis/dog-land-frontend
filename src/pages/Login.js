import { Component } from "react";
import "../styles/login.scss"

class Login extends Component {
    constructor(){
        super()
        this.state = {
            email: "",
            password: ""
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleLogin = (event) => {
        event.preventDefault()
        const email = this.state.email
        const password = this.state.password
        const user = {password: password, email: email}
        this.props.login(user)
    }

    handleRegister = (event) => {
        event.preventDefault()
        const email = this.state.email
        const password = this.state.password
        const user = {password: password, email: email}
        this.props.register(user)
    }

    render() {
        return(
            <section className="welcome">
                <h1 className="welcome__heading">Welcome to Dog Land Academy</h1>
                <form className="welcome__form">
                    <input className="welcome__form--input" type="email" id="inputEmail" name="email"  placeholder="Email Address" required="" autoFocus="" onChange={this.handleChange}/>
                    <input className="welcome__form--input" type="password" id="inputPassword" name="password" placeholder="Password" required="" onChange={this.handleChange}/>
                </form>
                <div className="welcome__form--submit-group">
                    <button className="welcome__form--submit btn" onClick={this.handleLogin}>Login</button>
                    <button className="welcome__form--submit btn" onClick={this.handleRegister}>Register</button>
                </div>
                <p className="welcome__seperator welcome__seperator--or">or</p>
                <button className="github btn">
                    <img className="github__icon" src={process.env.PUBLIC_URL + '/github-logo.png'} alt="github-logo"></img>
                    <p className="github__text">Login with Github</p>
                </button>
                <p className="welcome__seperator welcome__seperator--trainer">Trainer</p>
                <button className="welcome__trainer btn">Trainer</button>
            </section>
        )
    }
}

export default Login