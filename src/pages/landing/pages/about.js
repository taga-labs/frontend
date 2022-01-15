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
                        <a className="text tagline">We design and build <span className="text keyword tagline">world-class</span> financial tools for the <span className="text keyword tagline">people.</span></a>
                        <br />
                        <br />
                        <br />
                        <br />
                        <p className="text paragraph about">We believe the opportunity to be a part of the future should be open to anyone regardless of net-worth, physical location, or other traditional restriction.</p>
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
                                <a className="text tagline smaller">Effort.</a>
                                <a className="text paragraph main">
                                    
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}