import { Component } from "react";
import DogCard from '../components/DogCard'
import Modal from "./Modal";

class DogCards extends Component {
    constructor() {
        super()
        this.state = {
            showModal: false,
            modal: "",
            passDown: ""
        }
    }

    renderCards = () => {
        return this.props.dogs.map(dog => {
            return(
                <li className="user__dogs--card" key={dog.id}>
                    <DogCard dog={dog} showModal={this.showModal}/>
                </li>
            )
        })
    }

    showModal = (modal = "", passDown = "") => {
        this.setState({
            showModal: !this.state.showModal,
            modal: modal,
            passDown: passDown
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
                {this.renderModal(<Modal showModal={this.showModal} modal={this.state.modal} id={this.state.passDown}/>)}
            </ul>
        )
    }
}

export default DogCards