import { Component } from "react";
import Navlink from "../components/Navlink";
import { navlinks } from "../config";
import "../styles/navbar.scss"

class Navbar extends Component {

    renderNavlinks = () => {
        return navlinks.map( link => <Navlink link={link}/>)
    }
    
    render() {
        return(
            <nav class="navigation__nav">
                <ul class="navigation__list">
                    {this.renderNavlinks()}
                </ul>
            </nav>
        )
    }
}

export default Navbar