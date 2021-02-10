import { Component } from "react";
import "../styles/login.scss"
import githubLogo from '../assets/img/github-logo.png'
import { connect } from "react-redux";
import login from '../actions/login'
import { Link } from "react-router-dom"


class Login extends Component {
    constructor(){
        super()
        this.state = {
            email: "",
            password: "",
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const user = {user: {
            password: this.state.password,
            email: this.state.email
        } }
        this.props.login(user)
    }

    loginGithub = () => {

    }

    displayErrors = () => {
        if (this.props.errors > 0) {
            return (
                <div className="login__errors">
                    <ul className="login__errors--list">
                        {this.props.errors.map( error => <li className="login__errors--message">{error}</li>)}
                    </ul>
                </div>
            )
        }
        
    }

    render() {
        return(
            <main className="background">
                <section className="login">
                    <h1 className="login__heading">Welcome to Dog Land Academy</h1>
                    {this.displayErrors()}
                    <form className="login__form" onSubmit={this.handleSubmit}>
                        <input className="login__form--input" type="email" id="inputEmail" name="email"  placeholder="Email Address" required autoFocus="" onChange={this.handleChange} value={this.state.email}/>
                        <input className="login__form--input" type="password" id="inputPassword" name="password" placeholder="Password" required onChange={this.handleChange} value={this.state.password}/>
                        <div className="login__form--submit-group">
                            <button className="login__form--submit btn" type="submit">Login</button>
                            <Link to={{pathname: '/register', registerProps: {email: this.state.email, password: this.state.password}}}><button className="login__form--submit btn">Register</button></Link>
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

const mapStateToProps = (state) => {
    return {
        user: state.user.user,
        errors: state.user.errors
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (user) => dispatch(login(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)