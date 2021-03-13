import { connect } from "react-redux"
import { Link } from "react-router-dom"
import logout from "../actions/logout"

function Navlink (props) {
    if (props.link.text === "Logout") {
        return(
            <li className="navigation__item" onClick={() => props.logout()}>
                <span className="navigation__item--text">{props.link.text}</span>
            </li>
        )
    } else {
        if (props.link.href.includes(":")) {
            let links = props.link.href.split("/")
            let newLinks = links.map(segment => {
                if (segment.includes(":")) {
                    if (localStorage.type === "user") {
                        return props.user.id
                    } else if (localStorage.type === "trainer") {
                        return props.trainer.id
                    }
                } else {
                    return segment
                }
            })
            props.link.href = newLinks.join("/")
        } 

        return(
            <Link to={props.link.href}>
                <li className="navigation__item">
                    <span className="navigation__item--text">{props.link.text}</span>
                </li>
            </Link>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loggedIn: state.loggedIn.loggedIn,
        user: state.user.user,
        trainer: state.trainer.trainer
    }
  }

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navlink)