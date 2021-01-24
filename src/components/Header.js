import { Component } from "react";
import "../styles/header.scss"

class Header extends Component {
    
    render() {
        return(
            <header class="header">
                <div class="header__text-box">
                    <h1 class="heading-primary">
                        <span class="heading-primary--main">Welcome to Dog Land</span>
                    </h1>
                </div>
            </header>
        )
    }
}

export default Header