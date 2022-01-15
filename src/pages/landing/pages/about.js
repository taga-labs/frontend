import React from 'react';
import ReactDOM from 'react-dom';

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
                <div className="container content">
                    <div className="container about content">
                        <a className="text tagline">We design and build <span className="text keyword tagline">world-class</span> <br/>financial tools for the <span className="text keyword tagline">people.</span></a>
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
                    </div>
                </div>
            </div>
        )
    }
}