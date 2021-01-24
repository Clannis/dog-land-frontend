import { Component } from "react";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Stories from "../components/Stories";
import Navbar from "../containers/Navbar";
import "../styles/welcome.scss"

class Welcome extends Component {
    
    render() {
        return(
            <>
                <Navbar/>
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