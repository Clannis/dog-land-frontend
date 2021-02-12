import { Component } from "react";
import Navlink from "../components/Navlink";
import { navlinks } from "../config";
import Icon from '../assets/img/Icon.png'
import { Link } from "react-router-dom";
import { connect } from "react-redux"

class Navbar extends Component {

    renderNavlinks = () => {
        if (this.props.loggedIn) {
            return navlinks.filter( link => link.show === "loggedIn" || link.show === "both").map( link => <Navlink link={link} key={link.text}/>)
        } else {
            return navlinks.filter( link => link.show === "loggedOut" || link.show === "both").map( link => <Navlink link={link} key={link.text}/>)
        }
        
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

const mapStateToProps = (state) => {
    return {
        loggedIn: state.loggedIn.loggedIn
    }
}

export default connect(mapStateToProps)(Navbar)