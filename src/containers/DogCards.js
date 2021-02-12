import { Component } from "react";
import DogCard from '../components/DogCard'
import Modal from "../components/Modal";

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
                <li className="user__dogs--card">
                    <DogCard dog={dog}/>
                </li>
            )
        })
    }

    showModal = () => {
        this.setState({showModal: !this.state.showModal})
    }

    render() {
        return(
            <ul className="user__dogs--cards-list">
                {this.renderCards()}
                <button className="user__dogs--add-dog" onClick={this.showModal}>Add New Dog</button>
                {this.state.showModal ? <Modal showModal={this.showModal}/> : null}
            </ul>
        )
    }
}

export default DogCards