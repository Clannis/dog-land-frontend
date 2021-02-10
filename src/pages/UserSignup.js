import { Component } from "react";
import { connect } from "react-redux";
import userRegister from '../actions/userRegister'


class UserSignup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: props.registerProps ? props.registerProps.email : "",
            password: props.registerProps ? props.registerProps.password : "",
            passwordConfirmation: "",
            firstName: "",
            lastName: "",
            phoneNumber: "",
            username: ""
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        if (this.state.password === this.state.passwordConfirmation) {
            const user = {user: {
                password: this.state.password, 
                email: this.state.email, 
                first_name: this.state.firstName,
                last_name: this.state.lastName,
                phone_number: this.state.phoneNumber,
                username: this.state.username
            } }
            this.props.userRegister(user)
        } else {
            // add error display
        }
    }

    displayErrors = () => {
        if (this.props.errors.length > 0) {
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
        return (
            <main className="background">
                <section className="login">
                    <h1 className="login__heading">Welcome to Dog Land Academy</h1>
                    {this.displayErrors()}
                    <form className="login__form" onSubmit={this.handleSubmit}>
                        <input className="login__form--input" type="text" id="inputFirstName" name="firstName" placeholder="First Name" required onChange={this.handleChange} value={this.state.firstName}/>
                        <input className="login__form--input" type="text" id="inputLastName" name="lastName" placeholder="Last Name" required onChange={this.handleChange} value={this.state.lastName}/>
                        <input className="login__form--input" type="text" id="inputUsername" name="username" placeholder="Userame" required onChange={this.handleChange} value={this.state.username}/>
                        <input className="login__form--input" type="phone" id="inputPhoneNumber" name="phoneNumber" placeholder="Phone Number" required onChange={this.handleChange} value={this.state.phoneNumber}/>
                        <input className="login__form--input" type="email" id="inputEmail" name="email"  placeholder="Email Address" required autoFocus="" onChange={this.handleChange} value={this.state.email}/>
                        <input className="login__form--input" type="password" id="inputPassword" name="password" placeholder="Password" required onChange={this.handleChange} value={this.state.password}/>
                        <input className="login__form--input" type="password" id="inputPasswordConfirmation" name="passwordConfirmation" placeholder="Password Confirmation" required onChange={this.handleChange} value={this.state.passwordConfirmation}/>
                        <div className="login__form--submit-group">
                            <button className="login__form--submit btn" type="submit" name="submitted" onClick={this.handleChange}>Register</button>
                        </div>
                    </form>
                </section>
            </main>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        trainer: state.user.user,
        errors: state.user.errors
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userRegister: (user) => dispatch(userRegister(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserSignup)