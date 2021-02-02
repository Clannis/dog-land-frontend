import { Link } from "react-router-dom"

const Navlink = (props) => {
    return(
        <Link to={props.link.href}>
            <li className="navigation__item">
                <span className="navigation__item--text">{props.link.text}</span>
            </li>
        </Link>
    )
}

export default Navlink