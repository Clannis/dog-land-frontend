import { Component } from "react";
import DogCard from '../components/DogCard'

class DogCards extends Component {

    renderCards = () => {
        return this.props.dogs.map(dog => {
            return(
                <li className="user__dogs--card">
                    <DogCard dog={dog}/>
                </li>
            )
        })
    }

    render() {
        return(
            <ul className="user__dogs--cards-list">
                {this.renderCards()}
                <button className="user__dogs--add-dog">Add New Dog</button>
            </ul>
        )
    }
}

export default DogCards