import { Component } from "react";
import { connect } from "react-redux";
import getDogBreeds from "../actions/getDogBreeds";

class AddDogModal extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            breed: "",
            age: "",
            shots: ""
        }
    }

    componentDidMount() {
        if (this.props.dogBreeds.length === 0) {
            this.props.getDogBreeds()
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    populateBreeds = () => {
        return this.props.dogBreeds.map(breed => <option value={breed}>{breed}</option>)
    }

    handleSubmit = () => {

    }

    render() {
        return(
            <>
                <h2 className="dog-form__heading">Tell us about your dog.</h2>
                <form onSubmit={this.handleSubmit} className="dog-form">
                    <label className="dog-form__label" for="name">Name</label>
                    <input className="dog-form__input" id="name" name="name" type="text" required placeholder="Name" onChange={this.handleChange} value={this.state.name}/>
                    <label className="dog-form__label" for="breed">Breed</label>
                    <select className="dog-form__input" id="breed" name="breed" type="text" required onChange={this.handleChange} value={this.state.breed}>
                        <option value="" >Select Breed</option>
                        {this.populateBreeds()}
                    </select>
                    <label className="dog-form__label" for="age">Age</label>
                    <select className="dog-form__input" id="age" name="age" type="text" required onChange={this.handleChange} value={this.state.age}>
                        <option value="" >Select Age</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                    </select>
                    <label className="dog-form__label" for="shots">Date of last Rabies Shot</label>
                    <input className="dog-form__input" name="shots" type="date" required onChange={this.handleChange} value={this.state.shots}/>
                    <button className="btn dog-form__btn" type="submit">Add Dog</button>
                </form>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dogBreeds: state.dogBreeds.dogBreeds
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getDogBreeds: () => dispatch(getDogBreeds())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddDogModal)