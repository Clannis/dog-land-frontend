import { Component } from "react";
import { connect } from "react-redux";

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
                        <div className="user__course-box--courses">
                            <p>Courses Enrolled:</p>
                        </div>
                        <div className="user__course-box--completed">
                            <p>Courses Completed:</p>
                        </div>
                        <div className="user__course-box--enrolled">
                            <p>Dogs Enrolled:</p>
                        </div>
                    </div>
                </section>
                <section className="user__dogs">

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