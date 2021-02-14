import { Component } from "react";
import DogCard from '../components/DogCard'
import Modal from "./Modal";

class DogCards extends Component {
    constructor() {
        super()
        this.state = {
            showModal: false
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

    showModal = () => {
        this.setState({showModal: !this.state.showModal})
    }

    renderModal = (component) => {
        return this.state.showModal ? component : null
    }

    render() {
        return(
            <ul className="user__dogs--cards-list">
                {this.renderCards()}
                <button className="user__dogs--add-dog btn" onClick={this.showModal}>Add New Dog</button>
                {this.renderModal(<Modal showModal={this.showModal} modal="addDog"/>)}
            </ul>
        )
    }
}

export default DogCards