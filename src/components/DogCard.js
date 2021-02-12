import { Component } from "react";

class DogCard extends Component {
    render() {
        return(
            <div className="user__dogs--card-text">
                <div className="user__dogs--card-img">

                </div>
                <div className="left">
                    <h3>{this.props.dog.name}</h3>
                    <p>Breed: {this.props.dog.breed}</p>
                    <p>Age: {this.props.dog.age}</p>
                </div>
                <div className="right">
                    <p>Currently Enrolled:</p>
                    <p>Next Class:</p>
                    <p>Shots up-to-date: {this.props.dog.shots ? "Yes" : "No"}</p>
                </div>
            </div>
        )
    }
}

export default DogCard