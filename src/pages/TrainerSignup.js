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
            trainerCode: ""
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const trainer = { password: this.state.password, email: this.state.email }
        if (this.state.trainerCode === "1mAn3wTr4!N3r") {
            this.props.trainerRegister(trainer)
        } else {
            // add error display
        }
        
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

const mapDispatchToProps = (dispatch) => {
    return {
        trainerRegister: (trainer) => dispatch(trainerRegister(trainer))
    }
}

export default connect(null, mapDispatchToProps)(TrainerSignup);