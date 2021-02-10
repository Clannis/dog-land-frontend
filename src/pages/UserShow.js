import { Component } from "react";
import { connect } from "react-redux";

class UserShow extends Component {
    render() {
        return (
            <main className="background">
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