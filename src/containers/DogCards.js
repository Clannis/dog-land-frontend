import { Component } from "react";
import DogCard from '../components/DogCard'
import Modal from "./Modal";

class DogCards extends Component {
    constructor() {
        super()
        this.state = {
            showModal: false,
            modal: "",
            id: ""
        }
    }

    renderCards = () => {
        return this.props.dogs.map(dog => {
            return(
                <li className="user__dogs--card" key={dog.id}>
                    <DogCard dog={dog}/>
                </li>
            )
        })
    }

    showModal = (modal = "", id = "") => {
        this.setState({
            showModal: !this.state.showModal,
            modal: modal,
            id: id
        })
    }

    renderModal = (component) => {
        return this.state.showModal ? component : null
    }

    render() {
        return(
            <ul className="user__dogs--cards-list">
                {this.renderCards()}
                <button className="user__dogs--add-dog btn" onClick={() => this.showModal("addDog")}>Add New Dog</button>
                {this.renderModal(<Modal showModal={this.showModal} modal={this.state.modal} id={this.state.id}/>)}
            </ul>
        )
    }
}

export default DogCards