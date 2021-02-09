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
        return(
            <Link to={props.link.href}>
                <li className="navigation__item">
                    <span className="navigation__item--text">{props.link.text}</span>
                </li>
            </Link>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(null, mapDispatchToProps)(Navlink)