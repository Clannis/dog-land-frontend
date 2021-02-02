import { Component } from "react";
import "../styles/login.scss"

class TrainerLogin extends Component {
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

    handleSubmit = (event) => {
        event.preventDefault()
        const email = this.state.email
        const password = this.state.password
        const user = {password: password, email: email}
        if (event.submit === "Login") {
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
                        <input className="login__form--input" type="text" id="trainerCode" name="trainerCode" placeholder="Trainer Code" required onChange={this.handleChange}/>
                        <div className="login__form--submit-group">
                            
                            <button className="login__form--submit btn" type="submit" name="submit">Register</button>
                        </div>
                    </form>
                </section>
            </main>
        )
    }
}

export default TrainerLogin