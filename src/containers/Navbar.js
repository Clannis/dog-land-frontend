import { Component } from "react";
import Navlink from "../components/Navlink";
import { navlinks } from "../config";
import "../styles/navbar.scss"
import Icon from '../assets/img/Icon.png'
import { Link } from "react-router-dom";

class Navbar extends Component {

    renderNavlinks = () => {
        return navlinks.map( link => <Navlink link={link} key={link.text}/>)
    }
    
    render() {
        return(
            <nav className="navigation">
                <Link to={"/"}><img src={Icon} className="navigation__icon" alt="dog-land-icon"/></Link>
                <ul className="navigation__list">
                    {this.renderNavlinks()}
                </ul>
            </nav>
        )
    }
}

export default Navbar