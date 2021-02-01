
const Navlink = (props) => {
    return(
        <li className="navigation__item">
            <span className="navigation__item--text">{props.link.text}</span>
        </li>
    )
}

export default Navlink