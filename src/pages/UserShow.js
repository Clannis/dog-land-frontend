import { Component } from "react";
import { connect } from "react-redux";
import DogCards from "../containers/DogCards";

class UserShow extends Component {
    render() {
        return (
            <main className="background">
                <section className="user">
                    <div className="user__user-box">
                        <div className="user__user-box--img">

                        </div>
                        <div className="user__user-box--text">
                            <h2 className="user__user-box--username">{this.props.user.username}</h2>
                            <p className="user__user-box--name">{this.props.user.name}</p>
                            <p className="user__user-box--phone-number">{this.props.user.phoneNumber}</p>
                            <p className="user__user-box--email">{this.props.user.email}</p>
                        </div>
                    </div>
                    <div className="user__course-box">
                        <div className="user__course-box--text">
                            <p className="user__course-box--courses">Courses Enrolled:</p>
                            <p className="user__course-box--completed">Courses Completed:</p>
                            <p className="user__course-box--enrolled">Dogs Enrolled:</p>
                        </div>
                    </div>
                </section>
                <section className="user__dogs">
                    <DogCards dogs={this.props.user.dogs}/>
                </section>
            </main>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user.user
    }
}

export default connect(mapStateToProps)(UserShow)