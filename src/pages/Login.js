import { Component } from "react";
import "../styles/login.scss"
import githubLogo from '../assets/img/github-logo.png'
import { connect } from "react-redux";
import login from '../actions/login'

class Login extends Component {
    constructor(){
        super()
        this.state = {
            email: "",
            password: "",
            submitted: ""
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const email = this.state.email
        const password = this.state.password
        const user = {password: password, email: email}
        if (this.state.submitted === "login") {
            this.props.login(user)
        } else {
            this.props.register(user)
        }
        
    }

    loginGithub = () => {

    }

    render() {
        return(
            <main className="background">
                <section className="login">
                    <h1 className="login__heading">Welcome to Dog Land Academy</h1>
                    <form className="login__form" onSubmit={this.handleSubmit}>
                        <input className="login__form--input" type="email" id="inputEmail" name="email"  placeholder="Email Address" required autoFocus="" onChange={this.handleChange}/>
                        <input className="login__form--input" type="password" id="inputPassword" name="password" placeholder="Password" required onChange={this.handleChange}/>
                        <div className="login__form--submit-group">
                            <button className="login__form--submit btn" type="submit" name="submitted" value="login" onClick={this.handleChange}>Login</button>
                            <button className="login__form--submit btn" type="submit" name="submitted" value="register" onClick={this.handleChange}>Register</button>
                        </div>
                    </form>
                    <p className="login__seperator login__seperator--or">or</p>
                    <button className="github btn" onClick={this.loginGithub}>
                        <img className="github__icon" src={githubLogo} alt="github-logo"></img>
                        <p className="github__text">Login with Github</p>
                    </button>
                </section>
            </main>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (user) => dispatch(login(user))
    }
}

export default connect(null, mapDispatchToProps)(Login)