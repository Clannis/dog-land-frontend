import { Component } from "react";
import "../styles/features.scss"
import "../styles/grid.scss"

class Features extends Component {
    
    render() {
        return(
            <section className="section-features">
                <div className="row">
                    <div className="col-1-of-3">
                        <div className="feature-box">
                            <i className="feature-box__icon icon-basic-world"></i>
                            <h3 className="heading-tertiary">Take Your Dog Anywhere</h3>
                            <p className="feature-box__text">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis quisquam rem illum incidunt nam tempora.
                            </p>
                        </div>
                    </div>

                    <div className="col-1-of-3">
                        <div className="feature-box">
                            <i className="feature-box__icon icon-basic-book-pencil"></i>
                            <h3 className="heading-tertiary">Learn Fancy Tricks</h3>
                            <p className="feature-box__text">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis quisquam rem illum incidunt nam tempora.
                            </p>
                        </div>
                    </div>

                    <div className="col-1-of-3">
                        <div className="feature-box">
                            <i className="feature-box__icon icon-basic-heart"></i>
                            <h3 className="heading-tertiary">Bond With Your Best Friend</h3>
                            <p className="feature-box__text">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis quisquam rem illum incidunt nam tempora.
                            </p>
                        </div>
                    </div>

                </div>
            </section>
        )
    }
}

export default Features