import { Component } from "react";
import { connect } from "react-redux";
import "../styles/login.scss"
import trainerRegister from '../actions/trainerRegister'

class TrainerSignup extends Component {
    constructor(){
        super()
        this.state = {
            email: "",
            password: "",
            trainerCode: "",
            firstName: "",
            lastName: "",
            phoneNumber: "",
            username: "",
            certification: "",
            passwordConfirmation: ""
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        if (this.state.password === this.state.passwordConfirmation) {
            const trainer = { 
                password: this.state.password, 
                email: this.state.email,
                first_name: this.state.firstName,
                last_name: this.state.lastName,
                phone_number: this.state.phoneNumber,
                username: this.state.username,
                certification: this.state.certification
            }
            if (this.state.trainerCode === "1mAn3wTr4!N3r") {
                this.props.trainerRegister(trainer)
            } else {
                // add error display
            }
        } else {
            // add error display for mismatched passwords
        }
        
    }

    render() {
        return(
            <main className="background">
                <section className="login">
                    <h1 className="login__heading">Welcome to Dog Land Academy</h1>
                    <form className="login__form" onSubmit={this.handleSubmit}>
                        <input className="login__form--input" type="text" id="inputFirstName" name="firstName" placeholder="First Name" required onChange={this.handleChange} value={this.state.firstName}/>
                        <input className="login__form--input" type="text" id="inputLastName" name="lastName" placeholder="Last Name" required onChange={this.handleChange} value={this.state.lastName}/>
                        <input className="login__form--input" type="text" id="inputUsername" name="username" placeholder="Userame" required onChange={this.handleChange} value={this.state.username}/>
                        <input className="login__form--input" type="phone" id="inputPhoneNumber" name="phoneNumber" placeholder="Phone Number" required onChange={this.handleChange} value={this.state.phoneNumber}/>
                        <input className="login__form--input" type="text" id="inputCertification" name="certification" placeholder="Certification" required onChange={this.handleChange} value={this.state.certification}/>
                        <input className="login__form--input" type="email" id="inputEmail" name="email"  placeholder="Email Address" required autoFocus="" onChange={this.handleChange} value={this.state.email}/>
                        <input className="login__form--input" type="password" id="inputPassword" name="password" placeholder="Password" required onChange={this.handleChange} value={this.state.password}/>
                        <input className="login__form--input" type="password" id="inputPasswordConfirmation" name="passwordConfirmation" placeholder="Password Confirmation" required onChange={this.handleChange} value={this.state.passwordConfirmation}/>
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

const mapDispatchToProps = (dispatch) => {
    return {
        trainerRegister: (trainer) => dispatch(trainerRegister(trainer))
    }
}

export default connect(null, mapDispatchToProps)(TrainerSignup);