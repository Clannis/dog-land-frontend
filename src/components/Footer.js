import { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/footer.scss"

class Footer extends Component {
    
    render() {
        return(
            <footer className="footer">
                <div className="row">
                    <div className="col-1-of-2">
                        <div className="footer__navigation">
                            <ul className="footer__list">
                                <li className="footer__item"><Link to={"/trainer_signup"}><a href="#" className="footer__link">New Trainer</a></Link></li>
                                <li className="footer__item"><a href="#" className="footer__link">Testimonials</a></li>
                                <li className="footer__item"><a href="#" className="footer__link">Contact us</a></li>
                                <li className="footer__item"><a href="#" className="footer__link">About</a></li>
                                <li className="footer__item"><a href="#" className="footer__link">Terms</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-1-of-2">
                        <p className="footer__copyright">
                            Built by <a href="https://jamesrdodds.com/" className="footer__link">James Dodds</a> for <a href="https://flatironschool.com" className="footer__link">Flatiron School's</a> Software Engineering Online course. Copyright &copy; by James Dodds. Home Icon made by <a href="https://www.freepik.com" title="Freepik" className="footer__link">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon" className="footer__link">www.flaticon.com</a>
                        </p>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer