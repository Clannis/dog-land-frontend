import { Component } from "react";

class Welcome extends Component {
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
            <>
                <h1>Welcome to Dog Land Academy</h1>
                <form>
                    <input type="email" id="inputEmail" name="email"  placeholder="Email Address" required="" autoFocus="" onChange={this.handleChange}/>
                    <input type="password" id="inputPassword" name="password" placeholder="Password" required="" onChange={this.handleChange}/>
                </form>
                <button onClick={this.handleLogin}>Login</button>
                <button onClick={this.handleRegister}>Register</button>
            </>
        )
    }
}

export default Welcome