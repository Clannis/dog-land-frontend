import { Component } from "react";
import { connect } from "react-redux";
import getDogBreeds from "../actions/getDogBreeds";

class AddDogModal extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            breed: ""
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
            <form onSubmit={this.handleSubmit}>
                <input name="name" type="text" onChange={this.handleChange} value={this.state.name}/>
                <select name="breed" type="text" onChange={this.handleChange} value={this.state.breed}>
                    {this.populateBreeds()}
                </select>
                <select name="breed" type="text" onChange={this.handleChange} value={this.state.breed}>
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
                <input name="name" type="date" onChange={this.handleChange} value={this.state.name}/>
                <button className="btn" type="submit">Add Dog</button>
            </form>
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