import { Component } from "react";
import Header from "../components/Header";
import Stories from "../components/Stories";
import "../styles/welcome.scss"

class Welcome extends Component {
    
    render() {
        return(
            <>
                <Header/>
                <Stories/>
            </>
        )
    }
}

export default Welcome