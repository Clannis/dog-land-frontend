import { Component } from "react";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Stories from "../components/Stories";
import "../styles/welcome.scss"

class Welcome extends Component {
    
    render() {
        return(
            <>
                <Header/>
                <main>
                    <Stories/>
                    <Features/>
                </main>
                <Footer/>
            </>
        )
    }
}

export default Welcome