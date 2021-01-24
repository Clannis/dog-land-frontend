import { Component } from "react";
import Features from "../components/Features";
import Header from "../components/Header";
import Stories from "../components/Stories";
import "../styles/welcome.scss"

class Welcome extends Component {
    
    render() {
        return(
            <>
                <Header/>
                <Stories/>
                <Features/>
            </>
        )
    }
}

export default Welcome