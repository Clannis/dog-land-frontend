import { Component } from "react";
import DogCard from '../components/DogCard'

class DogCards extends Component {

    renderCards = () => {
       return  this.props.dogs.map(dog => {
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
            </ul>
        )
    }
}

export default DogCards