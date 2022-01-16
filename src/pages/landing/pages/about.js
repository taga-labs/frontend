import React from 'react';
import ReactDOM from 'react-dom';

// Fontawesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp, faChevronRight, faCopyright, faLongArrowAltDown, faLongArrowAltRight, faRocket } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faReddit, faYoutube } from '@fortawesome/free-brands-svg-icons';

import Nav from '../components/nav';

export default class LandingAbout extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            mobileMenu: false,
            mobileRescale: window.matchMedia("(max-width: 700px)").matches
        };

        this.toggleMobileMenu = this.toggleMobileMenu.bind(this);

        this.methods = {
            toggleMobileMenu: this.toggleMobileMenu
        }
    }

    componentDidMount() {
        document.title = "Taga | About Us";
        const mobileRescaleHandler = (e) => {
            this.setState({mobileRescale: e.matches});
        }

        window.matchMedia("(max-width: 700px)").addEventListener('change', mobileRescaleHandler);
    }

    toggleMobileMenu() {
        this.setState({mobileMenu: !this.state.mobileMenu});
    }

    render() {
        return(
            <div className="container overall">
                <Nav state={this.state} page={"about"} methods={this.methods} />
                <div className="container main about">
                    <div className="container about content">
                        <a className="text tagline">We design and build <br/>financial tools for the <span className="text keyword tagline">people.</span></a>
                        <br />
                        <br />
                        <br />
                        <br />
                        <p className="text paragraph about">The opportunity to be a part of the future should be open to anyone regardless of net-worth, physical location, or other traditional restriction.</p>
                        <br />
                        <br />
                        <br />
                        <br />
                        <a className="text about tagline smaller">Our Core Values</a>
                        <br />
                        <br />
                        <br />
                        <br />
                        <div className="container about values">
                            <div className="container value about">
                                <a className="text tagline smaller">Effort.</a>
                                <br />
                                <a className="text paragraph main">
                                We are sure that something seems impossible because it has not been tried enough. We strive to push the limits of technology even further to provide innovative solutions.
                                </a>
                            </div>
                            <div className="container value about">
                                <a className="text tagline smaller">Simplicity.</a>
                                <br />
                                <a className="text paragraph main">
                                    We at Taga believe that for financial tools to truly be democratized, they must appeal to the lowest denominator by default. 
                                </a>
                            </div>
                        </div>
                        <div className="container about values">
                            <div className="container value about">
                                <a className="text tagline smaller">Team.</a>
                                <br />
                                <a className="text paragraph main">
                                    Behind every succesful product, company, or project is a well-knit team who truly believe in bringing something new to the world.
                                </a>
                            </div>
                            <div className="container value about">
                                <a className="text tagline smaller">Compromise.</a>
                                <br />
                                <a className="text paragraph main">
                                   Finance is an industry that has been centralized for far too long. We are committed to bridging the gap between traditional financial systems and the emerging decentralized financial space.
                                </a>
                            </div>
                        </div>
                        <a className="text about tagline smaller">Let's make something cool together.</a>
                        <br />
                        <a className="text signin link" href="/careers" >Careers at Taga <span style={{fontSize: '1.5vh', marginLeft: '0.5vw', display: 'inline-block'}}><FontAwesomeIcon icon={faChevronRight} /></span></a>
                        <br />
                        <br />
                        <br />
                        <br />
                    </div>
                    <footer>
                            <div className="container footer interior">
                                <div className="container footer col">
                                    <a className="text footer header">Products</a>
                                    <br />
                                    <br />
                                    <a href="products/portfolio" className="text footer link">Portfolio</a>
                                </div>
                                <div className="container footer col">
                                    <a className="text footer header">Company</a>
                                    <br />
                                    <br />
                                    <a href="about" className="text footer link">About Us</a>
                                    <br />
                                    <br />
                                    <a href="legal" className="text footer link">Legal</a>
                                    <br />
                                    <br />
                                    <a href="support" className="text footer link">Support</a>
                                </div>
                                <div className="container footer col">
                                    <a className="text footer header">Join Us</a>
                                    <br />
                                    <br />
                                    <a href="get-started" className="text footer link">Create an Account</a>
                                    <br />
                                    <br />
                                    <a href="signin" className="text footer link">Sign In</a>
                                </div>
                                <div className="container footer col">
                                    <a className="text footer header">Social</a>
                                    <br />
                                    <br />
                                    <div>
                                        <a href="https://instagram.com/tagalabs" className="text footer link" style={{marginLeft: '1vw'}}>
                                            <FontAwesomeIcon icon={faInstagram} />
                                        </a>
                                        <a href="https://facebook.com/tagalabs" className="text footer link" style={{marginLeft: '1vw'}}>
                                            <FontAwesomeIcon icon={faFacebook} />
                                        </a>
                                        <a href="https://reddit.com/r/tagalabs" className="text footer link" style={{marginLeft: '1vw'}}>
                                            <FontAwesomeIcon icon={faReddit} />
                                        </a>
                                        <a href="https://youtube.com/tagalabs" className="text footer link" style={{marginLeft: '1vw'}}>
                                            <FontAwesomeIcon icon={faYoutube} />
                                        </a>
                                    </div>
                                    <br />
                                    <a href="https://github.com/tagalabs" className="text footer link">Github</a>
                                    <br />
                                    <br />
                                    <a href="blog" className="text footer link">Our Blog</a>
                                </div>
                            </div>
                            <br />
                            <div className="container footer copyright">
                                <a className="text footer link">Copyright <FontAwesomeIcon icon={faCopyright} /> 2021, Taga Labs, ltd</a>
                            </div>
                        </footer>
                </div>
            </div>
        )
    }
}