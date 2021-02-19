import { Component } from "react";
import { connect } from "react-redux";
import addDog from "../actions/addDog";
import getDogBreeds from "../actions/getDogBreeds";

class AddDogModal extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            breed: "",
            age: "",
            last_shot_date: "",
            avatar: null
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
        return this.props.dogBreeds.map((breed, index) => <option key={index} value={breed}>{breed}</option>)
    }

    setPhoto = (event) => {
        this.setState({avatar: event.target.files[0]});
    }

    handleSubmit = (event) => {
        event.preventDefault()
        var formData = new FormData(document.querySelector('form'))
        this.props.addDog(this.props.user, formData)
        this.props.showModal()
    }

    displayPreview = () => {
        if (this.state.avatar) {
            return( 
                <div className="user__dogs--card-img--container justify-space-between">
                    <div className="user__dogs--card-shape">
                        <img src={URL.createObjectURL(this.state.avatar)} className="user__dogs--card-img" alt="Preview"/>
                    </div>
                </div>
            )
        }
    }

    render() {
        return(
            <>
                <h2 className="dog-form__heading">Tell us about your dog.</h2>
                <form onSubmit={this.handleSubmit} className="dog-form">
                    <label className="dog-form__label" htmlFor="file">Image</label>
                    <div className="dog-form__file--container">
                        {this.displayPreview()}
                        <input className="dog-form__file--input" id="file" type='file' name='avatar' onChange={this.setPhoto}/> 
                    </div>
                    <label className="dog-form__label" htmlFor="name">Name</label>
                    <input className="dog-form__input" id="name" name="name" type="text" required placeholder="Name" onChange={this.handleChange} value={this.state.name}/>
                    <label className="dog-form__label" htmlFor="breed">Breed</label>
                    <select className="dog-form__input" id="breed" name="breed" type="text" required onChange={this.handleChange} value={this.state.breed}>
                        <option value="" >Select Breed</option>
                        {this.populateBreeds()}
                    </select>
                    <label className="dog-form__label" htmlFor="age">Age</label>
                    <select className="dog-form__input" id="age" name="age" type="text" required onChange={this.handleChange} value={this.state.age}>
                        <option value="" >Select Age</option>
                        <option value="0" key="0">0</option>
                        <option value="1" key="1">1</option>
                        <option value="2" key="2">2</option>
                        <option value="3" key="3">3</option>
                        <option value="4" key="4">4</option>
                        <option value="5" key="5">5</option>
                        <option value="6" key="6">6</option>
                        <option value="7" key="7">7</option>
                        <option value="8" key="8">8</option>
                        <option value="9" key="9">9</option>
                        <option value="10" key="10">10</option>
                        <option value="11" key="11">11</option>
                        <option value="12" key="12">12</option>
                    </select>
                    <label className="dog-form__label" htmlFor="shots">Date of last Rabies Shot</label>
                    <input className="dog-form__input" id="shots" name="last_shot_date" type="date" required onChange={this.handleChange} value={this.state.lastShotDate}/>
                    <button className="btn dog-form__btn" type="submit">Add Dog</button>
                </form>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dogBreeds: state.dogBreeds.dogBreeds,
        user: state.user.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getDogBreeds: () => dispatch(getDogBreeds()),
        addDog: (user, dog) => dispatch(addDog(user,dog))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddDogModal)