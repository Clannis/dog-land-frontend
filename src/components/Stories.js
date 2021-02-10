import { Component } from "react";
import videoMp4 from '../assets/video/walking-dogs.mp4'
import videoWeb from '../assets/video/walking-dogs.webm'
import casper from '../assets/img/casper.jpg'
import caesar from "../assets/img/caesar.jpg";

class Stories extends Component {
    
    render() {
        return(
            <section className="section-stories">
                <div className="bg-video">
                    <video className="bg-video__content" autoPlay loop muted >
                            <source src={videoMp4} type="video/mp4"/>
                            <source src={videoWeb} type="video/webm"/>
                            Your browser is not supported!
                    </video>
                </div>
                <div className="story__heading">
                    <h2 className="story__heading-secondary">
                        Testimonials
                    </h2>
                </div>

                <div className="row">
                    <div className="story">
                        <figure className="story__shape">
                            <img src={caesar} alt="Person on a tour" className="story__img"/>
                            <figcaption className="story__caption">Mary Smith</figcaption>
                        </figure>
                        <div className="story__text">
                            <h3 className="story__heading-tertiary">I can finally trust my dog at home.</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque deleniti a, ratione expedita sed nobis veritatis explicabo exercitationem vel sequi corrupti! Magnam, soluta. Debitis praesentium est fugiat dolorum atque accusamus. Debitis praesentium est fugiat dolorum atque accusamus.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="story">
                        <figure className="story__shape">
                            <img src={casper} alt="Person on a tour" className="story__img"/>
                            <figcaption className="story__caption">Jack Wilson</figcaption>
                        </figure>
                        <div className="story__text">
                            <h3 className="story__heading-tertiary">My dog is so well behaved!!!</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque deleniti a, ratione expedita sed nobis veritatis explicabo exercitationem vel sequi corrupti! Magnam, soluta. Debitis praesentium est fugiat dolorum atque accusamus. Debitis praesentium est fugiat dolorum atque accusamus.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Stories