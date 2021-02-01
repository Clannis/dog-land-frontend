import { Component } from "react";
import "../styles/footer.scss"

class Footer extends Component {
    
    render() {
        return(
            <footer class="footer">
                <div class="row">
                    <div class="col-1-of-2">
                        <div class="footer__navigation">
                            <ul class="footer__list">
                                <li class="footer__item"><a href="#" class="footer__link">Login</a></li>
                                <li class="footer__item"><a href="#" class="footer__link">Testimonials</a></li>
                                <li class="footer__item"><a href="#" class="footer__link">Contact us</a></li>
                                <li class="footer__item"><a href="#" class="footer__link">About</a></li>
                                <li class="footer__item"><a href="#" class="footer__link">Terms</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-1-of-2">
                        <p class="footer__copyright">
                            Built by <a href="https://jamesrdodds.com/" class="footer__link">James Dodds</a> for <a href="https://flatironschool.com" class="footer__link">Flatiron School's</a> Software Engineering Online course. Copyright &copy; by James Dodds.
                        </p>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer