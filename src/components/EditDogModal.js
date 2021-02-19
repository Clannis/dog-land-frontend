import { Component } from "react";
import { connect } from "react-redux";
import editDog from "../actions/editDog";
import getDogBreeds from "../actions/getDogBreeds";

class EditDogModal extends Component {
    constructor(props) {
        super()
        let dog = props.dogs.filter(dog => dog.id === props.id)[0]
        this.state = {
            id: dog.id,
            name: dog.name,
            breed: dog.breed,
            age: dog.age,
            last_shot_date: new Date(dog.lastShotDate).toISOString().split('T')[0],
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

    handleSubmit = (event) => {
        event.preventDefault()
        var formData = new FormData(document.querySelector('form'))
        this.props.editDog(this.props.user, formData, this.state.id)
        this.props.showModal()
    }

    setPhoto = (event) => {
        this.setState({avatar: event.target.files[0]});
    }

    render() {
        return(
            <>
                <h2 className="dog-form__heading">Edit your dog's info.</h2>
                <form onSubmit={this.handleSubmit} className="dog-form">
                    <input type='file' name='avatar' onChange={this.setPhoto}/> 
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
                    <button className="btn dog-form__btn" type="submit">Update</button>
                </form>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dogBreeds: state.dogBreeds.dogBreeds,
        user: state.user.user,
        dogs: state.user.user.dogs
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getDogBreeds: () => dispatch(getDogBreeds()),
        editDog: (user, dog, id) => dispatch(editDog(user,dog, id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditDogModal)