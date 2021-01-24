import { Component } from "react";
import "../styles/header.scss"

class Header extends Component {
    
    render() {
        return(
            <header className="header">
                <div className="header__text-box">
                    <h1 className="heading-primary">
                        <span className="heading-primary--main">Welcome to Dog Land</span>
                    </h1>
                </div>
            </header>
        )
    }
}

export default Header